let boosters = [
    { id: 1, name: "name1", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis illo neque facere dignissimos? Esse, ut! Nisi", prix: "15", typeId: "1", categorieId: [1, 2], pathImg: "images/pack/a.png" },
    { id: 2, name: "name2", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis illo neque facere dignissimos? Esse, ut! Nisi", prix: "20", typeId: "1", categorieId: [1, 3], pathImg: "images/pack/b.png" },
    { id: 3, name: "name3", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis illo neque facere dignissimos? Esse, ut! Nisi", prix: "25", typeId: "1", categorieId: [1, 2], pathImg: "images/pack/c.png" },
    { id: 4, name: "name4", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis illo neque facere dignissimos? Esse, ut! Nisi", prix: "30", typeId: "1", categorieId: [1, 4], pathImg: "images/pack/d.png" },
    { id: 5, name: "name5", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis illo neque facere dignissimos? Esse, ut! Nisi", prix: "35", typeId: "1", categorieId: [1, 3], pathImg: "images/pack/z.png" },
    { id: 6, name: "name6", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis illo neque facere dignissimos? Esse, ut! Nisi", prix: "40", typeId: "1", categorieId: [1, 2], pathImg: "images/pack/a.png" },
    { id: 7, name: "name7", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis illo neque facere dignissimos? Esse, ut! Nisi", prix: "15", typeId: "1", categorieId: [1, 3], pathImg: "images/pack/b.png" },
    { id: 8, name: "name8", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis illo neque facere dignissimos? Esse, ut! Nisi", prix: "20", typeId: "1", categorieId: [1, 2], pathImg: "images/pack/c.png" },
    { id: 9, name: "name9", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis illo neque facere dignissimos? Esse, ut! Nisi", prix: "25", typeId: "2", categorieId: [1, 4], pathImg: "images/pack/d.png" },
    { id: 10, name: "name10", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis illo neque facere dignissimos? Esse, ut! Nisi", prix: "30", typeId: "2", categorieId: [1, 3], pathImg: "images/pack/z.png" },
    { id: 11, name: "name11", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis illo neque facere dignissimos? Esse, ut! Nisi", prix: "35", typeId: "2", categorieId: [1, 2], pathImg: "images/pack/a.png" },
    { id: 12, name: "name12", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis illo neque facere dignissimos? Esse, ut! Nisi", prix: "40", typeId: "2", categorieId: [1, 3], pathImg: "images/pack/b.png" },
    { id: 13, name: "name13", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis illo neque facere dignissimos? Esse, ut! Nisi", prix: "15", typeId: "2", categorieId: [1, 2], pathImg: "images/pack/c.png" },
    { id: 14, name: "name14", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis illo neque facere dignissimos? Esse, ut! Nisi", prix: "20", typeId: "2", categorieId: [1, 4], pathImg: "images/pack/d.png" },
    { id: 15, name: "name15", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis illo neque facere dignissimos? Esse, ut! Nisi", prix: "25", typeId: "2", categorieId: [1, 3], pathImg: "images/pack/z.png" },
    { id: 16, name: "name16", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis illo neque facere dignissimos? Esse, ut! Nisi", prix: "30", typeId: "2", categorieId: [1, 2], pathImg: "images/pack/a.png" },
    { id: 17, name: "name17", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis illo neque facere dignissimos? Esse, ut! Nisi", prix: "35", typeId: "3", categorieId: [1, 3], pathImg: "images/pack/b.png" },
    { id: 18, name: "name18", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis illo neque facere dignissimos? Esse, ut! Nisi", prix: "40", typeId: "3", categorieId: [1, 2], pathImg: "images/pack/c.png" },
    { id: 19, name: "name19", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis illo neque facere dignissimos? Esse, ut! Nisi", prix: "15", typeId: "3", categorieId: [1, 4], pathImg: "images/pack/d.png" },
    { id: 20, name: "name20", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis illo neque facere dignissimos? Esse, ut! Nisi", prix: "20", typeId: "3", categorieId: [1, 3], pathImg: "images/pack/z.png" },
    { id: 21, name: "name21", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis illo neque facere dignissimos? Esse, ut! Nisi", prix: "25", typeId: "3", categorieId: [1, 2], pathImg: "images/pack/a.png" },
    { id: 22, name: "name22", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis illo neque facere dignissimos? Esse, ut! Nisi", prix: "30", typeId: "3", categorieId: [1, 3], pathImg: "images/pack/b.png" },
    { id: 23, name: "name23", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis illo neque facere dignissimos? Esse, ut! Nisi", prix: "35", typeId: "3", categorieId: [1, 2], pathImg: "images/pack/c.png" },
    { id: 24, name: "name24", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis illo neque facere dignissimos? Esse, ut! Nisi", prix: "40", typeId: "3", categorieId: [1, 4], pathImg: "images/pack/d.png" },
    { id: 25, name: "name25", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis illo neque facere dignissimos? Esse, ut! Nisi", prix: "15", typeId: "4", categorieId: [1, 3], pathImg: "images/pack/z.png" },
    { id: 26, name: "name26", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis illo neque facere dignissimos? Esse, ut! Nisi", prix: "20", typeId: "4", categorieId: [1, 2], pathImg: "images/pack/a.png" },
    { id: 27, name: "name27", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis illo neque facere dignissimos? Esse, ut! Nisi", prix: "25", typeId: "4", categorieId: [1, 3], pathImg: "images/pack/b.png" },
    { id: 28, name: "name28", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis illo neque facere dignissimos? Esse, ut! Nisi", prix: "30", typeId: "4", categorieId: [1, 2], pathImg: "images/pack/c.png" },
    { id: 29, name: "name29", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis illo neque facere dignissimos? Esse, ut! Nisi", prix: "35", typeId: "4", categorieId: [1, 4], pathImg: "images/pack/d.png" },
    { id: 30, name: "name30", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis illo neque facere dignissimos? Esse, ut! Nisi", prix: "40", typeId: "4", categorieId: [1, 3], pathImg: "images/pack/z.png" },
    { id: 31, name: "name31", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis illo neque facere dignissimos? Esse, ut! Nisi", prix: "15", typeId: "4", categorieId: [1, 2], pathImg: "images/pack/a.png" },
    { id: 32, name: "name32", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis illo neque facere dignissimos? Esse, ut! Nisi", prix: "20", typeId: "4", categorieId: [1, 3], pathImg: "images/pack/b.png" }
];                                                                                                                                                                                   //===================


let types = [
    {
        id: 1,
        name: 'Beginner Pack',
        categoriIs : [{id: 3, nCart: 2}, {id: 4,nCart: 1}]
    },
    {
        id: 2,
        name: 'Summoning of the Legends',
        categoriIs : [{id: 3, nCart: 2}, {id: 4,nCart: 2}, {id: 1,nCart: 1}]
    },
    {
        id: 3,
        name: 'Dark Summoning',
        categoriIs : [{id: 3, nCart: 3}, {id: 4,nCart: 3}, {id: 2,nCart: 1}]
    },
    {
        id: 4,
        name: 'Lucky Pack',
        categoriIs : [{id: 3, nCart: 5}, {id: 4,nCart: 3}, {id: 1,nCart: 1}, {id: 2,nCart: 2}]
    }
]
// id + name [type and categori]


let categori = [
    {
        id: 1,
        nam: 'Héros'
    },
    {
        id: 2,
        nam: 'Monstres'
    },
    {
        id: 3,
        nam: 'Serviteurs'
    },
    {
        id: 4,
        nam: 'Serviteurs'
    }
]

let cards = [
    // ===== Héros (categorieId: 1) =====
    { id: 1,  name: "Aelion the Radiant",  description: "A paladin whose blade shines with the light of dawn.",   categorieId: 1, rarity: "legendary", atk: 8, def: 6, pathImg: "https://picsum.photos/seed/hero1/300/420" },
    { id: 2,  name: "Sylvara Windblade",   description: "An elven ranger who never misses her mark.",             categorieId: 1, rarity: "epic",      atk: 7, def: 4, pathImg: "https://picsum.photos/seed/hero2/300/420" },
    { id: 3,  name: "Doran Ironheart",     description: "A dwarf champion who stands unbroken in battle.",        categorieId: 1, rarity: "rare",      atk: 5, def: 8, pathImg: "https://picsum.photos/seed/hero3/300/420" },
    { id: 4,  name: "Mirel the Archmage",  description: "Master of the seven arcane circles.",                    categorieId: 1, rarity: "legendary", atk: 9, def: 3, pathImg: "https://picsum.photos/seed/hero4/300/420" },
    { id: 5,  name: "Kael Shadowstep",     description: "A rogue who strikes before the enemy sees him.",         categorieId: 1, rarity: "rare",      atk: 6, def: 3, pathImg: "https://picsum.photos/seed/hero5/300/420" },

    // ===== Monstres (categorieId: 2) =====
    { id: 6,  name: "Ember Drake",         description: "A young dragon whose breath melts steel.",               categorieId: 2, rarity: "epic",      atk: 7, def: 5, pathImg: "https://picsum.photos/seed/monster1/300/420" },
    { id: 7,  name: "Cave Troll",          description: "Slow, but nothing stops its club.",                      categorieId: 2, rarity: "common",    atk: 5, def: 6, pathImg: "https://picsum.photos/seed/monster2/300/420" },
    { id: 8,  name: "Abyssal Kraken",      description: "Rises from the deep to drag ships under.",               categorieId: 2, rarity: "legendary", atk: 9, def: 7, pathImg: "https://picsum.photos/seed/monster3/300/420" },
    { id: 9,  name: "Bone Hound",          description: "An undead beast that hunts by the scent of fear.",       categorieId: 2, rarity: "common",    atk: 4, def: 2, pathImg: "https://picsum.photos/seed/monster4/300/420" },
    { id: 10, name: "Stone Golem",         description: "Carved from a mountain, animated by ancient magic.",     categorieId: 2, rarity: "rare",      atk: 4, def: 9, pathImg: "https://picsum.photos/seed/monster5/300/420" },

    // ===== Serviteurs (categorieId: 3) =====
    { id: 11, name: "Squire of the Dawn",  description: "A loyal young fighter who serves the light.",            categorieId: 3, rarity: "common",    atk: 2, def: 2, pathImg: "https://picsum.photos/seed/servant1/300/420" },
    { id: 12, name: "Goblin Scout",        description: "Quick, sneaky and always first to arrive.",              categorieId: 3, rarity: "common",    atk: 2, def: 1, pathImg: "https://picsum.photos/seed/servant2/300/420" },
    { id: 13, name: "Temple Guardian",     description: "Protects sacred ground with a steady shield.",           categorieId: 3, rarity: "common",    atk: 1, def: 4, pathImg: "https://picsum.photos/seed/servant3/300/420" },
    { id: 14, name: "Apprentice Mage",     description: "Still learning, but already dangerous.",                 categorieId: 3, rarity: "rare",      atk: 3, def: 2, pathImg: "https://picsum.photos/seed/servant4/300/420" },
    { id: 15, name: "Shadow Acolyte",      description: "Serves the dark with silent devotion.",                  categorieId: 3, rarity: "rare",      atk: 3, def: 3, pathImg: "https://picsum.photos/seed/servant5/300/420" },
    { id: 16, name: "Village Militia",     description: "Farmers turned defenders when it counts.",               categorieId: 3, rarity: "common",    atk: 2, def: 3, pathImg: "https://picsum.photos/seed/servant6/300/420" },

    // ===== Sorts (categorieId: 4) =====
    { id: 17, name: "Fireball",            description: "Deal 4 damage to a target.",                             categorieId: 4, rarity: "common",    atk: 4, def: 0, pathImg: "https://picsum.photos/seed/spell1/300/420" },
    { id: 18, name: "Healing Light",       description: "Restore 5 health to a hero.",                            categorieId: 4, rarity: "common",    atk: 0, def: 5, pathImg: "https://picsum.photos/seed/spell2/300/420" },
    { id: 19, name: "Summon Legion",       description: "Call three servants to the battlefield.",                categorieId: 4, rarity: "epic",      atk: 0, def: 0, pathImg: "https://picsum.photos/seed/spell3/300/420" },
    { id: 20, name: "Soul Drain",          description: "Steal 3 life from an enemy and heal yourself.",          categorieId: 4, rarity: "rare",      atk: 3, def: 0, pathImg: "https://picsum.photos/seed/spell4/300/420" },
    { id: 21, name: "Time Warp",           description: "Take an extra turn.",                                    categorieId: 4, rarity: "legendary", atk: 0, def: 0, pathImg: "https://picsum.photos/seed/spell/300/4205)" }
];



export {boosters, types, categori, cards};