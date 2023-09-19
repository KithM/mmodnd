function generateItem() {
    let itemLevel = parseInt(document.getElementById("itemLevel").value, 10);
    let requiredLevel = itemLevel >= 10 ? itemLevel - 5 : 1;
    let attributeTotal = Math.floor(itemLevel * 2.5);
  
    let chosenItem = rollForItem(items);
    let chosenType = rollForItem(lootTypes);
  
    let resultString = `${chosenType.name} ${chosenItem.name}<br>Level ${requiredLevel}<br>`;
    
    // Calculate and display damage for weapons
    if (chosenItem.itemType === 'Weapon') {
      let minDamage = itemLevel * chosenItem.minDamage;
      let maxDamage = itemLevel * chosenItem.maxDamage;
      resultString += `${minDamage}-${maxDamage} Damage<br>`;
    }
  
    // Calculate and display armor for wearables
    else if (chosenItem.itemType === 'Wearable') {
      let armorRating = itemLevel * chosenItem.armorRating;
      resultString += `Armor Rating: ${armorRating}<br>`;
    }
  
    // Roll for equipment slot if the item is an equipment
    if (chosenItem.slots) {
      let slot = chosenItem.slots[Math.floor(Math.random() * chosenItem.slots.length)];
      resultString += `Slot: ${slot}<br>`;
    }
  
    // Roll for attributes
    let remainingAttributes = attributeTotal;
    while (remainingAttributes > 0) {
      let attribute = attributes[Math.floor(Math.random() * attributes.length)];
      let value = Math.min(Math.floor(Math.random() * remainingAttributes) + 1, remainingAttributes);
      remainingAttributes -= value;
      resultString += `+${value} ${attribute}<br>`;
    }

    document.getElementById("result").innerHTML = resultString;
}

function rollForItem(itemArray) {
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