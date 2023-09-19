function generateItem() {
    let inputLevel = parseInt(document.getElementById("itemLevel").value, 10);
    let itemLevel = getRandomNumberBetween( Math.max(inputLevel-2, 1), Math.min(inputLevel+2, 100) ); //
    let attributeTotal = Math.floor(itemLevel * 2.5);

    // Filter items based on level
    let availableItems = items;//items.filter(item => item.level <= requiredLevel);

    let chosenItem = rollForItem(availableItems);
    
    // Filter lootTypes based on both the chosenItem's itemType and level
    let compatibleLootTypes = lootTypes.filter(lootType => 
        (!lootType.validTypes || lootType.validTypes.includes(chosenItem.itemType)) &&
        (!lootType.level || lootType.level <= itemLevel)
    );
    let chosenType = rollForItem(compatibleLootTypes);

    if (!chosenType || !chosenItem) {
        console.error("chosenType or chosenItem is undefined");
        return; // Stop execution of the function
    }
  
    let resultString = `${chosenType.name} ${chosenItem.name}<br>Level ${itemLevel}<br>`;
    
    // Calculate and display damage for weapons
    if (chosenItem.minDamage && chosenItem.maxDamage) {
      let minDamage = Math.floor(itemLevel * chosenItem.minDamage * chosenType.m);
      let maxDamage = Math.floor(itemLevel * chosenItem.maxDamage * chosenType.m);
      resultString += `${minDamage}-${maxDamage} Damage<br>`;
    }
  
    // Calculate and display armor for wearables
    else if (chosenItem.armorRating) {
      let armorRating = Math.floor(itemLevel * chosenItem.armorRating * chosenType.m);
      resultString += `Armor Rating: ${armorRating}<br>`;
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

    if(chosenItem.primaryStats){
        let primaryAttribute = chosenItem.primaryStats[Math.floor(Math.random() * chosenItem.primaryStats.length)];
        let primaryValue = Math.floor(attributeTotal * 0.5); // You can change the 0.5 to adjust how much goes into primary stat
        resultString += `+${primaryValue} ${primaryAttribute}<br>`;
        
        remainingAttributes -= primaryValue;
    }
    
    /// Roll for secondary attributes
    let attributeProbabilities = {
        'Stamina': 0.5,
        'Haste': 0.3,
        'Critical Strike': 0.3,
        'Energy': 0.1,
        'Regen': 0.1,
        'Armor': 0
    };

    let availableSecondaryAttributes = secondaryAttributes;
    if (chosenItem.secondaryStats) {
        availableSecondaryAttributes = availableSecondaryAttributes.filter(attr => chosenItem.secondaryStats.includes(attr));
    }

    let rolledAttributes = {};
    let chanceForAdditionalAttribute = 0.75;
  
    while (remainingAttributes > 0 && numberOfAttributes < maxAttributes) {
        if (Math.random() < chanceForAdditionalAttribute) {
            let attribute = rollForAttribute(attributeProbabilities);
            let value = Math.min(Math.floor(Math.random() * remainingAttributes) + 1, remainingAttributes);
            
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