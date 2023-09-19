function generateItem() {
    let itemLevel = parseInt(document.getElementById("itemLevel").value, 10);
    let requiredLevel = itemLevel >= 10 ? itemLevel - 5 : 1;
    let attributeTotal = Math.floor(itemLevel * 2.5);
  
    let chosenItem = rollForItem(items);
    
    // Filter lootTypes based on the chosenItem's itemType
    let compatibleLootTypes = lootTypes.filter(lootType => !lootType.validTypes || lootType.validTypes.includes(chosenItem.itemType));
    let chosenType = rollForItem(compatibleLootTypes);
  
    let resultString = `${chosenType.name} ${chosenItem.name}<br>Level ${requiredLevel}<br>`;
    
    // Calculate and display damage for weapons
    if (chosenItem.minDamage && chosenItem.maxDamage) {
      let minDamage = itemLevel * chosenItem.minDamage;
      let maxDamage = itemLevel * chosenItem.maxDamage;
      resultString += `${minDamage}-${maxDamage} Damage<br>`;
    }
  
    // Calculate and display armor for wearables
    else if (chosenItem.armorRating) {
      let armorRating = itemLevel * chosenItem.armorRating;
      resultString += `Armor Rating: ${armorRating}<br>`;
    }
  
    // Roll for equipment slot if the item is an equipment
    if (chosenItem.slots) {
      let slot = chosenItem.slots[Math.floor(Math.random() * chosenItem.slots.length)];
      resultString += `Slot: ${slot}<br>`;
    }
  
    // Roll for primary attributes
    let primaryAttribute = chosenItem.primaryStats[Math.floor(Math.random() * chosenItem.primaryStats.length)];
    let primaryValue = Math.floor(attributeTotal * 0.5); // You can change the 0.5 to adjust how much goes into primary stat
    resultString += `+${primaryValue} ${primaryAttribute}<br>`;
    
    let remainingAttributes = attributeTotal - primaryValue;

    let secondaryAttributes = {};
  
    // Roll for secondary attributes
    while (remainingAttributes > 0) {
        let attribute = secondaryAttributes[Math.floor(Math.random() * secondaryAttributes.length)];
        let value = Math.min(Math.floor(Math.random() * remainingAttributes) + 1, remainingAttributes);
        remainingAttributes -= value;
        secondaryAttributes[attribute] = (secondaryAttributes[attribute] || 0) + value;
    }
  
    for (let [attribute, value] of Object.entries(secondaryAttributes)) {
        resultString += `+${value} ${attribute}<br>`;
    }

    document.getElementById("result").innerHTML = resultString;
}

function rollForItem(itemArray) {
    if (!itemArray) {
        console.error("Undefined itemArray passed to rollForItem");
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

//document.getElementById("result").innerHTML = resultString;