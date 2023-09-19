// Sample items array with base min and max damage and item slot
const items = [
    { name: 'Shortsword', itemType: 'Melee', minDamage: 2, maxDamage: 4, slot: 'Main Hand', primaryStats: ['Strength'], p: 0.5 },
    { name: 'Sword', itemType: 'Melee', minDamage: 3, maxDamage: 6, slot: 'Main Hand', primaryStats: ['Strength'], p: 0.5 },
    { name: 'Longsword', itemType: 'Melee', minDamage: 2, maxDamage: 6, slot: 'Two-Handed', primaryStats: ['Strength'], p: 0.25 },
    { name: 'Greatsword', itemType: 'Melee', minDamage: 2, maxDamage: 8, slot: 'Two-Handed', primaryStats: ['Strength'], p: 0.10 },
    
    { name: 'Staff', itemType: 'Magic', minDamage: 1, maxDamage: 4, slot: 'Two-Handed', primaryStats: ['Intellect'], p: 0.25 },
    { name: 'Wand', itemType: 'Magic', minDamage: 1, maxDamage: 3, slot: 'Main Hand', primaryStats: ['Intellect'], p: 0.5 },
    
    { name: 'Shield', itemType: 'Shield', armorRating: 4, slot: 'Off Hand', p: 0.25 },
    { name: 'Bulwark', itemType: 'Shield', armorRating: 8, slot: 'Off Hand', p: 0.10 }
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
    { name: `Wood`,                enchants: [{p:1.00}],       p: 0.35, m: 0.750,  level: 1, validTypes: ['Melee','Magic'] },
    { name: `Leather`,             enchants: leatherenchants,  p: 0.35, m: 1.000,  level: 1, validTypes: ['Head','Chest','Legs','Feet','Belt'] },
    { name: `Iron`,                enchants: metalenchants,    p: 0.35, m: 1.125,  level: 2, validTypes: ['Melee','Magic', 'Head','Chest','Legs','Feet','Belt'] },
    { name: `Steel`,               enchants: metalenchants,    p: 0.34, m: 1.220,  level: 3, validTypes: ['Melee','Magic', 'Head','Chest','Legs','Feet','Belt'] },
    { name: `Steel Plate`,         enchants: metalenchants,    p: 0.34, m: 1.500,  level: 5, validTypes: ['Head','Chest','Legs','Feet','Belt'] },
    { name: `Caxium`,              enchants: metalenchants,    p: 0.34, m: 1.750,  level: 7, validTypes: ['Melee','Magic', 'Head','Chest','Legs','Feet','Belt'] },
    { name: `Silver`,              enchants: metalenchants,    p: 0.33, m: 1.750,  level: 7, validTypes: ['Melee','Magic', 'Head','Chest','Legs','Feet','Belt'] },
    { name: `Imperial Caxium`,     enchants: metalenchants,    p: 0.33, m: 2.000,  level: 9, validTypes: ['Melee','Magic', 'Head','Chest','Legs','Feet','Belt'] },
    { name: `Glass`,               enchants: fiberenchants,    p: 0.33, m: 2.500,  level: 10, validTypes: ['Melee','Magic'] },
    { name: `Acrylic`,             enchants: fiberenchants,    p: 0.31, m: 3.750,  level: 12, validTypes: ['Melee','Magic', 'Head','Chest','Legs','Feet','Belt'] },
    { name: `Metallic`,            enchants: metalenchants,    p: 0.30, m: 5.000,  level: 13, validTypes: ['Melee','Magic', 'Head','Chest','Legs','Feet','Belt'] },
    { name: `Seeker`,              enchants: fiberenchants,    p: 0.29, m: 7.500,  level: 15, validTypes: ['Melee','Magic', 'Head','Chest','Legs','Feet','Belt'] },
    { name: `Warlord`,             enchants: metalenchants,    p: 0.27, m: 10.00,  level: 20, validTypes: ['Melee','Magic', 'Head','Chest','Legs','Feet','Belt'] },
    { name: `Vampiric`,            enchants: fiberenchants,    p: 0.25, m: 12.50,  level: 21, validTypes: ['Melee','Magic', 'Head','Chest','Legs','Feet','Belt'] },
    { name: `Iceshield`,           enchants: fiberenchants,    p: 0.22, m: 15.00,  level: 22, validTypes: ['Head','Chest','Legs','Feet','Belt'] },
    { name: `Platinum`,            enchants: platedenchants,   p: 0.20, m: 20.00,  level: 35, validTypes: ['Melee','Magic', 'Head','Chest','Legs','Feet','Belt'] },
    { name: `Oladium`,             enchants: platedenchants,   p: 0.17, m: 27.00,  level: 40, validTypes: ['Melee','Magic', 'Head','Chest','Legs','Feet','Belt'] },
    { name: `Dragon Plate`,        enchants: platedenchants,   p: 0.14, m: 30.00,  level: 50, validTypes: ['Head','Chest','Legs','Feet','Belt'] },
    { name: `Master Dragon Plate`, enchants: platedenchants,   p: 0.12, m: 35.00,  level: 55, validTypes: ['Head','Chest','Legs','Feet','Belt'] },
    { name: `Demonic`,             enchants: platedenchants,   p: 0.10, m: 40.00,  level: 55, validTypes: ['Melee','Magic', 'Head','Chest','Legs','Feet','Belt'] },
    { name: `Demonic Warlord`,     enchants: platedenchants,   p: 0.08, m: 50.00,  level: 60, validTypes: ['Head','Chest','Legs','Feet','Belt'] },
    { name: `Celestial`,           enchants: platedenchants,   p: 0.05, m: 55.00,  level: 65, validTypes: ['Melee','Magic', 'Head','Chest','Legs','Feet','Belt'] },
    { name: `Ascension`,           enchants: platedenchants,   p: 0.03, m: 65.75,  level: 75, validTypes: ['Melee','Magic', 'Head','Chest','Legs','Feet','Belt'] },
    { name: `Diamond Plate`,       enchants: platedenchants,   p: 0.01, m: 75.00,  level: 90, validTypes: ['Head','Chest','Legs','Feet','Belt'] }
];

// Attributes
const primaryAttributes = ['Strength', 'Intellect', 'Agility'];
const secondaryAttributes = ['Stamina', 'Armor', 'Haste', 'Critical Strike', 'Energy', 'Regen'];