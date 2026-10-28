import { cards } from "./data.js";

let myCarts = JSON.parse(localStorage.getItem("myCollectionCarts"));
let deck = JSON.parse(localStorage.getItem("deck")) || [];

function afficherCarts() {
    myCarts.forEach((item) => {
        // console.log(cards.findIndex(e => e.id === item.id))
        let indxOfCart = cards.findIndex(e => e.id === item.id);
        let sectionConten = document.querySelector(`.cat${cards[indxOfCart].categorieId}`);
       
        let cart = document.createElement("div");
        cart.className ='backdrop-blur-lg rounded-3xl text-red-100'
        let h1 = document.createElement("h1");
        let img = document.createElement("img");
        let p = document.createElement('p');

        // let ulCat = document.createElement('ul');
        // let h4Cat = document.createElement('h4');
        
        let btn = document.createElement('button');
        btn.id = item.id;
        if (deck.findIndex(e => e.id === item.id) > -1){
            btn.textContent = 'pull out'
        }else(
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

afficherCarts();