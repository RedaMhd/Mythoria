
let safCase = document.querySelector('.safCase');
export function prepar_plyer_side(goted){
    let img = safCase.querySelector('.cas1>img');
    img.src = `./assets/images/${goted}_back.png`;
    img.addEventListener('click', ()=>{
        add_cards_to_hand();
    })

}

export function prepar_boot_side(goted){
    let img = safCase.querySelector('.cas2>img');
    img.src = `./assets/images/${(goted === 'l')? 'd': 'l'}_back.png`

}