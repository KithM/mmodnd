function generateItem(tries = 0) {
    if (tries >= 10) {
        console.error("Exceeded maximum retry attempts, chosenType or chosenItem is undefined");
        return null;
    }
    
    let inputLevel = parseInt(document.getElementById("itemLevel").value, 10);
    let itemLevel = getRandomNumberBetween(Math.max(inputLevel - 2, 1), Math.min(inputLevel + 2, 100));
    let attributeTotal = Math.floor(itemLevel * 2.5);
    let remainingAttributes = attributeTotal;
    let statMultiplier = 1; // Initialize stat multiplier

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

    // Filter item qualities based on chosenItem's itemType and get a random quality
    let applicableQualities = itemQualities.filter(q => q.applicableTo.includes(chosenItem.itemType));
    let chosenQuality = itemQualities[0];

    if(applicableQualities != null && applicableQualities.length > 0){
        chosenQuality = rollForItem(applicableQualities);
    }

    let minDamage, maxDamage, slot;
    let durability = Math.floor(10 * chosenQuality.multiplier);

    if (chosenItem.minDamage && chosenItem.maxDamage) {
      minDamage = Math.floor(itemLevel * chosenItem.minDamage);
      maxDamage = Math.floor(itemLevel * chosenItem.maxDamage);
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

    // Apply quality multiplier to all attributes
    attributeTotal = Math.floor(attributeTotal * chosenQuality.multiplier);
    remainingAttributes = attributeTotal;

    if(chosenItem.primaryStats){
        let primaryAttribute = chosenItem.primaryStats[Math.floor(Math.random() * chosenItem.primaryStats.length)];
        let primaryValue = Math.floor(attributeTotal * 0.5) * statMultiplier; 
        generatedItem.primaryAttribute = primaryAttribute;
        generatedItem.primaryValue = primaryValue;
        remainingAttributes -= primaryValue;

        // If itemType is 'Equipment', allocate some attributes to Stamina first
        if(chosenItem.itemType === 'Equipment'){
            let stam = 'Stamina';
            
            // For example, allocate 30% of the remaining attributes to Stamina
            let stamValue = Math.max(1, Math.floor(remainingAttributes * 0.3));
            generatedItem.secondaryAttributes[stam] = stamValue;
            remainingAttributes -= stamValue;
        }
    }

    // Initialize an empty object to hold rolled attributes
    let rolledAttributes = {};

    // Roll for secondary attributes
    let availableSecondaryAttributes = secondaryAttributes;
    if (chosenItem.secondaryStats) {
        availableSecondaryAttributes = availableSecondaryAttributes.filter(attr => chosenItem.secondaryStats.includes(attr));
    }

    let maxAttributes = 3; // Limit the total number of attributes
    let numberOfAttributes = 1; // 1 for the primary attribute
    let chanceForAdditionalAttribute = 0.75; // Chance to get an additional attribute


    // Determine max attributes based on item quality
    switch (chosenQuality.name) {
        case 'Common':
            maxAttributes = 1;  // Only primary stat
            break;
        case 'Uncommon':
            maxAttributes = 2;  // Primary + 1 Secondary
            break;
        case 'Rare':
            maxAttributes = 3;  // Primary + 2 Secondary
            break;
        case 'Epic':
            maxAttributes = 4;  // Primary + 3 Secondary
            break;
        case 'Legendary':
            maxAttributes = 5;  // Primary + 4 Secondary
            break;
    }

    // We'll add attributes until we reach the desired number of attributes or run out of remaining attributes.
    while (remainingAttributes > 0 && numberOfAttributes < maxAttributes) {
        let attribute = availableSecondaryAttributes[Math.floor(Math.random() * availableSecondaryAttributes.length)];
        let value = Math.min(Math.floor(Math.random() * remainingAttributes) + 1, remainingAttributes) * statMultiplier;
                
        // Make sure value is at least 1
        value = Math.max(1, value);
        remainingAttributes -= value;

        // If the attribute has already been chosen, loop until a new attribute is selected.
        while(rolledAttributes[attribute]) {
            attribute = availableSecondaryAttributes[Math.floor(Math.random() * availableSecondaryAttributes.length)];
        }

        rolledAttributes[attribute] = (rolledAttributes[attribute] || 0) + value;
        numberOfAttributes++;
    }

    for (let [attribute, value] of Object.entries(rolledAttributes)) {
        generatedItem.secondaryAttributes[attribute] = (generatedItem.secondaryAttributes[attribute] || 0) + value;
    }

    // Create base name from chosen item type and loot type
    let baseName = `${chosenType.name} ${chosenItem.name}`;

    // Create full item name
    let statsToConsider = {...generatedItem.secondaryAttributes};
    if (generatedItem.primaryAttribute && generatedItem.primaryValue) {
        statsToConsider[generatedItem.primaryAttribute] = generatedItem.primaryValue;
    }
    generatedItem.name = generateItemName(baseName, chosenItem.itemType, statsToConsider);

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

// // Example usage
// const baseName = 'Leather Harness';
// const itemType = 'Belt';
// const stats = { 'Stamina': 29 };

// const generatedName = generateItemName(baseName, itemType, stats);

//document.getElementById("result").innerHTML = resultString;