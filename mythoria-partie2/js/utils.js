import { cards } from "../../data.js";
let deck = JSON.parse(localStorage.getItem("deck"));

export function toWeakenCarts(wanted, goted) {
    localStorage.setItem('plDeck', JSON.stringify([]));
    let plDeck = []
    if (goted === wanted) {
        deck.forEach(idOf => {
            cards.forEach(c => {
                if (idOf === c.id) {
                    if (wanted !== c.type && ) {
                        plDeck.append({ id: idOf, atk: parseInt(c.atk - (c.atk * 0.2)), def: parseInt(c.def - (c.def * 0.2)) })
                    } else {
                        plDeck.append({ id: idOf, atk: c.atk, def: c.def })
                    }
                }
            })
        })
    }
}