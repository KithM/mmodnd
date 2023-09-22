const clothenchants = [
    { p: 1.00 }
];
const leatherenchants = [
    { p: 1.00 }
];
const metalenchants = [
    { p: 1.00 }
];
const fiberenchants = [
    { p: 1.00 }
];
const platedenchants = [
    { p: 1.00 }
];

const lootTypes = [
    { name: `Cloth`, enchants: [{ p: 1.00 }], p: 0.35, baseStamina: 0.05, level: 1 },//m: 0.250,  level: 1 },
    { name: `Hide`, enchants: [{ p: 1.00 }], p: 0.35, baseStamina: 0.1, level: 1 },
    { name: `Wood`, enchants: [{ p: 1.00 }], p: 0.35, baseStamina: 0.2, level: 1 },
    { name: `Mail`, enchants: metalenchants, p: 0.35, baseStamina: 0.25, level: 1 },

    { name: `Silk`, enchants: clothenchants, p: 0.35, baseStamina: 0.1, level: 5 },
    { name: `Leather`, enchants: leatherenchants, p: 0.35, baseStamina: 0.15, level: 5 },
    { name: `Iron`, enchants: metalenchants, p: 0.35, baseStamina: 0.3, level: 5 },
    { name: `Steel`, enchants: metalenchants, p: 0.30, baseStamina: 0.4, level: 5 },
    { name: `Steel Plate`, enchants: metalenchants, p: 0.25, baseStamina: 0.5, level: 5 },

    // Ring & Amulet Materials
    { name: `Copper`, enchants: metalenchants, p: 0.15, baseStamina: 0.1, level: 1 },
    { name: `Bronze`, enchants: metalenchants, p: 0.15, baseStamina: 0.1, level: 1 },
    { name: `Brass`, enchants: metalenchants, p: 0.14, baseStamina: 0.1, level: 3 },
    { name: `Silver`, enchants: metalenchants, p: 0.13, baseStamina: 0.2, level: 5 },
    { name: `Amethyst`, enchants: metalenchants, p: 0.12, baseStamina: 0.1, level: 10 },
    { name: `Aquamarine`, enchants: metalenchants, p: 0.11, baseStamina: 0.1, level: 10 },
    { name: `Quartz`, enchants: metalenchants, p: 0.10, baseStamina: 0.3, level: 15 },
    { name: `Gold`, enchants: metalenchants, p: 0.09, baseStamina: 0.3, level: 15 },
    { name: `Jade`, enchants: metalenchants, p: 0.08, baseStamina: 0.4, level: 15 },
    { name: `Platinum`, enchants: metalenchants, p: 0.07, baseStamina: 0.5, level: 20 },
    { name: `Obsidian`, enchants: metalenchants, p: 0.06, baseStamina: 0.6, level: 20 },
    { name: `Diamond`, enchants: metalenchants, p: 0.05, baseStamina: 0.7, level: 25 }
];

// Attributes
const primaryAttributes = ['Strength', 'Intellect', 'Agility'];
const secondaryAttributes = ['Stamina', 'Critical Strike', 'Regen'];

const attributeProbabilities = {
    'Stamina': 0.5,
    'Critical Strike': 0.3,
    'Regen': 0.2
};

