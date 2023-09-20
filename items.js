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

    let minDamage, maxDamage, slot;

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
    };

    if(chosenItem.primaryStats){
        let primaryAttribute = chosenItem.primaryStats[Math.floor(Math.random() * chosenItem.primaryStats.length)];
        let primaryValue = Math.floor(attributeTotal * 0.5) * statMultiplier; 
        generatedItem.primaryAttribute = primaryAttribute;
        generatedItem.primaryValue = primaryValue;
        remainingAttributes -= primaryValue;
    }

    // Initialize an empty object to hold rolled attributes
    let rolledAttributes = {};

    // Roll for secondary attributes
    let availableSecondaryAttributes = secondaryAttributes;
    if (chosenItem.secondaryStats) {
        availableSecondaryAttributes = availableSecondaryAttributes.filter(attr => chosenItem.secondaryStats.includes(attr));
    }

    let maxAttributes = 4; // Limit the total number of attributes to 4
    let numberOfAttributes = 1; // 1 for the primary attribute
    let chanceForAdditionalAttribute = 0.75; // Chance to get an additional attribute

    while (remainingAttributes > 0 && numberOfAttributes < maxAttributes) {
        if (Math.random() < chanceForAdditionalAttribute) {
            let attribute = availableSecondaryAttributes[Math.floor(Math.random() * availableSecondaryAttributes.length)];
            let value = Math.min(Math.floor(Math.random() * remainingAttributes) + 1, remainingAttributes) * statMultiplier;
            
            remainingAttributes -= value;
            rolledAttributes[attribute] = (rolledAttributes[attribute] || 0) + value;

            numberOfAttributes++;
            chanceForAdditionalAttribute *= 0.5; // Reduce the chance for another additional attribute
        } else {
            break; // Stop if we didn't roll successfully for an additional attribute
        }
    }

    // Populate secondary attributes into generatedItem
    for (let [attribute, value] of Object.entries(rolledAttributes)) {
        generatedItem.secondaryAttributes[attribute] = value;
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
    let matchingPrefixes = [];
    let matchingSuffixes = [];
    let totalStats = 0;

    // Calculate the total stats for this item
    for (let value of Object.values(stats)) {
        totalStats += value;
    }

    // Find the best name match based on the stats
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
            if (isSuffix) {
                matchingSuffixes.push(name);
            } else {
                matchingPrefixes.push(name);
            }
        }
    }

    // Pick random prefix and suffix from matching ones
    let prefix = matchingPrefixes.length > 0 ? matchingPrefixes[Math.floor(Math.random() * matchingPrefixes.length)] : '';
    let suffix = matchingSuffixes.length > 0 ? matchingSuffixes[Math.floor(Math.random() * matchingSuffixes.length)] : '';

    return `${prefix ? prefix + ' ' : ''}${baseName} ${suffix}`.trim();
}

// // Example usage
// const baseName = 'Leather Harness';
// const itemType = 'Belt';
// const stats = { 'Stamina': 29 };

// const generatedName = generateItemName(baseName, itemType, stats);

//document.getElementById("result").innerHTML = resultString;