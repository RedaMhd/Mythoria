// Afficher chaque booster avec son illustration, son nom, sa description et son prix.
// Afficher le nombre et les catégories de cartes qu'il peut contenir.

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
];


let types = [
    {
        id: 1,
        name: 'Beginner Pack'
    },
    {
        id: 2,
        name: 'Summoning of the Legends'
    },
    {
        id: 3,
        name: 'Dark Summoning'
    },
    {
        id: 4,
        name: 'Lucky Pack'
    }
]
// id + name [type and categori]

let categori = [
    {
        id: 1,
        name: 'Héros'
    },
    {
        id: 2,
        name: 'Monstres'
    },
    {
        id: 3,
        name: 'Serviteurs'
    },
    {
        id: 4,
        name: 'Sorts'
    }
]


// {
//     id : 5,
//     name : "RBR",
//     description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis illo neque facere dignissimos? Esse, ut! Nisi",
//     prix : "15",
//     typeId : "1",
//     categorieId : {2,4},
//     pathImg : "images/pack/6.png"
// }


function afficherBosters() {
    boosters.forEach((item) => {
        let sectionConten = document.querySelector(`.bstr${item.typeId}`);
        // console.log(`${item.categorieId[1]}`);

        let cart = document.createElement("div");
        let h1 = document.createElement("h1");
        let img = document.createElement("img");
        let p = document.createElement('p');
        let btn = document.createElement('button');

        btn.textContent = `${item.prix} DH`;
        h1.textContent = item.name;
        img.src = item.pathImg;
        p.textContent = item.description;
        btn.name = `${item.id}`;

        cart.append(h1);
        cart.append(img);
        cart.append(p);
        cart.append(btn);

        sectionConten.append(cart);

    });
}

// if(localStorage.getItem('panier') === null){
//     localStorage.setItem('panier', 'frrrr');
//     console.log('panier not found and, create it');
// }else{
//     console.log('creat function skiped, maybe it there! !');
//     let p = localStorage.getItem('panier');
//     console.log(`${p} <= do you ?`)
// }


if (localStorage.getItem('panier') === null) {
    localStorage.setItem('panier', JSON.stringify([]));
    console.log('panier not found and, create it');
} else {
    console.log('creat function skiped, maybe it there! !');
    let p = localStorage.getItem('panier');
    console.log(`${p} <= do you ?`)
}

let panier = JSON.parse(localStorage.getItem("panier"));
let ulPanier = document.querySelector(".listPanier");

let boostersAll = document.querySelector('.bstr');
const totalSpan = document.querySelector("#total");

const btnAffichPanier = document.querySelector(".affichPanier");
const panierSection = document.querySelector(".panier");

const totalP = document.querySelector(".pTotal");
// console.log()
actualisTotal();

boostersAll.addEventListener('click', (ev) => {
    if (ev.target.tagName === "BUTTON") {
        let ajoutBtn = ev.target;
        let ind = boosters.findIndex(b => b.id === parseInt(ajoutBtn.name));
        // console.log(`ID = ${id}, tergettxt :${ev.target.textContent}, ajoutBtn.name = ${ajoutBtn.name}, bstr.id = ${boosters[3].id} `)
        panier.push(ind);
        console.log(panier)
        localStorage.setItem("panier", JSON.stringify(panier));
        actualisTotal();
    }
})

function actualisTotal() {
    let tot = 0;
    panier = JSON.parse(localStorage.getItem("panier"));

    ulPanier.textContent = '';

    panier.forEach(id => {
        tot += parseInt(boosters[id].prix);
        console.log(id)
        console.log("===============")
        creatLiItem(id);
    });
    totalSpan.textContent = `${tot} DH`;
}


btnAffichPanier.addEventListener("click", e => {
    btnAffichPanier.style.display = "none";
    panierSection.style.display = "block";
    console.log(totalP);
    totalP.textContent = `${totalSpan.textContent} DH`;
})


function creatLiItem(ind){
    let li = document.createElement("li");
    li.textContent = `${boosters[ind].name}  : ${boosters[ind].prix} DH `;
    li.id = `${ind}`;
    // console.log(ulPanier);
    ulPanier.append(li);
}

ulPanier.addEventListener("click", e =>{
    if(e.target.tagName === 'LI')
    {
        let indec = parseInt(e.target.id);
        // console.log(e.target)
        console.log(`${indec}`)
        let indOfIndex= panier.indexOf(item => item === indec);
        panier.splice(indOfIndex , 1);
        localStorage.setItem("panier", JSON.stringify(panier));
        // actualisTotal();
    }
})

afficherBosters();