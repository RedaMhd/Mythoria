import { cards } from "./data.js";

let myCarts = JSON.parse(localStorage.getItem("myCollectionCarts")) || [];
let deck = JSON.parse(localStorage.getItem("deck")) || [];

function afficherCarts() {
    myCarts = JSON.parse(localStorage.getItem("myCollectionCarts")) || [];
    deck = JSON.parse(localStorage.getItem("deck")) || [];

    myCarts.forEach((item) => {
        // console.log(cards.findIndex(e => e.id === item.id))
        let indxOfCart = cards.findIndex(e => e.id === item.id);
        // console.log(myCarts)
        let sectionConten = document.querySelector(`.cat${cards[indxOfCart].categorieId}`);

        let cart = document.createElement("div");
        cart.className = 'backdrop-blur-lg rounded-3xl text-red-100'
        let h1 = document.createElement("h1");
        let img = document.createElement("img");
        let p = document.createElement('p');

        // let ulCat = document.createElement('ul');
        // let h4Cat = document.createElement('h4');

        let btn = document.createElement('button');
        btn.id = item.id;
        // console.log('d')
        // console.log(deck.findIndex(e => e.id === item.id));
        if (deck.findIndex(e => parseInt(e.id)=== item.id) > -1) {
            btn.textContent = 'pull out'
        } else (
            btn.textContent = 'put in'
        )

        h1.textContent = item.nbr;
        img.src = cards[indxOfCart].pathImg;
        p.innerHTML = `Atk : ${cards[indxOfCart].atk} - Def : ${cards[indxOfCart].def}`


        cart.append(h1);
        cart.append(img);
        cart.append(p);
        cart.append(btn)

        // if()
        // cart.append(ulCat)
        // // cart.append(h4Typ)
        // cart.append(btn);

        sectionConten.append(cart);

    });

}

let main = document.querySelector('main');
main.addEventListener('click', e => {
    if (e.target.tagName === 'BUTTON' && e.target.id) {
        let idBtn = e.target.id;
        if (deck[deck.findIndex(d => idBtn === d.id)]) {
            deck.splice(deck.findIndex(d => idBtn === d.id), 1);
            addToCards(idBtn);
            localStorage.setItem('deck', JSON.stringify(deck));
            localStorage.setItem('myCollectionCarts', JSON.stringify(myCarts));
            e.target.textContent = 'put in';
        } else {
            if (deck.length > 19) return alert("limit 20");
            deck.push({ id: idBtn });
            removefromCards(idBtn);
            localStorage.setItem('deck', JSON.stringify(deck));
            localStorage.setItem('myCollectionCarts', JSON.stringify(myCarts));
            e.target.textContent = 'pull out';
        }
    }
    window.location.reload();
})
function addToCards(idCart) {
    let id = myCarts.findIndex(c => c.id === parseInt(idCart))
    if (id > -1) {
        myCarts[id].nbr += 1;
    } else {
        myCarts.push({ id: parseInt(idCart), nbr: 1 })
    }
}
function removefromCards(idCart) {
    console.log(idCart)
    let id = myCarts.findIndex(c => c.id === parseInt(idCart))
    console.log(id)
    if (id > -1) {
        myCarts[id].nbr -= 1;
    }
    //  if (myCarts[id].nbr <= 0) {
    //     myCarts.splice(id, 1);
    // }
}


let dialog =  document.querySelector('dialog');

let openDialog = document.querySelector('#openDialog')

openDialog.textContent = ` Show ${deck.length} / 20`

openDialog.addEventListener("click", e=>{
    dialog.showModal();
})

let carts = document.querySelector('#carts');

function showDeck(){
    let deck = JSON.parse(localStorage.getItem('deck'))
    if(!deck) deck = [];
    // console.log(carts)
    deck.forEach(d =>{
        let img = document.createElement('img');
        let h1 = document.createElement('h1');
        let p = document.createElement('p');
        let cart = document.createElement('div');
        
        let card = cards.find( c => c.id === parseInt(d.id));
        
        img.src =  card.pathImg;
        h1.textContent = (card.type ==='lt')? 'light' : 'darck';
        p.innerText = `atack: ${card.atk} \ndef: ${card.def}`
        cart.className = "h-[100%] text-center cart ";
        cart.id = d.id;
        cart.append(h1)
        cart.append(img)
        cart.append(p)
        carts.append(cart)
    })
}
carts.addEventListener('click', e=>{
    let cart = e.target.closest('.cart');
    e.stopPropagation();
    let id = Number(cart.id);
    let divImgSelect = document.querySelector(".selectedImg");
    divImgSelect.replaceChildren();
    let divInfos = document.querySelector(".infos");
    divInfos.replaceChildren();
    let img = document.createElement('img');
    let name = document.createElement('h1');
    let discr = document.createElement("p");
    let rarty = document.createElement("p");
    let atckDef = document.createElement("h2");

    let card =  cards.find(c => c.id === id);

    img.src = card.pathImg;
    name.textContent = card.name;
    discr.textContent = card.description;
    rarty.textContent = card.rarity;
    atckDef.innerText = `atck: ${card.atk}\ndef: ${card.def}`;

    divImgSelect.append(name, img);

    divInfos.append(discr, rarty, atckDef);

})
// console.log('dfd')
afficherCarts();
showDeck();