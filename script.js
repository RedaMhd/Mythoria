// Afficher chaque booster avec son illustration, son nom, sa description et son prix.
// Afficher le nombre et les catégories de cartes qu'il peut contenir.

import { boosters, types, categori } from "./data.js";

//  { id: 1, 
// name: "name1", 
// description: "Lorem ipsum dolor sit amet, 
    // consectetur adipisicing elit. Debitis illo neque facere dignissimos? Esse, 
    // ut! Nisi", 
// prix: "15", 
// typeId: "1", 
// categorieId: [1, 
// 2], 
// pathImg: "images/pack/a.png" },




function afficherBosters() {
    boosters.forEach((item) => {
        let sectionConten = document.querySelector(`.bstr${item.typeId}`);
        // // console.log(`${item.categorieId[1]}`);

        let cart = document.createElement("div");
        let h1 = document.createElement("h1");
        let img = document.createElement("img");
        let p = document.createElement('p');

        let ulCat = document.createElement('ul');
        let h4Cat = document.createElement('h4');
        // let ulTyp = document.createElement('ul');
        // let h4Typ = document.createElement('h4');

        let btn = document.createElement('button');

        h4Cat.textContent = "Categories :";
        h4Cat.className = "text-sky-600 w-[100%]";
        // console.log(types.findIndex(e => e.id === item.typeId))
        // h4Typ.textContent = `Type : ${types[types.findIndex(e=> parseInt(e.id) === parseInt(item.typeId))].name}`;
        // h4Typ.className = "text-sky-600 w-[100%]";

        h1.className = "text-red-800 backdrop-blur-lg px-2 rounded-[25%]";
        ulCat.append(h4Cat);
        ulCat.className = "flex justify-between flex-wrap"

        // console.log(types.findIndex(t => t.id === parseInt(item.typeId)))
        types[types.findIndex(t => t.id === parseInt(item.typeId))].categoriIs.forEach(catObj =>{
            let li = document.createElement('li');
            
            
            li.textContent = `${categori[categori.findIndex(e => e.id === parseInt(catObj.id))].nam} - ${catObj.nCart}`;
            ulCat.append(li);
            // catObj.id
        })
        
        // item.categorieId.forEach((catId) => {
        //     let li = document.createElement('li');
            
            
        //     li.textContent = categori[parseInt(categori.findIndex(e => e.id === parseInt(catId)))].name;
        //     ulCat.append(li);
            
        //     // ulCat.append("li");
        // })

        btn.textContent = `${item.prix} DH`;
        h1.textContent = item.name;
        cart.className += 'bg-[url(images/g.png)] bg-cover bg-no-repeat bg-w-[330%]  bg-size-[110%] bg-center ';
        img.src = item.pathImg;
        p.textContent = item.description;
        btn.name = `${item.id}`;
        btn.className += "bg-[url(images/price.png)] bg-no-repeat bg-size-[100%] w-[60%] bg-center backdrop-blur-lg"

        cart.append(h1);
        cart.append(img);
        cart.append(p);
        cart.append(ulCat)
        // cart.append(h4Typ)
        cart.append(btn);

        sectionConten.append(cart);

    });
}

// if(localStorage.getItem('panier') === null){
//     localStorage.setItem('panier', 'frrrr');
// // console.log('panier not found and, create it');
// }else{
// // console.log('creat function skiped, maybe it there! !');
//     let p = localStorage.getItem('panier');
// // console.log(`${p} <= do you ?`)
// }


if (localStorage.getItem('panier') === null) {
    localStorage.setItem('panier', JSON.stringify([]));
    // // console.log('panier not found and, create it');
} else {
    // // console.log('creat function skiped, maybe it there! !');
    let p = localStorage.getItem('panier');
    // // console.log(`${p} <= do you ?`)
}

let panier = JSON.parse(localStorage.getItem("panier"));
let ulPanier = document.querySelector(".listPanier");

let boostersAll = document.querySelectorAll('.bstr');
const totalSpan = document.querySelector("#total");

const btnAffichPanier = document.querySelector(".affichPanier");
const closePanier = document.querySelector(".x");
const panierSection = document.querySelector(".panier");

const totalP = document.querySelector(".pTotal");
// // console.log()
actualisTotal();

