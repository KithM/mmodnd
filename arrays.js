// Sample items array with base min and max damage and item slot
const items = [
    // Weapons
    // Melee
    { name: 'Dagger',           itemType: 'Melee', minDamage: 1, maxDamage: 3, slot: 'Main Hand', primaryStats: ['Strength'], p: 0.35, invalidMaterials: ['Cloth','Hide','Basic Leather','Leather','Steel Plate'] },
    { name: 'Shortsword',       itemType: 'Melee', minDamage: 2, maxDamage: 4, slot: 'Main Hand', primaryStats: ['Strength'], p: 0.30, invalidMaterials: ['Cloth','Hide','Basic Leather','Leather','Steel Plate'] },
    { name: 'Sword',            itemType: 'Melee', minDamage: 3, maxDamage: 5, slot: 'Main Hand', primaryStats: ['Strength'], p: 0.25, invalidMaterials: ['Cloth','Hide','Basic Leather','Leather','Steel Plate'] },
    { name: 'Longsword',        itemType: 'Melee', minDamage: 4, maxDamage: 6, slot: 'Two-Handed', primaryStats: ['Strength'], p: 0.15, invalidMaterials: ['Cloth','Hide','Basic Leather','Leather','Steel Plate'] },
    { name: 'Greatsword',       itemType: 'Melee', minDamage: 2, maxDamage: 8, slot: 'Two-Handed', primaryStats: ['Strength'], p: 0.05, invalidMaterials: ['Cloth','Hide','Basic Leather','Leather','Steel Plate'] },

    // Magic
    { name: 'Staff',            itemType: 'Magic', minDamage: 1, maxDamage: 2, slot: 'Two-Handed', primaryStats: ['Intellect'], p: 0.30, invalidMaterials: ['Cloth','Hide','Basic Leather','Leather','Steel Plate'] },
    { name: 'Grandstaff',       itemType: 'Magic', minDamage: 1, maxDamage: 3, slot: 'Two-Handed', primaryStats: ['Intellect'], p: 0.08, invalidMaterials: ['Cloth','Hide','Basic Leather','Leather','Steel Plate',] },
    { name: 'Wand',             itemType: 'Magic', minDamage: 1, maxDamage: 1, slot: 'Main Hand', primaryStats: ['Intellect'], p: 0.27, invalidMaterials: ['Cloth','Hide','Basic Leather','Leather','Steel Plate'] },
    { name: 'Scepter',          itemType: 'Magic', slot: 'Off Hand', primaryStats: ['Intellect'], p: 0.10, invalidMaterials: ['Cloth','Hide','Basic Leather','Leather','Steel Plate'] },

    // Ranged
    { name: 'Shortbow',         itemType: 'Ranged', minDamage: 2, maxDamage: 4, slot: 'Two-Handed', primaryStats: ['Agility'], p: 0.28, invalidMaterials: ['Cloth','Hide','Basic Leather','Leather','Steel Plate'] },
    { name: 'Longbow',          itemType: 'Ranged', minDamage: 3, maxDamage: 5, slot: 'Two-Handed', primaryStats: ['Agility'], p: 0.22, invalidMaterials: ['Cloth','Hide','Basic Leather','Leather','Steel Plate'] },
    { name: 'Greatbow',         itemType: 'Ranged', minDamage: 4, maxDamage: 6, slot: 'Two-Handed', primaryStats: ['Agility'], p: 0.07, invalidMaterials: ['Cloth','Hide','Basic Leather','Leather','Steel Plate'] },
    { name: 'Crossbow',         itemType: 'Ranged', minDamage: 4, maxDamage: 8, slot: 'Two-Handed', primaryStats: ['Agility'], p: 0.08, invalidMaterials: ['Cloth','Hide','Basic Leather','Leather','Steel Plate'] },
  
    // Shields    
    { name: 'Shield',           itemType: 'Shield', slot: 'Off Hand', secondaryStats: ['Stamina'], p: 0.25, invalidMaterials: ['Cloth','Hide','Basic Leather','Leather'] },
    { name: 'Bulwark',          itemType: 'Shield', slot: 'Off Hand', secondaryStats: ['Stamina'], p: 0.05, invalidMaterials: ['Cloth','Hide','Basic Leather','Leather'] },

    //// Equipment
    // Chest
    { name: 'Robe',             itemType: 'Chest', slot: 'Chest', primaryStats: ['Intellect'], p: 0.30, onlyMaterials: ['Cloth','Silk'] },
    { name: 'Tunic',            itemType: 'Chest', slot: 'Chest', primaryStats: ['Agility'], p: 0.30, onlyMaterials: ['Hide','Basic Leather','Leather'] },
    { name: 'Chestpiece',       itemType: 'Chest', slot: 'Chest', primaryStats: ['Strength'], p: 0.30, onlyMaterials: ['Iron','Steel','Steel Plate'] },

    // Legs
    { name: 'Pants',            itemType: 'Legs', slot: 'Legs', primaryStats: ['Intellect'], p: 0.30, onlyMaterials: ['Hide','Basic Leather','Leather'] },
    { name: 'Leggings',         itemType: 'Legs', slot: 'Legs', primaryStats: ['Agility'], p: 0.30, onlyMaterials: ['Cloth','Hide','Silk'] },
    { name: 'Greaves',          itemType: 'Legs', slot: 'Legs', primaryStats: ['Strength'], p: 0.30, onlyMaterials: ['Iron','Steel','Steel Plate'] },
    
    // Belt
    { name: 'Worn Belt',        itemType: 'Belt', slot: 'Belt', p: 0.15, onlyMaterials: ['Hide','Basic Leather','Leather','Cloth'] },
    { name: 'Belt',             itemType: 'Belt', slot: 'Belt', p: 0.15, onlyMaterials: ['Hide','Basic Leather','Leather','Cloth'] },
    { name: 'Harness',          itemType: 'Belt', slot: 'Belt', p: 0.1, onlyMaterials: ['Hide','Basic Leather','Leather','Cloth'] },

    // Feet
    { name: 'Shoes',            itemType: 'Feet', slot: 'Feet', p: 0.15, onlyMaterials: ['Hide','Basic Leather','Leather','Cloth'] },
    { name: 'Boots',            itemType: 'Feet', slot: 'Feet', p: 0.15, onlyMaterials: ['Leather','Iron','Steel','Steel Plate'] },

    // Miscellaneous
    { name: 'Amulet',           itemType: 'Neck', slot: 'Neck', primaryStats: ['Intellect', 'Strength', 'Agility'], p: 0.08, onlyMaterials: ['Copper','Brass','Bronze','Silver','Amethyst','Aquamarine','Quartz','Gold','Jade','Platinum','Obsidian','Diamond'] },
    { name: 'Ring',             itemType: 'Finger', slot: 'Finger', primaryStats: ['Intellect', 'Strength', 'Agility'], p: 0.08, onlyMaterials: ['Copper','Brass','Bronze','Silver','Amethyst','Aquamarine','Quartz','Gold','Jade','Platinum','Obsidian','Diamond'] },

    { name: 'Amulet',           itemType: 'Neck', slot: 'Neck', p: 0.08, onlyMaterials: ['Copper','Brass','Bronze','Silver','Amethyst','Aquamarine','Quartz','Gold','Jade','Platinum','Obsidian','Diamond'] },
    { name: 'Ring',             itemType: 'Finger', slot: 'Finger', p: 0.08, onlyMaterials: ['Copper','Brass','Bronze','Silver','Amethyst','Aquamarine','Quartz','Gold','Jade','Platinum','Obsidian','Diamond'] },
];

