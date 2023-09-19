// Sample items array with base min and max damage and item slot
const items = [
    //// Weapons
    // Melee
    { name: 'Dagger',           itemType: 'Melee', minDamage: 1, maxDamage: 3, slot: 'Main Hand', primaryStats: ['Strength'], p: 0.2 },

    { name: 'Shortsword',       itemType: 'Melee', minDamage: 2, maxDamage: 4, slot: 'Main Hand', primaryStats: ['Strength'], p: 0.3 },
    { name: 'Sword',            itemType: 'Melee', minDamage: 3, maxDamage: 5, slot: 'Main Hand', primaryStats: ['Strength'], p: 0.4 },
    { name: 'Longsword',        itemType: 'Melee', minDamage: 4, maxDamage: 6, slot: 'Two-Handed', primaryStats: ['Strength'], p: 0.3 },
    { name: 'Greatsword',       itemType: 'Melee', minDamage: 2, maxDamage: 8, slot: 'Two-Handed', primaryStats: ['Strength'], p: 0.1 },
    
    // Magic
    { name: 'Staff',            itemType: 'Magic', minDamage: 1, maxDamage: 2, slot: 'Two-Handed', primaryStats: ['Intellect'], p: 0.3 },
    { name: 'Grandstaff',       itemType: 'Magic', minDamage: 1, maxDamage: 3, slot: 'Two-Handed', primaryStats: ['Intellect'], p: 0.1 },
    { name: 'Wand',             itemType: 'Magic', minDamage: 1, maxDamage: 1, slot: 'Main Hand', primaryStats: ['Intellect'], p: 0.2 },
    { name: 'Orb',              itemType: 'Magic', slot: 'Off Hand', primaryStats: ['Intellect'], p: 0.1 },

    // Ranged
    // Ranged Weapons
    { name: 'Shortbow',         itemType: 'Ranged', minDamage: 2, maxDamage: 4, slot: 'Two-Handed', primaryStats: ['Agility'], p: 0.2 },
    { name: 'Longbow',          itemType: 'Ranged', minDamage: 3, maxDamage: 5, slot: 'Two-Handed', primaryStats: ['Agility'], p: 0.2 },
    { name: 'Greatbow',         itemType: 'Ranged', minDamage: 4, maxDamage: 6, slot: 'Two-Handed', primaryStats: ['Agility'], p: 0.1 },
    { name: 'Crossbow',         itemType: 'Ranged', minDamage: 4, maxDamage: 8, slot: 'Two-Handed', primaryStats: ['Agility'], p: 0.1 },
  
    // Shields    
    { name: 'Shield',           itemType: 'Shield', armorRating: 4, slot: 'Off Hand', secondaryStats: ['Stamina'], p: 0.3 },
    { name: 'Bulwark',          itemType: 'Shield', armorRating: 8, slot: 'Off Hand', secondaryStats: ['Stamina'], p: 0.1 },

    //// Equipment
    // Chest
    { name: 'Robe',             itemType: 'Chest', armorRating: 1, slot: 'Chest', primaryStats: ['Intellect'], p: 0.5 },
    { name: 'Tunic',            itemType: 'Chest', armorRating: 2, slot: 'Chest', primaryStats: ['Agility'], p: 0.5 },
    { name: 'Armor',            itemType: 'Chest', armorRating: 3, slot: 'Chest', primaryStats: ['Strength'], p: 0.4 },

    // Miscellaneous
    { name: 'Amulet',           itemType: 'Neck', armorRating: 0, slot: 'Neck', primaryStats: ['Intellect', 'Strength', 'Agility'], p: 0.1 },
    { name: 'Ring',             itemType: 'Ring', armorRating: 0, slot: 'Finger', primaryStats: ['Intellect', 'Strength', 'Agility'], p: 0.1 }
];

const leatherenchants = [
    {p:1.00}
];
const metalenchants = [
    {p:1.00}
];
const fiberenchants = [
    {p:1.00}
];
const platedenchants = [
    {p:1.00}
];

