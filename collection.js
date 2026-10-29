import { cards } from "./data.js";

let myCarts = JSON.parse(localStorage.getItem("myCollectionCarts")) || [];
let deck = JSON.parse(localStorage.getItem("deck")) || [];

function afficherCarts() {
    myCarts = JSON.parse(localStorage.getItem("myCollectionCarts")) || [];
    deck = JSON.parse(localStorage.getItem("deck")) || [];

    myCarts.forEach((item) => {
        // console.log(cards.findIndex(e => e.id === item.id))
        let indxOfCart = cards.findIndex(e => e.id === item.id);
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

afficherCarts();