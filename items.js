function generateItem(tries = 0) {
    if (tries >= 10) {
        console.error("Exceeded maximum retry attempts, chosenType or chosenItem is undefined");
        return;
    }
    
    let inputLevel = parseInt(document.getElementById("itemLevel").value, 10);
    let itemLevel = getRandomNumberBetween(Math.max(inputLevel - 2, 1), Math.min(inputLevel + 2, 100));
    let attributeTotal = Math.floor(itemLevel * 2.5);

    // Filter items based on level
    let availableItems = items; // items.filter(item => );

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
        generateItem(tries + 1);
        return;
    }
  
    let resultString = `<br>${chosenType.name} ${chosenItem.name}<br>Level ${itemLevel}<br>`;
    
    // Calculate and display damage for weapons
    if (chosenItem.minDamage && chosenItem.maxDamage) {
      let minDamage = Math.floor(itemLevel * chosenItem.minDamage);//Math.floor(itemLevel * chosenItem.minDamage * chosenType.m);
      let maxDamage = Math.floor(itemLevel * chosenItem.maxDamage);//Math.floor(itemLevel * chosenItem.maxDamage * chosenType.m);
      resultString += `${minDamage}-${maxDamage} Damage<br>`;
    }
  
    // Roll for equipment slot if the item is an equipment
    if (chosenItem.slot) {
      let slot = chosenItem.slot;//chosenItem.slot[Math.floor(Math.random() * chosenItem.slot.length)];
      resultString += `Slot: ${slot}<br>`;
    }
  
    // Roll for primary attributes
    let remainingAttributes = attributeTotal;
    let maxAttributes = 4; // Limit the total number of attributes to 4
    let numberOfAttributes = 1; // 1 for the primary attribute
    let statMultiplier = 1; // Initialize stat multiplier

    // Check if the item is two-handed and apply a multiplier
    if (chosenItem.slot == 'Two-Handed') {
        statMultiplier = 2;
    }

    if(chosenItem.primaryStats){
        let primaryAttribute = chosenItem.primaryStats[Math.floor(Math.random() * chosenItem.primaryStats.length)];
        let primaryValue = Math.floor(attributeTotal * 0.5) * statMultiplier; // You can change the 0.5 to adjust how much goes into primary stat
        resultString += `+${primaryValue} ${primaryAttribute}<br>`;
        
        remainingAttributes -= primaryValue;
    }
    
    /// Roll for secondary attributes
    let availableSecondaryAttributes = secondaryAttributes;
    if (chosenItem.secondaryStats) {
        availableSecondaryAttributes = availableSecondaryAttributes.filter(attr => chosenItem.secondaryStats.includes(attr));
    }

    // Determine if this item should always have Stamina
    let rolledAttributes = { };
    let chanceForAdditionalAttribute = 0.75;

    const itemsWithStamina = ['Equipment','Shield'];
    if (itemsWithStamina.includes(chosenItem.name)) {
        let staminaValue = Math.floor(itemLevel * 1.5) * statMultiplier;  // You can adjust this formula as needed
        remainingAttributes -= staminaValue;
        rolledAttributes['Stamina'] = staminaValue;
    }
  
    while (remainingAttributes > 0 && numberOfAttributes < maxAttributes) {
        if (Math.random() < chanceForAdditionalAttribute) {
            let attribute = rollForAttribute(attributeProbabilities);
            let value = Math.min(Math.floor(Math.random() * remainingAttributes) + 1, remainingAttributes) * statMultiplier;
            
            remainingAttributes -= value;
            rolledAttributes[attribute] = (rolledAttributes[attribute] || 0) + value;

            numberOfAttributes++;
            chanceForAdditionalAttribute *= 0.5; // Reduce the chance for another additional attribute
        } else {
            break; // Stop if we didn't roll successfully for an additional attribute
        }
    }

    for (let [attribute, value] of Object.entries(rolledAttributes)) {
        resultString += `+${value} ${attribute}<br>`;
    }

    document.getElementById("result").innerHTML = resultString;
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

//document.getElementById("result").innerHTML = resultString;