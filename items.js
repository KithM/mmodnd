function generateItem(tries = 0) {
    if (tries >= 10) {
        console.error("Exceeded maximum retry attempts, chosenType or chosenItem is undefined");
        return null;
    }
    // Decide if we're going for a premade or random item
    let premadeChance = 0.6 + Math.random() * 0.2; // Random value between 0.6 and 0.8 (60% to 80%)
    
    // Get the selected source from the dropdown
    const selectedSource = document.getElementById("itemSourceDropdown").value;

    let itemQualities = [];  // This will hold the relevant array based on the source
    switch (selectedSource) {
        case 'All':
            itemQualities = itemQualitiesAll;
            break;
        case 'Loot':
            itemQualities = itemQualitiesLoot;
            break;
        case 'Chest':
            itemQualities = itemQualitiesChest;
            premadeChance = 0.25;//0.4 + Math.random() * 0.2;
            break;
        case 'Boss':
            itemQualities = itemQualitiesBoss;
            premadeChance = 0.05;//0.2 + Math.random() * 0.2;
            break;
        default:
            console.error('Invalid source selected.');
            return;
    }

    let inputLevel = parseInt(document.getElementById("itemLevel").value, 10);
    let itemLevel = getRandomNumberBetween(Math.max(inputLevel - 2, 1), Math.min(inputLevel + 2, 100));

    if (Math.random() <= premadeChance) {
        // Get a random premade item
        let chosenPremadeItem = rollForItem(premadeItems);//premadeItems[Math.floor(Math.random() * premadeItems.length)];

        // If the chosen item is a potion, adjust its properties based on level.
        if (chosenPremadeItem.type === 'Consumable' && (chosenPremadeItem.healing || chosenPremadeItem.essence)) {
            return generatePotion(chosenPremadeItem, itemLevel);
        }
        return chosenPremadeItem;
    }
    
    let attributeTotal = Math.floor(itemLevel * 2.5);
    let remainingAttributes = attributeTotal;
    //let statMultiplier = 1; // Initialize stat multiplier

    let availableItems = items;
    let chosenItem = rollForItem(availableItems);

    // Filter lootTypes based on both the chosenItem's itemType and level
    let compatibleLootTypes = lootTypes.filter(lootType =>
        (!lootType.validTypes || lootType.validTypes.includes(chosenItem.itemType)) &&
        (!lootType.level || lootType.level <= itemLevel) &&
        (!chosenItem.invalidMaterials || !chosenItem.invalidMaterials.includes(lootType.name)) &&
        (!chosenItem.onlyMaterials || chosenItem.onlyMaterials.includes(lootType.name))
    );
    let chosenType = rollForItem(compatibleLootTypes);

    if (!chosenType || !chosenItem) {
        return generateItem(tries + 1);
    }

    // NEW! item qualities

    // Filter item qualities based on chosenItem's itemType and get a random quality
    let applicableQualities = itemQualities.filter(q => 
        q.applicableTo.includes(chosenItem.itemType) && itemLevel >= q.minLevel
    );

    let chosenQuality = itemQualities[0];  // Default to the first in the list if none found

    if (applicableQualities != null && applicableQualities.length > 0) {
        chosenQuality = rollForItem(applicableQualities);
    }

    // Effective level
    let effectiveLevel = itemLevel + (chosenQuality.multiplier - 1) * itemLevel;

    let minDamage, maxDamage, slot;
    let durability = Math.floor(5 * chosenQuality.multiplier);

    if (chosenItem.minDamage && chosenItem.maxDamage) {
        minDamage = Math.floor(effectiveLevel * chosenItem.minDamage); //itemLevel
        maxDamage = Math.floor(effectiveLevel * chosenItem.maxDamage); //itemLevel
    }

    if (chosenItem.slot) {
        slot = chosenItem.slot;
    }

    let generatedItem = {
        level: itemLevel,
        slot: slot || null,
        primaryAttribute: null,
        primaryValue: null,
        secondaryAttributes: {},
        minDamage: minDamage || null,
        maxDamage: maxDamage || null,
        itemQuality: chosenQuality,
        durability: durability
    };
    // NEW!

    // Effective level
    attributeTotal = Math.floor(effectiveLevel * 2.5);
    remainingAttributes = attributeTotal;

    let maxAttributes = 1; // Default to 1 attribute (Common)
    switch (chosenQuality.name) {
        case 'Common': maxAttributes = 1; break;
        case 'Uncommon': maxAttributes = 2; break;
        case 'Rare': maxAttributes = 3; break;
        case 'Epic': maxAttributes = 4; break;
        case 'Legendary': maxAttributes = 5; break;
    }

    // If itemType is 'Equipment', allocate some attributes to Stamina first
    if (chosenItem.itemType === 'Equipment') {
        let stam = 'Stamina';
        let stamPercent = chosenType.baseStamina || 0.1; // Default to 0.1 if not defined
        let stamValue = Math.max(Math.floor(remainingAttributes * stamPercent), 1);
        
        generatedItem.secondaryAttributes[stam] = stamValue;
        remainingAttributes -= stamValue;
    }

    // Assign primary stat
    if (chosenItem.primaryStats && remainingAttributes > 0) { 
        let primaryAttribute = chosenItem.primaryStats[Math.floor(Math.random() * chosenItem.primaryStats.length)];
        let primaryValue = Math.max(Math.floor(remainingAttributes * (0.4 + Math.random() * 0.2)), 1); 
        generatedItem.primaryAttribute = primaryAttribute;
        generatedItem.primaryValue = primaryValue;
        remainingAttributes -= primaryValue;
    }

    let availableSecondaryAttributes = secondaryAttributes;
    if (chosenItem.itemType === 'Equipment') {
        availableSecondaryAttributes = secondaryAttributes.filter(attr => attr !== "Stamina"); // Exclude Stamina since it's already assigned
    }
    if (chosenItem.secondaryStats) {
        availableSecondaryAttributes = availableSecondaryAttributes.filter(attr => chosenItem.secondaryStats.includes(attr));
    }

    console.log('Available Secondary Attributes:', availableSecondaryAttributes);
    console.log('Max Attributes:', maxAttributes);

    let iterations = 0;
    let pickedAttributes = [];
    while (pickedAttributes.length < maxAttributes && iterations < 100) {
        iterations++;
    
        let attribute = availableSecondaryAttributes[Math.floor(Math.random() * availableSecondaryAttributes.length)];
        if (attribute && !pickedAttributes.includes(attribute)) {
            pickedAttributes.push(attribute);
        }
    }
    console.log('Picked attributes:', pickedAttributes);

    let avgValuePerAttribute = Math.floor(remainingAttributes / pickedAttributes.length);
    console.log('Average attribute value:', avgValuePerAttribute);

    // Assign required secondary stats first, if any
    // Roll for secondary attributes
    if (chosenItem.requiredSecondaryStats) {
        for (let requiredStat of chosenItem.requiredSecondaryStats) {
            let value = Math.min(Math.floor(Math.random() * remainingAttributes) + 1, remainingAttributes);
            value = Math.max(1, value);  // Ensure at least 1 point is assigned.
            generatedItem.secondaryAttributes[requiredStat] = value;
            remainingAttributes -= value;
        }
        // Filter out the required stats from the list of available attributes
        availableSecondaryAttributes = availableSecondaryAttributes.filter(attr => !chosenItem.requiredSecondaryStats.includes(attr));
    }

    // Distribute remaining attributes among the selected attributes
    for (let attribute of pickedAttributes) {
        let value = avgValuePerAttribute;
        value = Math.max(1, value);
        generatedItem.secondaryAttributes[attribute] = value;
        remainingAttributes -= value;
    }

    // At this point, if there's any remainingAttributes (due to flooring), distribute them randomly
    iterations = 0;
    while (remainingAttributes > 0 && iterations < 100 ) {
        let attribute = pickedAttributes[Math.floor(Math.random() * pickedAttributes.length)];
        generatedItem.secondaryAttributes[attribute]++;
        remainingAttributes--;

        console.log(`Attribute: ${attribute}. Value: ${generatedItem.secondaryAttributes[attribute]}`);
    }

    // END OF NEW!

    // Create base name from chosen item type and loot type
    let baseName = `${chosenType.name} ${chosenItem.name}`;

    // Create full item name
    let statsToConsider = { ...generatedItem.secondaryAttributes };
    if (generatedItem.primaryAttribute && generatedItem.primaryValue) {
        statsToConsider[generatedItem.primaryAttribute] = generatedItem.primaryValue;
    }
    generatedItem.name = generateItemName(baseName, chosenItem.itemType, statsToConsider);

    console.log(generatedItem);

    return generatedItem;
}