// Item Names
const itemNames = {
    // Prefixes
    'Hardened': [false, 'Stamina', 0.9],
    'Wise': [false, 'Intellect', 0.9],
    'Mighty': [false, 'Strength', 0.9],
    'Swift': [false, 'Agility', 0.9],
    'Tenacious': [false, ['Strength', 'Stamina'], 0.9],
    'Vigorous': [false, ['Agility', 'Stamina'], 0.9],
    'Arcane': [false, ['Intellect', 'Regen'], 0.9],
    'Unyielding': [false, ['Strength', 'Critical Strike'], 0.9],
    'Eloquent': [false, ['Intellect', 'Critical Strike'], 0.9],
    'Nimble': [false, ['Agility', 'Critical Strike'], 0.9],
    'Restorative': [false, ['Stamina', 'Regen'], 0.9],

    'Unstable': [false, ['Strength', 'Agility', 'Intellect', 'Regen', 'Stamina', 'Critical Strike'], 0.9],
    'Chromatic': [false, ['Strength', 'Agility', 'Intellect'], 0.9],
    'Prismatic': [false, ['Regen', 'Stamina', 'Critical Strike'], 0.9],

    'Gladiator\'s': [false, ['Strength'], 0.9],
    'Hero\'s': [false, ['Strength'], 0.9],

    // Suffixes
    'of Strength': [true, ['Strength'], 0.9],
    'of Intellect': [true, ['Intellect'], 0.9],
    'of Agility': [true, ['Agility'], 0.9],

    'of the Warrior': [true, ['Strength'], 0.9],
    'of the Mage': [true, ['Intellect'], 0.9],
    'of the Hunter': [true, ['Agility'], 0.9],

    'of the Hero': [true, ['Strength'], 0.75],
    'of Judgment': [true, ['Intellect', 'Regen'], 0.75],
    'of Endurance': [true, 'Stamina', 0.75],
    'of Fortitude': [true, ['Stamina', 'Strength'], 0.75],
    'of Alacrity': [true, ['Agility', 'Critical Strike'], 0.75],
    'of the Bear': [true, 'Strength', 0.75],
    'of the Owl': [true, 'Intellect', 0.75],
    'of the Lynx': [true, 'Agility', 0.75],
    'of Precision': [true, 'Critical Strike', 0.75],
    'of Restoration': [true, 'Regen', 0.75],
    'of Resilience': [true, ['Stamina', 'Regen'], 0.75],
    'of Insight': [true, ['Intellect', 'Critical Strike'], 0.75],
    'of Finesse': [true, ['Agility', 'Regen'], 0.75],
    'of the Gladiator': [true, ['Strength', 'Critical Strike'], 0.75],
    'of Stability': [true, ['Stamina', 'Critical Strike'], 0.75],
    'of the Sage': [true, ['Intellect', 'Stamina'], 0.75],
    'of Ferocity': [true, ['Agility', 'Strength'], 0.75]
};

const itemQualities = [
    { name: 'Common', multiplier: 1.00, p: 0.55, minLevel: 0, applicableTo: ['Weapon', 'Equipment'] }, //black
    { name: 'Uncommon', multiplier: 1.50, p: 0.25, minLevel: 0, applicableTo: ['Weapon', 'Equipment'] }, //green
    { name: 'Rare', multiplier: 2.00, p: 0.1, minLevel: 2, applicableTo: ['Weapon', 'Equipment'] }, //blue
    { name: 'Epic', multiplier: 3.25, p: 0.08, minLevel: 5, applicableTo: ['Weapon', 'Equipment'] }, //purple
    { name: 'Legendary', multiplier: 5.00, p: 0.02, minLevel: 10, applicableTo: ['Weapon', 'Equipment'] } //orange
];

