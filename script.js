// Afficher chaque booster avec son illustration, son nom, sa description et son prix.
// Afficher le nombre et les catégories de cartes qu'il peut contenir.

let boosters = [
    {
        id: 1,
        name: "nameA",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis illo neque facere dignissimos? Esse, ut! Nisi",
        prix: "15",
        typeId: "1",
        categorieId: [1, 2],
        pathImg: "images/pack/a.png"
    },
    {
        id: 2,
        name: "nameB",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis illo neque facere dignissimos? Esse, ut! Nisi",
        prix: "15",
        typeId: "1",
        categorieId: [1, 3],
        pathImg: "images/pack/b.png"
    },
    {
        id: 3,
        name: "nameC",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis illo neque facere dignissimos? Esse, ut! Nisi",
        prix: "15",
        typeId: "1",
        categorieId: [1, 2],
        pathImg: "images/pack/c.png"
    },
    {
        id: 4,
        name: "nameD",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis illo neque facere dignissimos? Esse, ut! Nisi",
        prix: "15",
        typeId: "1",
        categorieId: [1, 4],
        pathImg: "images/pack/d.png"
    },
    {
        id: 5,
        name: "nameE",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis illo neque facere dignissimos? Esse, ut! Nisi",
        prix: "15",
        typeId: "1",
        categorieId: [1, 3],
        pathImg: "images/pack/z.png"
    },
    {
        id: 11,
        name: "nameA",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis illo neque facere dignissimos? Esse, ut! Nisi",
        prix: "15",
        typeId: "1",
        categorieId: [1, 2],
        pathImg: "images/pack/a.png"
    },
    {
        id: 12,
        name: "nameB",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis illo neque facere dignissimos? Esse, ut! Nisi",
        prix: "15",
        typeId: "1",
        categorieId: [1, 3],
        pathImg: "images/pack/b.png"
    },
    {
        id: 13,
        name: "nameC",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis illo neque facere dignissimos? Esse, ut! Nisi",
        prix: "15",
        typeId: "1",
        categorieId: [1, 2],
        pathImg: "images/pack/c.png"
    },
    {
        id: 14,
        name: "nameD",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis illo neque facere dignissimos? Esse, ut! Nisi",
        prix: "15",
        typeId: "1",
        categorieId: [1, 4],
        pathImg: "images/pack/d.png"
    },
    {
        id: 15,
        name: "nameE",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis illo neque facere dignissimos? Esse, ut! Nisi",
        prix: "15",
        typeId: "1",
        categorieId: [1, 3],
        pathImg: "images/pack/z.png"
    }
]

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

// if(localStorage.getItem('painer') === null){
//     localStorage.setItem('panier', 'frrrr');
//     console.log('panier not found and, create it');
// }else{
//     console.log('creat function skiped, maybe it there! !');
//     let p = localStorage.getItem('painer');
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

let painer = JSON.parse(localStorage.getItem("panier"));
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
        let id = boosters.findIndex(b => b.id === parseInt(ajoutBtn.name));
        // console.log(`ID = ${id}, tergettxt :${ev.target.textContent}, ajoutBtn.name = ${ajoutBtn.name}, bstr.id = ${boosters[3].id} `)
        painer.push(id);
        console.log(painer)
        localStorage.setItem("panier", JSON.stringify(painer));
        actualisTotal();
    }
})

function actualisTotal() {
    let tot = 0;
    painer = JSON.parse(localStorage.getItem("panier"));

    painer.forEach(id => {
        tot += parseInt(boosters[id].prix);
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


function creatLiItem(id){
    let li = document.createElement("li");
    li.textContent = `${boosters[id].name}  : ${boosters[id].prix} DH `;
    li.name = `${id}`;
    // console.log(ulPanier);
    ulPanier.append(li);
}

ulPanier.addEventListener("click", e =>{
    if(e.target.tagName === 'LI')
    {
        let indec = parseInt(e.target.name);
        console.log(`${indec}`)
        
        painer.splice(boosters[indec].id, 1);
        localStorage.setItem("panier", JSON.stringify(painer));
        // actualisTotal();
    }
})

afficherBosters();