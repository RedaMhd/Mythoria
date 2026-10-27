import { boosters, categori, types, cards } from "./data.js";


let divCntBstr = document.querySelector(".myBstrs");
let divOpen = document.querySelector(".toOpen");
let myBstr = [];

function showBstrs() {
    if (localStorage.getItem('myBoosters') === null) {
        localStorage.setItem('myBoosters', JSON.stringify([]));
    } else {
        myBstr = JSON.parse(localStorage.getItem('myBoosters'));
    }
    // id: nbr:
    if (myBstr.length === 0) {
        alert("you don't have any boosters, try store!");
    } else {
        myBstr.forEach(b => {
            let div = document.createElement("div");
            let h1 = document.createElement("h1");
            let img = document.createElement("img");

            div.className = "h-[7em] text-center cart";
            // img.className = "h-[7em]";
            img.src = boosters[b.id].pathImg;
            img.id = b.id;
            h1.textContent = `${b.nbr}`

            div.append(img);
            div.append(h1);
            divCntBstr.append(div);
        })
    }
}

divCntBstr.addEventListener('click', e => {
    let cart = e.target.closest('.cart');
    // console.log(e.target.closest('.cart').querySelector("h1"))
    if (!cart.querySelector("img").src) return;
    let img = divOpen.querySelector('img');
    img.src = cart.querySelector("img").src;
    let h1 = divOpen.querySelector("h1").textContent = e.target.closest('.cart').querySelector("h1").textContent;

    let divInfos = document.querySelector('.infos');
    let id = cart.querySelector("img").id;
    let dscr = boosters[id].description;
    let name = boosters[id].name;
    let typeId = boosters[id].typeId;
    let type = types[typeId].name;

    divInfos.innerHTML = `
        <h2 class='text-red-500'>${name}</h2>
        <p class='text-start'>${dscr}</p>
        <p class='my-2 text-sky-500'>${type}</p>
    `
    let ulTpn = document.createElement("ul");
    // console.log(types[typeId])
    types[typeId].categoriIs.forEach(c =>{
        let lix = document.createElement("li");
        
        // console.log(categori[categori.findIndex(e => e.id === c.id)].nam);

        lix.textContent = `
           ${c.nCart} ${categori[categori.findIndex(e => e.id === c.id)].nam} CARTS
        `;
        lix.classList.add("text-start")
        console.log(ulTpn);
    
        ulTpn.append(lix);
    
    })
    let btnOpn = document.createElement('button');
    btnOpn.textContent = 'OPEN';
    btnOpn.id = id;
    btnOpn.classList.add('text-yellow-500')
    btnOpn.classList.add('rounded-[50%]')
    btnOpn.classList.add('px-2')
    btnOpn.classList.add('bg-red-900')

    divInfos.append(ulTpn);
    divInfos.append(btnOpn)
    // console.log(btnOpn)

})

// divOpen.addEventListener('click' , e=>{
//     if(e.target.tagName === 'BUTTON'){
//         let bstId = e.target.id;
//         // alert(boosters[bstId].pathImg);
//         // <div class="bg-red-900 h-[7em] text-center"></div>
//         //---------
//         //---------

//     }else return;
// })

let myCollectionCarts = JSON.parse(localStorage.getItem('myCollectionCarts')) || [];

divOpen.addEventListener('click', e => {
    if (e.target.tagName !== 'BUTTON') return;

    let bstId = Number(e.target.id);
    let booster = boosters.find(b => b.id === bstId);
    let type = types.find(t => t.id === Number(booster.typeId));

    // 1. check the player still owns this booster, then consume one
    let owned = myBstr.find(b => b.id === bstId);
    if (!owned || owned.nbr <= 0) {
        alert("you don't have this booster anymore!");
        return;
    }
    owned.nbr--;
    let cartDiv = divCntBstr.querySelector(`img[id="${bstId}"]`).closest('.cart');
    if (owned.nbr === 0) {
        myBstr = myBstr.filter(b => b.id !== bstId);
        cartDiv.remove();
        e.target.remove();               // remove the OPEN button
    } else {
        cartDiv.querySelector('h1').textContent = owned.nbr;
    }
    divOpen.querySelector('h1').textContent = owned.nbr;
    localStorage.setItem('myBoosters', JSON.stringify(myBstr));

    // 2. draw cards with Math.random, following the type's recipe
    let pulled = [];
    type.categoriIs.forEach(({ id, nCart }) => {
        let pool = cards.filter(c => c.categorieId === id);
        for (let i = 0; i < nCart; i++) {
            pulled.push(pool[Math.floor(Math.random() * pool.length)]);
        }
    });

    // 3. save to myCollectionCarts (same {id, nbr} format as myBoosters)
    pulled.forEach(card => {
        let inCol = myCollectionCarts.find(c => c.id === card.id);
        if (inCol) inCol.nbr++;
        else myCollectionCarts.push({ id: card.id, nbr: 1 });
    });
    localStorage.setItem('myCollectionCarts', JSON.stringify(myCollectionCarts));

    // 4. show the cards in divOpen
    divOpen.querySelector('.opened')?.remove();   // clear the previous opening
    let opened = document.createElement('div');
    opened.className = 'opened flex flex-wrap gap-2 justify-center mt-4';

    pulled.forEach(card => {
        let div = document.createElement('div');
        let img = document.createElement('img');
        let p = document.createElement('p');

        div.className = 'h-[7em] text-center';
        img.src = card.pathImg;
        img.className = 'h-full';
        p.textContent = card.name;

        div.append(img);
        div.append(p);
        opened.append(div);
    });

    divOpen.append(opened);
});


showBstrs();