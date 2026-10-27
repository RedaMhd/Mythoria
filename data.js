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
        nam: 'Sorts'
    }
]

export {boosters, types, categori};