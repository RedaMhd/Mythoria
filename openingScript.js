import { boosters, categori, types } from "./data.js";


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
    btnOpn.textContent = 'open';
    btnOpn.id = id;

    divInfos.append(ulTpn);
    divInfos.append(btnOpn)
    // console.log(btnOpn)

})

divOpen.addEventListener('click' , e=>{
    if(e.target.)
})



showBstrs();