const clothenchants = [
    {p:1.00}
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
    { name: `Cloth`,               enchants: [{p:1.00}],       p: 0.35, level: 1 },//m: 0.250,  level: 1 },
    { name: `Hide`,                enchants: [{p:1.00}],       p: 0.35, level: 1 },
    { name: `Basic Leather`,       enchants: [{p:1.00}],       p: 0.35, level: 1 },
    { name: `Wood`,                enchants: [{p:1.00}],       p: 0.35, level: 1 },

    { name: `Mail`,                enchants: metalenchants,    p: 0.35, level: 3 },
    
    { name: `Silk`,                enchants: clothenchants,    p: 0.35, level: 5 },
    { name: `Leather`,             enchants: leatherenchants,  p: 0.35, level: 5 },
    { name: `Iron`,                enchants: metalenchants,    p: 0.35, level: 5 },
    { name: `Steel`,               enchants: metalenchants,    p: 0.30, level: 5 },
    { name: `Steel Plate`,         enchants: metalenchants,    p: 0.25, level: 5 },

    // Ring & Amulet Materials
    { name: `Copper`,              enchants: metalenchants,    p: 0.15, level: 1},
    { name: `Bronze`,              enchants: metalenchants,    p: 0.15, level: 1},
    { name: `Brass`,               enchants: metalenchants,    p: 0.14, level: 3},
    { name: `Silver`,              enchants: metalenchants,    p: 0.13, level: 5},
    { name: `Amethyst`,            enchants: metalenchants,    p: 0.12, level: 10},
    { name: `Aquamarine`,          enchants: metalenchants,    p: 0.11, level: 10},
    { name: `Quartz`,              enchants: metalenchants,    p: 0.10, level: 15},
    { name: `Gold`,                enchants: metalenchants,    p: 0.09, level: 15},
    { name: `Jade`,                enchants: metalenchants,    p: 0.08, level: 15},
    { name: `Platinum`,            enchants: metalenchants,    p: 0.07, level: 20},
    { name: `Obsidian`,            enchants: metalenchants,    p: 0.06, level: 20},
    { name: `Diamond`,             enchants: metalenchants,    p: 0.05, level: 25}

    //,
    // { name: `Caxium`,              enchants: metalenchants,    p: 0.34, m: 1.750,  level: 5 },
    // { name: `Silver`,              enchants: metalenchants,    p: 0.33, m: 1.750,  level: 7},
    // { name: `Imperial Caxium`,     enchants: metalenchants,    p: 0.33, m: 2.000,  level: 9 },
    // { name: `Glass`,               enchants: fiberenchants,    p: 0.33, m: 2.500,  level: 10 },
    // { name: `Acrylic`,             enchants: fiberenchants,    p: 0.31, m: 3.750,  level: 12 },
    // { name: `Metallic`,            enchants: metalenchants,    p: 0.30, m: 5.000,  level: 13, },
    // { name: `Seeker`,              enchants: fiberenchants,    p: 0.29, m: 7.500,  level: 15 },
    // { name: `Warlord`,             enchants: metalenchants,    p: 0.27, m: 10.00,  level: 20 },
    // { name: `Vampiric`,            enchants: fiberenchants,    p: 0.25, m: 12.50,  level: 20 },
    // { name: `Crystal`,             enchants: platedenchants,   p: 0.22, m: 15.00,  level: 25 },
    // { name: `Enchanted`,           enchants: fiberenchants,    p: 0.21, m: 18.00,  level: 25 },
    // { name: `Platinum`,            enchants: platedenchants,   p: 0.20, m: 20.00,  level: 35 },
    // { name: `Oladium`,             enchants: platedenchants,   p: 0.17, m: 27.00,  level: 40 },
    // { name: `Dragon Plate`,        enchants: platedenchants,   p: 0.14, m: 30.00,  level: 50 },
    // { name: `Master Dragon Plate`, enchants: platedenchants,   p: 0.12, m: 35.00,  level: 55, },
    // { name: `Demonic`,             enchants: platedenchants,   p: 0.10, m: 40.00,  level: 55 },
    // { name: `Demonic Warlord`,     enchants: platedenchants,   p: 0.08, m: 50.00,  level: 60 },
    // { name: `Celestial`,           enchants: platedenchants,   p: 0.05, m: 55.00,  level: 65 },
    // { name: `Ascension`,           enchants: platedenchants,   p: 0.03, m: 65.75,  level: 75 },
    // { name: `Ancient`,             enchants: platedenchants,   p: 0.01, m: 75.00,  level: 85 },
    // { name: `Diamond Plate`,       enchants: platedenchants,   p: 0.01, m: 75.00,  level: 90 }
];

// Attributes
const primaryAttributes = ['Strength', 'Intellect', 'Agility'];
const secondaryAttributes = ['Stamina', 'Critical Strike', 'Regen'];

const attributeProbabilities = {
    'Stamina': 0.5,
    'Critical Strike': 0.3,
    'Regen': 0.2
};