const lootTypes = [
    { name: `Cloth`,               enchants: [{p:1.00}],       p: 0.30, m: 0.250,  level: 1, validTypes: ['Head','Chest','Legs','Feet','Belt'] },
    { name: `Hide`,                enchants: [{p:1.00}],       p: 0.32, m: 0.500,  level: 1, validTypes: ['Head','Chest','Legs','Feet','Belt'] },
    { name: `Basic Leather`,       enchants: [{p:1.00}],       p: 0.35, m: 0.650,  level: 1, validTypes: ['Head','Chest','Legs','Feet','Belt'] },
    { name: `Wood`,                enchants: [{p:1.00}],       p: 0.35, m: 0.750,  level: 1, validTypes: ['Melee','Magic','Shield'] },
    { name: `Leather`,             enchants: leatherenchants,  p: 0.35, m: 1.000,  level: 1, validTypes: ['Head','Chest','Legs','Feet','Belt'] },
    { name: `Iron`,                enchants: metalenchants,    p: 0.35, m: 1.125,  level: 2, validTypes: ['Melee', 'Head','Chest','Legs','Feet','Belt','Shield'] },
    { name: `Steel`,               enchants: metalenchants,    p: 0.34, m: 1.220,  level: 3, validTypes: ['Melee', 'Head','Chest','Legs','Feet','Belt','Shield'] },
    { name: `Steel Plate`,         enchants: metalenchants,    p: 0.34, m: 1.500,  level: 4, validTypes: ['Head','Chest','Legs','Feet','Shield'] },
    { name: `Caxium`,              enchants: metalenchants,    p: 0.34, m: 1.750,  level: 5, validTypes: ['Melee','Magic', 'Head','Chest','Legs','Feet','Belt','Shield'] },
    { name: `Silver`,              enchants: metalenchants,    p: 0.33, m: 1.750,  level: 7}, //any type
    { name: `Imperial Caxium`,     enchants: metalenchants,    p: 0.33, m: 2.000,  level: 9, validTypes: ['Melee','Magic', 'Head','Chest','Legs','Feet','Belt','Shield'] },
    { name: `Glass`,               enchants: fiberenchants,    p: 0.33, m: 2.500,  level: 10, validTypes: ['Melee','Magic','Ring','Neck'] },
    { name: `Acrylic`,             enchants: fiberenchants,    p: 0.31, m: 3.750,  level: 12, validTypes: ['Melee','Magic', 'Head','Chest','Legs','Feet','Belt','Shield'] },
    { name: `Metallic`,            enchants: metalenchants,    p: 0.30, m: 5.000,  level: 13, validTypes: ['Melee', 'Head','Chest','Legs','Feet','Belt','Shield'] },
    { name: `Seeker`,              enchants: fiberenchants,    p: 0.29, m: 7.500,  level: 15, validTypes: ['Melee','Magic', 'Head','Chest','Legs','Feet','Belt','Shield'] },
    { name: `Warlord`,             enchants: metalenchants,    p: 0.27, m: 10.00,  level: 20, validTypes: ['Melee', 'Head','Chest','Legs','Feet','Belt','Shield'] },
    { name: `Vampiric`,            enchants: fiberenchants,    p: 0.25, m: 12.50,  level: 20, validTypes: ['Melee','Magic', 'Head','Chest','Legs','Feet','Belt','Shield'] },
    { name: `Crystal`,             enchants: platedenchants,   p: 0.22, m: 15.00,  level: 25, validTypes: ['Magic','Ring','Neck'] },
    { name: `Enchanted`,           enchants: fiberenchants,    p: 0.21, m: 18.00,  level: 25, validTypes: ['Melee','Magic','Shield'] },
    { name: `Platinum`,            enchants: platedenchants,   p: 0.20, m: 20.00,  level: 35, validTypes: ['Melee','Head','Chest','Legs','Feet','Belt','Shield'] },
    { name: `Oladium`,             enchants: platedenchants,   p: 0.17, m: 27.00,  level: 40, validTypes: ['Melee', 'Head','Chest','Legs','Feet','Belt','Shield'] },
    { name: `Dragon Plate`,        enchants: platedenchants,   p: 0.14, m: 30.00,  level: 50, validTypes: ['Head','Chest','Legs','Feet','Shield'] },
    { name: `Master Dragon Plate`, enchants: platedenchants,   p: 0.12, m: 35.00,  level: 55, validTypes: ['Head','Chest','Legs','Feet','Shield'] },
    { name: `Demonic`,             enchants: platedenchants,   p: 0.10, m: 40.00,  level: 55, validTypes: ['Melee','Magic', 'Head','Chest','Legs','Feet','Belt','Shield'] },
    { name: `Demonic Warlord`,     enchants: platedenchants,   p: 0.08, m: 50.00,  level: 60, validTypes: ['Head','Chest','Legs','Feet','Belt','Shield'] },
    { name: `Celestial`,           enchants: platedenchants,   p: 0.05, m: 55.00,  level: 65, validTypes: ['Melee','Magic', 'Head','Chest','Legs','Feet','Belt','Shield'] },
    { name: `Ascension`,           enchants: platedenchants,   p: 0.03, m: 65.75,  level: 75, validTypes: ['Melee','Magic', 'Head','Chest','Legs','Feet','Belt','Shield'] },
    { name: `Ancient`,             enchants: platedenchants,   p: 0.01, m: 75.00,  level: 85, validTypes: ['Melee','Magic', 'Head','Chest','Legs','Feet','Belt','Shield'] },
    { name: `Diamond Plate`,       enchants: platedenchants,   p: 0.01, m: 75.00,  level: 90, validTypes: ['Head','Chest','Legs','Feet','Shield'] }
];

// Attributes
const primaryAttributes = ['Strength', 'Intellect', 'Agility'];
const secondaryAttributes = ['Stamina', 'Critical Strike', 'Leech'];