boostersAll.forEach(bstrX => {

    bstrX.addEventListener('click', (ev) => {
        // // console.log(boosters)
        if (ev.target.tagName === "BUTTON") {
            let ajoutBtn = ev.target;
            let ind = boosters.findIndex(b => b.id === parseInt(ajoutBtn.name));
            // // console.log(`ID = ${id}, tergettxt :${ev.target.textContent}, ajoutBtn.name = ${ajoutBtn.name}, bstr.id = ${boosters[3].id} `)
            let item = panier.findIndex(e => e.id === ind);
            if (item > -1) {
                panier[item].nbr += 1;
            } else {
                panier.push({ id: ind, nbr: 1 });
            }
            // panier.push(ind);
            // // console.log(panier)
            localStorage.setItem("panier", JSON.stringify(panier));
            actualisTotal();
        }
    })
})

function actualisTotal() {
    let tot = 0;
    panier = JSON.parse(localStorage.getItem("panier"));

    ulPanier.textContent = '';

    panier.forEach(el => {
        tot += parseInt(boosters[el.id].prix) * parseInt(el.nbr);
        // // console.log(id)
        // // console.log("===============")
        creatLiItem(el.id, el.nbr);
    });
    totalSpan.textContent = `${tot} DH`;
    totalP.textContent = `${totalSpan.textContent}`;
}


btnAffichPanier.addEventListener("click", e => {
    btnAffichPanier.style.display = "none";
    panierSection.style.display = "block";
    // // console.log(totalP);
    totalP.textContent = `${totalSpan.textContent}`;
})


function creatLiItem(ind, nbr) {

    let li = document.createElement("li");
    let img = document.createElement("img");
    let div = document.createElement("div");
    let h3 = document.createElement("h3");
    let btn = document.createElement("button")

    btn.id = `${ind}`;
    h3.textContent = `${boosters[ind].name}  `;
    btn.textContent = `${nbr} X ${boosters[ind].prix} DH `;

    img.src = boosters[ind].pathImg;
    img.className += "w-[25%]";

    li.className = "flex";
    div.className = "flex justify-between w-[74%] "
    li.append(img);
    div.append(h3);
    div.append(btn);
    li.append(div);
    ulPanier.append(li);
}

ulPanier.addEventListener("click", e => {
    if (e.target.tagName === 'BUTTON') {
        let indec = parseInt(e.target.id);

        let indOfIndex = panier.findIndex(e => e.id === indec);

        // console.log(`id of li => ${indec}`)
        // console.log(`indOfIndex => ${indOfIndex}`)
        // console.log(`panierb befor Dl => ${panier}`)

        // panier.splice(indOfIndex , 1);
        if (panier[indOfIndex].nbr > 1) {
            panier[indOfIndex].nbr -= 1;
        } else {
            panier.splice(indOfIndex, 1);
        }
        // console.log(`panierb After Dl => ${panier}`)

        localStorage.setItem("panier", JSON.stringify(panier));
        actualisTotal();
    }
})

closePanier.addEventListener("click", () => {
    btnAffichPanier.style.display = "block";
    panierSection.style.display = "none";
})

let validPanier = document.querySelector(".valider");
let myBoosters = [];
validPanier.addEventListener('click', () => {
    if (panier.length !== 0) {
        // // console.log(panier)
        alert('$ votre paiement a ete valider $');

        if (localStorage.getItem('myBoosters') === null) {
            localStorage.setItem('myBoosters', JSON.stringify([]));
        } else {
            myBoosters = JSON.parse(localStorage.getItem('myBoosters'));
        }

        panier.forEach(e => {
            // console.log({ id: e.id, name: e.nbr });
            let x = myBoosters.findIndex(b => b.id === e.id);
            if (x !== -1) {
                myBoosters[x].nbr += e.nbr;
            } else
                myBoosters.push(e);
            // // console.log('=========================');
        })

        localStorage.setItem('myBoosters', JSON.stringify(myBoosters));
        panier = [];
        localStorage.setItem("panier", JSON.stringify(panier));
        actualisTotal();

        // console.log(localStorage.getItem('myBoosters'))
    } else (
        alert('le panier est vide !!')
    )
})
afficherBosters();
