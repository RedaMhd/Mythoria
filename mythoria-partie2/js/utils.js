import { cards } from "../../data.js";
import { prepar_plyer_side, prepar_boot_side } from "./ui.js";

let deck = JSON.parse(localStorage.getItem("deck"));

function checkDeck() {
    let deck = JSON.parse(localStorage.getItem("deck"));
    if(deck.length < 5 ){
        return false;
    }else return true;
}

export function toWeakenCarts(goted) {
    localStorage.setItem('plDeck', JSON.stringify([]));
    if(!checkDeck()) return alert("you do not have enough cards in your Deck!");
    let plDeck = []
    if (goted === 'l' || goted === 'd') {
        deck.forEach(idOf => {
            cards.forEach(c => {
                // console.log(c.id)
                // console.log(idOf.id)
                // console.log(parseInt(idOf.id) === parseInt(c.id))
                if (parseInt(idOf.id) === parseInt(c.id)) {
                    if (goted !== c.type) {
                        plDeck.push({ id: parseInt(idOf.id), atk: parseFloat(c.atk - (c.atk * 0.2)), def: parseFloat(c.def - (c.def * 0.2)), o: "-20%" })
                    } else {
                        plDeck.push({ id: parseInt(idOf.id), atk: c.atk, def: c.def })
                    }
                }
            })
        })
    }

    localStorage.setItem('plDeck', JSON.stringify(plDeck));
    console.log(plDeck);
}

export function startGame(goted){
    prepar_plyer_side(goted);
    prepar_boot_side(goted);
}