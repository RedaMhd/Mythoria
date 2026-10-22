// Afficher chaque booster avec son illustration, son nom, sa description et son prix.
// Afficher le nombre et les catégories de cartes qu'il peut contenir.

let boosters = [
    {
        id : 1,
        name : "nameA",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis illo neque facere dignissimos? Esse, ut! Nisi",
        prix : "15",
        typeId : "1",
        categorieId : [1,2],
        pathImg : "images/pack/a.png"
    },
    {
        id : 2,
        name : "nameB",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis illo neque facere dignissimos? Esse, ut! Nisi",
        prix : "15",
        typeId : "1",
        categorieId : [1,3],
        pathImg : "images/pack/b.png"
    },
    {
        id : 3,
        name : "nameC",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis illo neque facere dignissimos? Esse, ut! Nisi",
        prix : "15",
        typeId : "1",
        categorieId : [1,2],
        pathImg : "images/pack/c.png"
    },
    {
        id : 4,
        name : "nameD",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis illo neque facere dignissimos? Esse, ut! Nisi",
        prix : "15",
        typeId : "1",
        categorieId : [1,4],
        pathImg : "images/pack/d.png"
    },
    {
        id : 5,
        name : "nameE",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis illo neque facere dignissimos? Esse, ut! Nisi",
        prix : "15",
        typeId : "1",
        categorieId : [1,3],
        pathImg : "images/pack/z.png"
    },
    {
        id : 11,
        name : "nameA",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis illo neque facere dignissimos? Esse, ut! Nisi",
        prix : "15",
        typeId : "1",
        categorieId : [1,2],
        pathImg : "images/pack/a.png"
    },
    {
        id : 12,
        name : "nameB",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis illo neque facere dignissimos? Esse, ut! Nisi",
        prix : "15",
        typeId : "1",
        categorieId : [1,3],
        pathImg : "images/pack/b.png"
    },
    {
        id : 13,
        name : "nameC",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis illo neque facere dignissimos? Esse, ut! Nisi",
        prix : "15",
        typeId : "1",
        categorieId : [1,2],
        pathImg : "images/pack/c.png"
    },
    {
        id : 14,
        name : "nameD",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis illo neque facere dignissimos? Esse, ut! Nisi",
        prix : "15",
        typeId : "1",
        categorieId : [1,4],
        pathImg : "images/pack/d.png"
    },
    {
        id : 15,
        name : "nameE",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis illo neque facere dignissimos? Esse, ut! Nisi",
        prix : "15",
        typeId : "1",
        categorieId : [1,3],
        pathImg : "images/pack/z.png"
    }
]

let types = [
    {
        id : 1,
        name : 'Beginner Pack'
    },
    {
        id : 2,
        name : 'Summoning of the Legends'
    },
    {
        id : 3,
        name : 'Dark Summoning'
    },
    {
        id : 4,
        name : 'Lucky Pack'
    } 
]
// id + name [type and categori]

let categori =[
    {
        id : 1,
        name : 'Héros'
    },
    {
        id : 2,
        name : 'Monstres'
    },
    {
        id : 3,
        name : 'Serviteurs'
    },
    {
        id : 4,
        name : 'Sorts'
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


function afficherBosters(){
    boosters.forEach((item)=>{
        let sectionConten = document.querySelector(`.bstr${item.typeId}`);
        // console.log(`${item.categorieId[1]}`);
        
        let cart = document.createElement("div");
        let h1 = document.createElement("h1");
        let img = document.createElement("img");
        let p = document.createElement('p');
        let btn = document.createElement('button');
        
        btn.textContent = item.prix;
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


if(localStorage.getItem('panier') === null){
    localStorage.setItem('panier', '');
    console.log('panier not found and, create it');
}else{
    console.log('creat function skiped, maybe it there! !');
    let p = localStorage.getItem('panier');
    console.log(`${p} <= do you ?`)
}

let boostersAll = document.querySelector('.bstr');

boostersAll.addEventListener('click', (ev)=>{
    let ajoutBtn = ev.target;
    let id = boosters.indexOf(bstr => bstr.id === parseInt(ajoutBtn.name));
})


afficherBosters();