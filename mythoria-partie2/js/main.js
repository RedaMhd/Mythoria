import { getRolSide } from "./turns.js";
// import data from '../data/cards.json' with {type : "json"}

// console.log(data);
// fetch('../data/cards.json')
// .then(res => res.json())
// .then(data => console.log(data))

// console.log(window.location.pathname)
let playerSide ;

if(window.location.pathname === "/mythoria-partie2/"){const strtBoot = document.querySelector('.boot');
strtBoot.addEventListener('click', ()=>{

    playerSide = getRolSide();
    
    
})}

if(window.location.pathname === "/mythoria-partie2/arena.html"){
    console.log(playerSide)
}