// Sample items array with base min and max damage and item slot
const items = [
    // Weapons
    // Melee
    { name: 'Dagger', itemType: 'Weapon', minDamage: 3, maxDamage: 6, slot: 'One-Handed', primaryStats: ['Strength'], p: 0.35, invalidMaterials: ['Mail', 'Cloth', 'Silk', 'Hide', 'Basic Leather', 'Leather', 'Steel Plate'] },
    { name: 'Shortsword', itemType: 'Weapon', minDamage: 5, maxDamage: 8, slot: 'Main Hand', primaryStats: ['Strength'], p: 0.30, invalidMaterials: ['Mail', 'Cloth', 'Silk', 'Hide', 'Basic Leather', 'Leather', 'Steel Plate'] },
    { name: 'Sword', itemType: 'Weapon', minDamage: 6, maxDamage: 8, slot: 'Main Hand', primaryStats: ['Strength'], p: 0.25, invalidMaterials: ['Mail', 'Cloth', 'Silk', 'Hide', 'Basic Leather', 'Leather', 'Steel Plate'] },
    { name: 'Longsword', itemType: 'Weapon', minDamage: 5, maxDamage: 10, slot: 'Two-Handed', primaryStats: ['Strength'], p: 0.15, invalidMaterials: ['Mail', 'Cloth', 'Silk', 'Hide', 'Basic Leather', 'Leather', 'Steel Plate'] },
    { name: 'Greatsword', itemType: 'Weapon', minDamage: 4, maxDamage: 12, slot: 'Two-Handed', primaryStats: ['Strength'], p: 0.05, invalidMaterials: ['Mail', 'Cloth', 'Silk', 'Hide', 'Basic Leather', 'Leather', 'Steel Plate'] },

    { name: 'Axe', itemType: 'Weapon', minDamage: 6, maxDamage: 8, slot: 'Main Hand', primaryStats: ['Strength'], p: 0.25, invalidMaterials: ['Mail', 'Cloth', 'Silk', 'Hide', 'Basic Leather', 'Leather', 'Steel Plate'] },
    { name: 'Battleaxe', itemType: 'Weapon', minDamage: 5, maxDamage: 10, slot: 'Two-Handed', primaryStats: ['Strength'], p: 0.15, invalidMaterials: ['Mail', 'Cloth', 'Silk', 'Hide', 'Basic Leather', 'Leather', 'Steel Plate'] },
    { name: 'Greataxe', itemType: 'Weapon', minDamage: 4, maxDamage: 12, slot: 'Two-Handed', primaryStats: ['Strength'], p: 0.05, invalidMaterials: ['Mail', 'Cloth', 'Silk', 'Hide', 'Basic Leather', 'Leather', 'Steel Plate'] },

    { name: 'Mace', itemType: 'Weapon', minDamage: 5, maxDamage: 8, slot: 'Main Hand', primaryStats: ['Strength','Intellect'], p: 0.20, invalidMaterials: ['Mail', 'Cloth', 'Silk', 'Hide', 'Basic Leather', 'Leather', 'Steel Plate'] },

    // Magic
    { name: 'Staff', itemType: 'Weapon', minDamage: 4, maxDamage: 12, slot: 'Two-Handed', primaryStats: ['Intellect'], p: 0.30, invalidMaterials: ['Mail', 'Cloth', 'Silk', 'Hide', 'Basic Leather', 'Leather', 'Iron', 'Steel', 'Steel Plate'] },
    { name: 'Grandstaff', itemType: 'Weapon', minDamage: 3, maxDamage: 14, slot: 'Two-Handed', primaryStats: ['Intellect'], p: 0.08, invalidMaterials: ['Mail', 'Cloth', 'Silk', 'Hide', 'Basic Leather', 'Leather', 'Iron', 'Steel', 'Steel Plate'] },
    { name: 'Wand', itemType: 'Weapon', minDamage: 6, maxDamage: 8, slot: 'Main Hand', primaryStats: ['Intellect'], p: 0.27, invalidMaterials: ['Mail', 'Cloth', 'Silk', 'Hide', 'Basic Leather', 'Leather', 'Iron', 'Steel', 'Steel Plate'] },
    { name: 'Orb', itemType: 'Weapon', slot: 'Off Hand', primaryStats: ['Intellect'], p: 0.10, invalidMaterials: ['Mail', 'Cloth', 'Silk', 'Hide', 'Basic Leather', 'Leather', 'Iron', 'Steel', 'Steel Plate'] },
    { name: 'Scepter', itemType: 'Weapon', slot: 'Off Hand', primaryStats: ['Intellect'], p: 0.10, invalidMaterials: ['Mail', 'Cloth', 'Silk', 'Hide', 'Basic Leather', 'Leather', 'Iron', 'Steel', 'Steel Plate'] },

    // Ranged
    { name: 'Sling', itemType: 'Weapon', minDamage: 3, maxDamage: 5, slot: 'Main Hand', primaryStats: ['Agility'], p: 0.10, invalidMaterials: ['Mail', 'Cloth', 'Silk', 'Hide', 'Basic Leather', 'Leather', 'Steel Plate'] },
    { name: 'Shortbow', itemType: 'Weapon', minDamage: 5, maxDamage: 8, slot: 'Two-Handed', primaryStats: ['Agility'], p: 0.28, invalidMaterials: ['Mail', 'Cloth', 'Silk', 'Hide', 'Basic Leather', 'Leather', 'Steel Plate'] },
    { name: 'Longbow', itemType: 'Weapon', minDamage: 6, maxDamage: 8, slot: 'Two-Handed', primaryStats: ['Agility'], p: 0.22, invalidMaterials: ['Mail', 'Cloth', 'Silk', 'Hide', 'Basic Leather', 'Leather', 'Steel Plate'] },
    { name: 'Greatbow', itemType: 'Weapon', minDamage: 5, maxDamage: 10, slot: 'Two-Handed', primaryStats: ['Agility'], p: 0.07, invalidMaterials: ['Mail', 'Cloth', 'Silk', 'Hide', 'Basic Leather', 'Leather', 'Steel Plate'] },
    { name: 'Crossbow', itemType: 'Weapon', minDamage: 4, maxDamage: 12, slot: 'Two-Handed', primaryStats: ['Agility'], p: 0.08, invalidMaterials: ['Mail', 'Cloth', 'Silk', 'Hide', 'Basic Leather', 'Leather', 'Steel Plate'] },

    // Shields    
    { name: 'Shield', itemType: 'Equipment', slot: 'Off Hand', primaryStats: ['Strength'], requiredSecondaryStats: ['Stamina'], p: 0.25, invalidMaterials: ['Mail', 'Cloth', 'Silk', 'Hide', 'Basic Leather', 'Leather'] },
    { name: 'Bulwark', itemType: 'Equipment', slot: 'Off Hand', primaryStats: ['Strength'], requiredSecondaryStats: ['Stamina'], p: 0.05, invalidMaterials: ['Mail', 'Cloth', 'Silk', 'Hide', 'Basic Leather', 'Leather'] },

    //// Equipment
    // Head
    { name: 'Shroud', itemType: 'Equipment', slot: 'Head', primaryStats: ['Intellect', 'Agility'], p: 0.20, onlyMaterials: ['Hide', 'Basic Leather', 'Leather'] },
    { name: 'Hood', itemType: 'Equipment', slot: 'Head', primaryStats: ['Intellect', 'Agility'], p: 0.20, onlyMaterials: ['Cloth', 'Silk', 'Hide', 'Basic Leather', 'Leather'] },
    { name: 'Helmet', itemType: 'Equipment', slot: 'Head', primaryStats: ['Strength'], p: 0.20, onlyMaterials: ['Leather', 'Iron', 'Steel', 'Steel Plate'] },

    // Chest
    { name: 'Robe', itemType: 'Equipment', slot: 'Chest', primaryStats: ['Intellect'], p: 0.30, onlyMaterials: ['Cloth', 'Silk'] },
    { name: 'Tunic', itemType: 'Equipment', slot: 'Chest', primaryStats: ['Agility'], p: 0.30, onlyMaterials: ['Hide', 'Basic Leather', 'Leather'] },
    { name: 'Vest', itemType: 'Equipment', slot: 'Chest', primaryStats: ['Intellect', 'Agility'], p: 0.20, onlyMaterials: ['Cloth', 'Silk', 'Hide', 'Basic Leather', 'Leather'] },
    { name: 'Vest', itemType: 'Equipment', slot: 'Chest', primaryStats: ['Agility', 'Strength'], p: 0.20, onlyMaterials: ['Basic Leather', 'Leather'] },
    { name: 'Chestpiece', itemType: 'Equipment', slot: 'Chest', primaryStats: ['Strength'], p: 0.15, onlyMaterials: ['Iron', 'Steel', 'Steel Plate'] },

    // Legs
    { name: 'Pants', itemType: 'Equipment', slot: 'Legs', primaryStats: ['Intellect', 'Agility'], p: 0.30, onlyMaterials: ['Hide', 'Basic Leather', 'Leather'] },
    { name: 'Leggings', itemType: 'Equipment', slot: 'Legs', primaryStats: ['Agility', 'Strength'], p: 0.30, onlyMaterials: ['Cloth', 'Hide', 'Silk'] },
    { name: 'Greaves', itemType: 'Equipment', slot: 'Legs', primaryStats: ['Strength'], p: 0.30, onlyMaterials: ['Iron', 'Steel', 'Steel Plate'] },

    // Hands
    { name: 'Bracers', itemType: 'Equipment', slot: 'Hands', primaryStats: ['Intellect', 'Agility', 'Strength'], p: 0.20, onlyMaterials: ['Cloth', 'Hide', 'Silk', 'Hide', 'Basic Leather', 'Leather', 'Iron', 'Steel'] },
    { name: 'Gloves', itemType: 'Equipment', slot: 'Hands', primaryStats: ['Intellect', 'Agility', 'Strength'], p: 0.20, onlyMaterials: ['Cloth', 'Hide', 'Silk', 'Hide', 'Basic Leather', 'Leather'] },
    { name: 'Gauntlets', itemType: 'Equipment', slot: 'Hands', primaryStats: ['Strength'], p: 0.20, onlyMaterials: ['Iron', 'Steel'] },

    // Belt
    { name: 'Strap', itemType: 'Equipment', slot: 'Waist', p: 0.13, onlyMaterials: ['Hide', 'Basic Leather', 'Leather', 'Silk', 'Cloth'] },
    { name: 'Belt', itemType: 'Equipment', slot: 'Waist', p: 0.13, onlyMaterials: ['Hide', 'Basic Leather', 'Leather', 'Silk', 'Cloth'] },
    { name: 'Harness', itemType: 'Equipment', slot: 'Waist', p: 0.1, onlyMaterials: ['Hide', 'Basic Leather', 'Leather', 'Silk', 'Cloth'] },
    { name: 'Girdle', itemType: 'Equipment', slot: 'Waist', p: 0.15, onlyMaterials: ['Leather', 'Iron', 'Steel', 'Steel Plate'] },

    // Feet
    { name: 'Sandals', itemType: 'Equipment', slot: 'Feet', primaryStats: ['Intellect'], p: 0.1, onlyMaterials: ['Hide', 'Basic Leather', 'Leather', 'Cloth'] },
    { name: 'Shoes', itemType: 'Equipment', slot: 'Feet', primaryStats: ['Intellect', 'Agility', 'Strength'], p: 0.15, onlyMaterials: ['Hide', 'Basic Leather', 'Leather', 'Cloth'] },
    { name: 'Boots', itemType: 'Equipment', slot: 'Feet', primaryStats: ['Agility', 'Strength'], p: 0.15, onlyMaterials: ['Leather', 'Iron', 'Steel', 'Steel Plate'] },

    // Miscellaneous
    { name: 'Amulet', itemType: 'Neck', slot: 'Neck', primaryStats: ['Intellect', 'Strength', 'Agility'], p: 0.08, onlyMaterials: ['Copper', 'Brass', 'Bronze', 'Silver', 'Amethyst', 'Aquamarine', 'Quartz', 'Gold', 'Jade', 'Platinum', 'Obsidian', 'Diamond'] },
    { name: 'Necklace', itemType: 'Neck', slot: 'Neck', primaryStats: ['Intellect', 'Strength', 'Agility'], p: 0.08, onlyMaterials: ['Copper', 'Brass', 'Bronze', 'Silver', 'Amethyst', 'Aquamarine', 'Quartz', 'Gold', 'Jade', 'Platinum', 'Obsidian', 'Diamond'] },
    { name: 'Ring', itemType: 'Finger', slot: 'Ring', primaryStats: ['Intellect', 'Strength', 'Agility'], p: 0.08, onlyMaterials: ['Copper', 'Brass', 'Bronze', 'Silver', 'Amethyst', 'Aquamarine', 'Quartz', 'Gold', 'Jade', 'Platinum', 'Obsidian', 'Diamond'] },

    { name: 'Amulet', itemType: 'Neck', slot: 'Neck', p: 0.08, onlyMaterials: ['Copper', 'Brass', 'Bronze', 'Silver', 'Amethyst', 'Aquamarine', 'Quartz', 'Gold', 'Jade', 'Platinum', 'Obsidian', 'Diamond'] },
    { name: 'Necklace', itemType: 'Neck', slot: 'Neck', p: 0.08, onlyMaterials: ['Copper', 'Brass', 'Bronze', 'Silver', 'Amethyst', 'Aquamarine', 'Quartz', 'Gold', 'Jade', 'Platinum', 'Obsidian', 'Diamond'] },
    { name: 'Ring', itemType: 'Finger', slot: 'Ring', p: 0.08, onlyMaterials: ['Copper', 'Brass', 'Bronze', 'Silver', 'Amethyst', 'Aquamarine', 'Quartz', 'Gold', 'Jade', 'Platinum', 'Obsidian', 'Diamond'] },
];

