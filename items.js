function generateItem() {
    let itemLevel = parseInt(document.getElementById("itemLevel").value, 10);
    //let requiredLevel = 1;//itemLevel >= 10 ? itemLevel - 5 : 1;
    let attributeTotal = Math.floor(itemLevel * 2.5);
  
    let chosenItem = rollForItem(items);
    
    // Filter lootTypes based on the chosenItem's itemType
    let compatibleLootTypes = lootTypes.filter(lootType => !lootType.validTypes || lootType.validTypes.includes(chosenItem.itemType));
    let chosenType = rollForItem(compatibleLootTypes);
    
    let requiredLevel = chosenType.level;
  
    let resultString = `${chosenType.name} ${chosenItem.name}<br>Level ${requiredLevel}<br>`;
    
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

    if(chosenItem.primaryAttribute){
        let primaryAttribute = chosenItem.primaryStats[Math.floor(Math.random() * chosenItem.primaryStats.length)];
        let primaryValue = Math.floor(attributeTotal * 0.5); // You can change the 0.5 to adjust how much goes into primary stat
        resultString += `+${primaryValue} ${primaryAttribute}<br>`;
        
        remainingAttributes -= primaryValue;
    }
    
    // Roll for seocndary attributes
    let rolledAttributes = {};
  
    while (remainingAttributes > 0) {
        let attribute = secondaryAttributes[Math.floor(Math.random() * secondaryAttributes.length)];
        let value = Math.min(Math.floor(Math.random() * remainingAttributes) + 1, remainingAttributes);
        remainingAttributes -= value;
        rolledAttributes[attribute] = (rolledAttributes[attribute] || 0) + value;
    }
  
    for (let [attribute, value] of Object.entries(rolledAttributes)) {
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