function rollForItem(itemArray) {
    if (!itemArray || !itemArray.length) {
        console.error("Empty or undefined itemArray passed to rollForItem");
        return null;
    }

    let totalProbability = 0;
    itemArray.forEach((item) => {
        totalProbability += item["p"];
    });

    let randomValue = Math.random() * totalProbability;
    for (let i = 0; i < itemArray.length; i++) {
        randomValue -= itemArray[i]["p"];
        if (randomValue <= 0) {
            return itemArray[i];
        }
    }
    return itemArray[0];  // Fallback
}

function rollForAttribute(attributeProbabilities) {
    let totalProbability = 0;
    for (let prob of Object.values(attributeProbabilities)) {
        totalProbability += prob;
    }

    let randomValue = Math.random() * totalProbability;
    for (let [attribute, prob] of Object.entries(attributeProbabilities)) {
        randomValue -= prob;
        if (randomValue <= 0) {
            return attribute;
        }
    }

    return null; // Fallback, should never happen if probabilities sum to 1
}

function generateItemName(baseName, itemType, stats) {
    let matchingNames = [];
    let totalStats = 0;

    // Calculate the total stats for this item
    for (let value of Object.values(stats)) {
        totalStats += value;
    }

    // Find name components based on stats
    for (let [name, [isSuffix, requiredStats, threshold]] of Object.entries(itemNames)) {
        let statSum = 0;

        // Support both single stat and multiple stats
        if (Array.isArray(requiredStats)) {
            for (let stat of requiredStats) {
                statSum += stats[stat] || 0;
            }
        } else {
            statSum = stats[requiredStats] || 0;
        }

        if (statSum / totalStats >= threshold) {
            matchingNames.push({ name, isSuffix });
        }
    }

    // Optionally add a "None" choice to allow for items with no prefix/suffix
    matchingNames.push({ name: '', isSuffix: false });

    // Pick a random name component from the matching ones
    let selected = matchingNames[Math.floor(Math.random() * matchingNames.length)];

    return selected.isSuffix ?
        `${baseName} ${selected.name}`.trim() :
        `${selected.name} ${baseName}`.trim();
}

function generatePotion(item, lvl) {
    let healingValue = 0;// = item.healing * lvl;
    let essenceValue = 0;// = item.essence * lvl;
    
    if(item.healing){
        healingValue = item.healing * lvl;

        return {
            ...item,
            level: lvl,
            description: `Use: Restores ${healingValue} Health.`
        };
    } else if(item.essence){
        essenceValue = item.essence * lvl;

        return {
            ...item,
            level: lvl,
            description: `Use: Restores ${essenceValue} Essence.`
        };
    }
    
    return null;
}