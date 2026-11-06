import { add_cards_to_hand, show_cards_in_hand } from "./utils.js";

let safCase = document.querySelector('.safCase');

export function prepar_plyer_side(goted){
    let img = safCase.querySelector('.cas2>img');
    let p = safCase.querySelector('.cas2>p');
    img.src = `./assets/images/${goted}_back.png`;
    img.addEventListener('click', ()=>{
        add_cards_to_hand();
        show_cards_in_hand();
    })
    p.textContent = JSON.parse(localStorage.getItem('state'))[0].playerPoints + ' Pt';
    
}

export function prepar_boot_side(goted){
    let img = safCase.querySelector('.cas1>img');
    let p = safCase.querySelector('.cas1>p');
    p.textContent = JSON.parse(localStorage.getItem('state'))[0].bootPoints + ' Pt';

    img.src = `./assets/images/${(goted === 'l')? 'd': 'l'}_back.png`;
    
    
}