const premadeItems = [
    // Junk
    { name: 'Ragged Cloth', itemQuality: itemQualities[0], description: 'A torn piece of cloth.', type: 'Junk', p: 0.7 },
    { name: 'Raw Hide', itemQuality: itemQualities[0], description: 'A torn piece of hide.', type: 'Junk', p: 0.7 },
    { name: 'Ancient Scroll', itemQuality: itemQualities[0], description: 'A worn-out scroll with undecipherable writing.', type: 'Junk', p: 0.4 },
    { name: 'Candlestick', itemQuality: itemQualities[0], description: 'Use: Can be lit to brighten a small area.', type: 'Junk', p: 0.5 },
    { name: 'Torn Page', itemQuality: itemQualities[0], description: 'Maybe it was from a book.', type: 'Junk', p: 0.6 },
    { name: 'Cracked Bottle', itemQuality: itemQualities[0], description: 'Not good for holding liquids.', type: 'Junk', p: 0.7 },
    { name: 'Bent Spoon', itemQuality: itemQualities[0], description: 'Difficult to eat with.', type: 'Junk', p: 0.4 },
    { name: 'Dull Dagger', itemQuality: itemQualities[0], description: 'Not sharp at all.', type: 'Junk', p: 0.5 },
    { name: 'Broken Arrow', itemQuality: itemQualities[0], description: 'The tip is missing.', type: 'Junk', p: 0.5 },
    { name: 'Human Eye', itemQuality: itemQualities[0], description: 'The eye of a human. Disturbing.', type: 'Junk', p: 0.2 },
    { name: 'Old Boot', itemQuality: itemQualities[0], description: 'It\'s seen better days.', type: 'Junk', p: 0.7 },
    { name: 'Empty Flask', itemQuality: itemQualities[0], description: 'Once held a potion... or maybe just wine.', type: 'Junk', p: 0.5 },
    { name: 'Fractured Gem', itemQuality: itemQualities[0], description: 'Only a glimmer of its former shine remains.', type: 'Junk', p: 0.3 },

    // Weird Stuff
    { name: 'Whispering Doll', itemQuality: itemQualities[0], description: 'A doll that seems to whisper when no one is looking.', type: 'Miscellaneous', p: 0.1 },
    { name: 'Glowing Rock', itemQuality: itemQualities[0], description: 'A rock that emits a soft glow in the dark.', type: 'Miscellaneous', p: 0.3 },
    { name: 'Timeless Hourglass', itemQuality: itemQualities[1], description: 'An hourglass that seems to never run out.', type: 'Miscellaneous', p: 0.05 },
    { name: 'Endless Inkwell', itemQuality: itemQualities[1], description: 'An inkwell that never goes dry.', type: 'Miscellaneous', p: 0.2 },
    { name: 'Iron Key Fragment', itemQuality: itemQualities[0], description: 'Use: Combine 4 iron key fragments to create an Iron Key.', type: 'Miscellaneous', p: 0.3 },

    // Backpacks
    { name: 'Small Sack', itemQuality: itemQualities[0], description: '8 Slots', type: 'Inventory', p: 0.4 },
    { name: 'Large Sack', itemQuality: itemQualities[0], description: '10 Slots', type: 'Inventory', p: 0.3 },
    { name: 'Heavy Sack', itemQuality: itemQualities[0], description: '12 Slots', type: 'Inventory', p: 0.3 },
    { name: 'Small Satchel', itemQuality: itemQualities[0], description: '6 Slots', type: 'Inventory', p: 0.4 },
    { name: 'Large Satchel', itemQuality: itemQualities[0], description: '12 Slots', type: 'Inventory', p: 0.3 },
    { name: 'Traveler\'s Pack', itemQuality: itemQualities[0], description: '20 Slots', type: 'Inventory', p: 0.2 },
    { name: 'Backpack', itemQuality: itemQualities[0], description: '20 Slots', type: 'Inventory', p: 0.2 },
    { name: 'Adventurer\'s Pack', itemQuality: itemQualities[1], description: '25 Slots', type: 'Inventory', p: 0.2 },
    { name: 'Large Adventurer\'s Pack', itemQuality: itemQualities[1], description: '30 Slots', type: 'Inventory', p: 0.1 },

    // Consumables
    { name: 'Dry Bread', itemQuality: itemQualities[0], description: 'Use: Restores 2 HP.', type: 'Consumable', p: 0.5 },
    { name: 'Apple', itemQuality: itemQualities[0], description: 'Use: Restores 1 HP.', type: 'Consumable', p: 0.5 },
    
    { name: 'Minor Health Potion', itemQuality: itemQualities[0], healing: 2, type: 'Consumable', p: 0.2 },
    { name: 'Health Potion', itemQuality: itemQualities[0], healing: 4, type: 'Consumable', p: 0.1 },
    { name: 'Moderate Health Potion', itemQuality: itemQualities[1], healing: 8, type: 'Consumable', p: 0.08 },
    { name: 'Major Health Potion', itemQuality: itemQualities[2], healing: 16, type: 'Consumable', p: 0.05 },

    { name: 'Minor Essence Potion', itemQuality: itemQualities[0], essence: 1, type: 'Consumable', p: 0.2 },
    { name: 'Essence Potion', itemQuality: itemQualities[0], essence: 2, type: 'Consumable', p: 0.1 },
    { name: 'Moderate Essence Potion', itemQuality: itemQualities[1], essence: 3, type: 'Consumable', p: 0.08 },
    { name: 'Major Essence Potion', itemQuality: itemQualities[2], essence: 4, type: 'Consumable', p: 0.05 },

    // Crafting Reagents
    { name: 'Cloth', itemQuality: itemQualities[0], description: 'Crafting Regeant (Tailoring).', type: 'Regeant', p: 0.4 },
    { name: 'Wool', itemQuality: itemQualities[0], description: 'Crafting Regeant (Tailoring).', type: 'Regeant', p: 0.4 },
    { name: 'Leather', itemQuality: itemQualities[0], description: 'Crafting Regeant (Tailoring).', type: 'Regeant', p: 0.4 },
    { name: 'Silk', itemQuality: itemQualities[0], description: 'Crafting Regeant (Tailoring).', type: 'Regeant', p: 0.3 },
    { name: 'Button', itemQuality: itemQualities[0], description: 'Crafting Regeant (Tailoring).', type: 'Regeant', p: 0.2 },
    { name: 'Dye', itemQuality: itemQualities[0], description: 'Crafting Regeant (Tailoring).', type: 'Regeant', p: 0.2 },
    
    { name: 'Iron Ore', itemQuality: itemQualities[0], description: 'Crafting Regeant (Blacksmithing).', type: 'Regeant', p: 0.4 },
    { name: 'Herbs', itemQuality: itemQualities[0], description: 'Crafting Regeant (Alchemy).', type: 'Regeant', p: 0.4 },
    { name: 'Enchanted Dust', itemQuality: itemQualities[1], description: 'Crafting Regeant (Enchanting).', type: 'Regeant', p: 0.2 },
    { name: 'Jewelcrafting Kit', itemQuality: itemQualities[1], description: 'Crafting Regeant (Jewelcrafting).', type: 'Regeant', p: 0.2 },
    { name: 'Vellum', itemQuality: itemQualities[0], description: 'Crafting Regeant (Inscription).', type: 'Regeant', p: 0.3 },

    // Quest Items
    { name: 'Enchanted Quill', itemQuality: itemQualities[1], description: 'This quill seems to move on its own.', type: 'Quest', p: 0.1 },
    { name: 'Mystic Rune', itemQuality: itemQualities[2], description: 'A rune with an otherworldly glow.', type: 'Quest', p: 0.05 },
    { name: 'Torn Map', itemQuality: itemQualities[0], description: 'A map that leads to an unknown location.', type: 'Quest', p: 0.3 },
    { name: 'Ornate Locket', itemQuality: itemQualities[1], description: 'A beautifully crafted locket, it seems important.', type: 'Quest', p: 0.1 },
    { name: 'Sigil of the Ancient', itemQuality: itemQualities[2], description: 'A sigil bearing the mark of an ancient race.', type: 'Quest', p: 0.05 },
    { name: 'Sealed Letter', itemQuality: itemQualities[0], description: 'A letter sealed with an unfamiliar emblem.', type: 'Quest', p: 0.3 },

    // Profession Items
    { name: 'Fishing Rod', itemQuality: itemQualities[0], description: 'Profession Item (Fishing).', type: 'Profession', p: 0.2 },
    { name: 'Smithing Hammer', itemQuality: itemQualities[0], description: 'Profession Item (Blacksmithing).', type: 'Profession', p: 0.2 },
    { name: 'Alchemy Beaker', itemQuality: itemQualities[0], description: 'Profession Item (Alchemy).', type: 'Profession', p: 0.2 },
    { name: 'Enchanting Rod', itemQuality: itemQualities[1], description: 'Profession Item (Enchanting).', type: 'Profession', p: 0.1 },

    // Unique / Special Items
    { name: 'Trapped Soul Gem', itemQuality: itemQualities[3], description: 'Use: Release the trapped soul within.', type: 'Miscellaneous', p: 0.03 }
];