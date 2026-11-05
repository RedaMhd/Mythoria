import { getRolSide } from "./turns.js";
import { prepar_plyer_side, prepar_boot_side } from "./ui.js";
// import data from '../data/cards.json' with {type : "json"}

// console.log(data);
// fetch('../data/cards.json')
// .then(res => res.json())
// .then(data => console.log(data))

// console.log(window.location.pathname)
let playerSide ;
let state = [];

if(window.location.pathname === "/mythoria-partie2/"){const strtBoot = document.querySelector('.boot');
strtBoot.addEventListener('click', ()=>{

    getRolSide();
    
    
})}

if(window.location.pathname === "/mythoria-partie2/arena.html"){
    state = JSON.parse(localStorage.getItem('state'))
    // console.log(state);
    prepar_plyer_side(state[0].playerSide);
    prepar_boot_side(state[0].playerSide);

    
}

