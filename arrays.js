// Sample items array with base min and max damage and item slots
const items = [
    { name: 'Shortsword', itemType: 'Weapon', minDamage: 2, maxDamage: 4, slots: ['Main Hand'], primaryStats: ['Strength'], p: 0.5 },
    { name: 'Sword', itemType: 'Weapon', minDamage: 3, maxDamage: 6, slots: ['Main Hand'], primaryStats: ['Strength'], p: 0.5 },
    { name: 'Longsword', itemType: 'Weapon', minDamage: 2, maxDamage: 6, slots: ['Main Hand'], primaryStats: ['Strength'], p: 0.5 },
    { name: 'Greatsword', itemType: 'Weapon', minDamage: 2, maxDamage: 8, slots: ['Main Hand'], primaryStats: ['Strength'], p: 0.5 },
    
    { name: 'Staff', itemType: 'Weapon', minDamage: 1, maxDamage: 4, slots: ['Main Hand'], primaryStats: ['Intellect'], p: 0.25 },
    { name: 'Wand', itemType: 'Weapon', minDamage: 1, maxDamage: 3, slots: ['Main Hand'], primaryStats: ['Intellect'], p: 0.25 }
];

var lootTypes = [
    { name: `Cloth`,               enchants: [{p:1.00}],       p: 0.30, m: 0.250,  level: 1 },
    { name: `Hide`,                enchants: [{p:1.00}],       p: 0.32, m: 0.500,  level: 1 },
    { name: `Basic Leather`,       enchants: [{p:1.00}],       p: 0.35, m: 0.650,  level: 1 },
    { name: `Wood`,                enchants: [{p:1.00}],       p: 0.35, m: 0.750,  level: 1 },
    { name: `Leather`,             enchants: leatherenchants,  p: 0.35, m: 1.000,  level: 1 },
    { name: `Iron`,                enchants: metalenchants,    p: 0.35, m: 1.125,  level: 2 },
    { name: `Steel`,               enchants: metalenchants,    p: 0.34, m: 1.220,  level: 3 },
    { name: `Steel Plate`,         enchants: metalenchants,    p: 0.34, m: 1.500,  level: 5 },
    { name: `Caxium`,              enchants: metalenchants,    p: 0.34, m: 1.750,  level: 7 },
    { name: `Silver`,              enchants: metalenchants,    p: 0.33, m: 1.750,  level: 7 },
    { name: `Imperial Caxium`,     enchants: metalenchants,    p: 0.33, m: 2.000,  level: 9 },
    { name: `Glass`,               enchants: fiberenchants,    p: 0.33, m: 2.500,  level: 10 },
    { name: `Acrylic`,             enchants: fiberenchants,    p: 0.31, m: 3.750,  level: 12 },
    { name: `Metallic`,            enchants: metalenchants,    p: 0.30, m: 5.000,  level: 13 },
    { name: `Seeker`,              enchants: fiberenchants,    p: 0.29, m: 7.500,  level: 15 },
    { name: `Warlord`,             enchants: metalenchants,    p: 0.27, m: 10.00,  level: 20 },
    { name: `Vampiric`,            enchants: fiberenchants,    p: 0.25, m: 12.50,  level: 21 },
    { name: `Iceshield`,           enchants: fiberenchants,    p: 0.22, m: 15.00,  level: 22 },
    { name: `Platinum`,            enchants: platedenchants,   p: 0.20, m: 20.00,  level: 35 },
    { name: `Oladium`,             enchants: platedenchants,   p: 0.17, m: 27.00,  level: 40 },
    { name: `Dragon Plate`,        enchants: platedenchants,   p: 0.14, m: 30.00,  level: 50 },
    { name: `Master Dragon Plate`, enchants: platedenchants,   p: 0.12, m: 35.00,  level: 55 },
    { name: `Demonic`,             enchants: platedenchants,   p: 0.10, m: 40.00,  level: 55 },
    { name: `Demonic Warlord`,     enchants: platedenchants,   p: 0.08, m: 50.00,  level: 60 },
    { name: `Celestial`,           enchants: platedenchants,   p: 0.05, m: 55.00,  level: 65 },
    { name: `Ascension`,           enchants: platedenchants,   p: 0.03, m: 65.75,  level: 75 },
    { name: `Diamond Plate`,       enchants: platedenchants,   p: 0.01, m: 75.00,  level: 90 }
];

// Attributes
const primaryAttributes = ['Strength', 'Intellect', 'Agility'];
const secondaryAttributes = ['Stamina', 'Armor', 'Haste', 'Critical Strike', 'Energy', 'Regen'];