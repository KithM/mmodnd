// Sample items array with base min and max damage and item slot
const items = [
    // Weapons
    // Melee
    { name: 'Dagger',           itemType: 'Melee', minDamage: 1, maxDamage: 3, slot: 'One-Handed', primaryStats: ['Strength'], p: 0.35, invalidMaterials: ['Cloth','Silk','Hide','Basic Leather','Leather','Steel Plate'] },
    { name: 'Shortsword',       itemType: 'Melee', minDamage: 2, maxDamage: 4, slot: 'One-Handed', primaryStats: ['Strength'], p: 0.30, invalidMaterials: ['Cloth','Silk','Hide','Basic Leather','Leather','Steel Plate'] },
    { name: 'Sword',            itemType: 'Melee', minDamage: 3, maxDamage: 5, slot: 'Main Hand', primaryStats: ['Strength'], p: 0.25, invalidMaterials: ['Cloth','Silk','Hide','Basic Leather','Leather','Steel Plate'] },
    { name: 'Longsword',        itemType: 'Melee', minDamage: 4, maxDamage: 6, slot: 'Two-Handed', primaryStats: ['Strength'], p: 0.15, invalidMaterials: ['Cloth','Silk','Hide','Basic Leather','Leather','Steel Plate'] },
    { name: 'Greatsword',       itemType: 'Melee', minDamage: 2, maxDamage: 8, slot: 'Two-Handed', primaryStats: ['Strength'], p: 0.05, invalidMaterials: ['Cloth','Silk','Hide','Basic Leather','Leather','Steel Plate'] },

    // Magic
    { name: 'Staff',            itemType: 'Magic', minDamage: 1, maxDamage: 2, slot: 'Two-Handed', primaryStats: ['Intellect'], p: 0.30, invalidMaterials: ['Cloth','Silk','Hide','Basic Leather','Leather','Iron','Steel','Steel Plate'] },
    { name: 'Grandstaff',       itemType: 'Magic', minDamage: 1, maxDamage: 3, slot: 'Two-Handed', primaryStats: ['Intellect'], p: 0.08, invalidMaterials: ['Cloth','Silk','Hide','Basic Leather','Leather','Iron','Steel','Steel Plate'] },
    { name: 'Wand',             itemType: 'Magic', minDamage: 1, maxDamage: 1, slot: 'Main Hand', primaryStats: ['Intellect'], p: 0.27, invalidMaterials: ['Cloth','Silk','Hide','Basic Leather','Leather','Iron','Steel','Steel Plate'] },
    { name: 'Scepter',          itemType: 'Magic', slot: 'Off Hand', primaryStats: ['Intellect'], p: 0.10, invalidMaterials: ['Cloth','Silk','Hide','Basic Leather','Leather','Iron','Steel','Steel Plate'] },

    // Ranged
    { name: 'Shortbow',         itemType: 'Ranged', minDamage: 2, maxDamage: 4, slot: 'Two-Handed', primaryStats: ['Agility'], p: 0.28, invalidMaterials: ['Cloth','Silk','Hide','Basic Leather','Leather','Steel Plate'] },
    { name: 'Longbow',          itemType: 'Ranged', minDamage: 3, maxDamage: 5, slot: 'Two-Handed', primaryStats: ['Agility'], p: 0.22, invalidMaterials: ['Cloth','Silk','Hide','Basic Leather','Leather','Steel Plate'] },
    { name: 'Greatbow',         itemType: 'Ranged', minDamage: 4, maxDamage: 6, slot: 'Two-Handed', primaryStats: ['Agility'], p: 0.07, invalidMaterials: ['Cloth','Silk','Hide','Basic Leather','Leather','Steel Plate'] },
    { name: 'Crossbow',         itemType: 'Ranged', minDamage: 4, maxDamage: 8, slot: 'Two-Handed', primaryStats: ['Agility'], p: 0.08, invalidMaterials: ['Cloth','Silk','Hide','Basic Leather','Leather','Steel Plate'] },
  
    // Shields    
    { name: 'Shield',           itemType: 'Shield', slot: 'Off Hand', secondaryStats: ['Stamina'], p: 0.25, invalidMaterials: ['Cloth','Silk','Hide','Basic Leather','Leather'] },
    { name: 'Bulwark',          itemType: 'Shield', slot: 'Off Hand', secondaryStats: ['Stamina'], p: 0.05, invalidMaterials: ['Cloth','Silk','Hide','Basic Leather','Leather'] },

    //// Equipment
    // Chest
    { name: 'Robe',             itemType: 'Equipment', slot: 'Chest', primaryStats: ['Intellect'], p: 0.30, onlyMaterials: ['Cloth','Silk'] },
    { name: 'Tunic',            itemType: 'Equipment', slot: 'Chest', primaryStats: ['Agility'], p: 0.30, onlyMaterials: ['Hide','Basic Leather','Leather'] },
    { name: 'Chestpiece',       itemType: 'Equipment', slot: 'Chest', primaryStats: ['Strength'], p: 0.30, onlyMaterials: ['Iron','Steel','Steel Plate'] },

    // Legs
    { name: 'Pants',            itemType: 'Equipment', slot: 'Legs', primaryStats: ['Intellect'], p: 0.30, onlyMaterials: ['Hide','Basic Leather','Leather'] },
    { name: 'Leggings',         itemType: 'Equipment', slot: 'Legs', primaryStats: ['Agility'], p: 0.30, onlyMaterials: ['Cloth','Hide','Silk'] },
    { name: 'Greaves',          itemType: 'Equipment', slot: 'Legs', primaryStats: ['Strength'], p: 0.30, onlyMaterials: ['Iron','Steel','Steel Plate'] },
    
    // Belt
    { name: 'Strap',            itemType: 'Equipment', slot: 'Belt', p: 0.15, onlyMaterials: ['Hide','Basic Leather','Leather','Silk','Cloth'] },
    { name: 'Belt',             itemType: 'Equipment', slot: 'Belt', p: 0.15, onlyMaterials: ['Hide','Basic Leather','Leather','Silk','Cloth'] },
    { name: 'Harness',          itemType: 'Equipment', slot: 'Belt', p: 0.1, onlyMaterials: ['Hide','Basic Leather','Leather','Silk','Cloth'] },

    // Feet
    { name: 'Sandals',          itemType: 'Equipment', slot: 'Feet', p: 0.1, onlyMaterials: ['Hide','Basic Leather','Leather','Cloth'] },
    { name: 'Shoes',            itemType: 'Equipment', slot: 'Feet', p: 0.15, onlyMaterials: ['Hide','Basic Leather','Leather','Cloth'] },
    { name: 'Boots',            itemType: 'Equipment', slot: 'Feet', p: 0.15, onlyMaterials: ['Leather','Iron','Steel','Steel Plate'] },

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
    
    // Suffixes
    'of the Hero': [true, ['Strength'], 0.8],
    'of Judgment': [true, ['Intellect', 'Regen'], 0.5],
    'of Endurance': [true, 'Stamina', 0.8],
    'of Fortitude': [true, ['Stamina', 'Strength'], 0.4],
    'of Alacrity': [true, ['Agility', 'Critical Strike'], 0.5],
    'of the Bear': [true, 'Strength', 0.7],
    'of the Owl': [true, 'Intellect', 0.7],
    'of the Lynx': [true, 'Agility', 0.7],
    'of Precision': [true, 'Critical Strike', 0.8],
    'of Restoration': [true, 'Regen', 0.8],
    'of Resilience': [true, ['Stamina', 'Regen'], 0.4],
    'of Insight': [true, ['Intellect', 'Critical Strike'], 0.5],
    'of Finesse': [true, ['Agility', 'Regen'], 0.5],
    'of the Gladiator': [true, ['Strength', 'Critical Strike'], 0.5],
    'of Stability': [true, ['Stamina', 'Critical Strike'], 0.5],
    'of the Sage': [true, ['Intellect', 'Stamina'], 0.5],
    'of Ferocity': [true, ['Agility', 'Strength'], 0.5]
};