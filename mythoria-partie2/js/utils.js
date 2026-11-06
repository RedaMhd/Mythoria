import { cards } from "../../data.js";
import { prepar_plyer_side, prepar_boot_side } from "./ui.js";

let deck = JSON.parse(localStorage.getItem("deck"));

function checkDeck() {
    let deck = JSON.parse(localStorage.getItem("deck"));
    if (deck.length < 5) {
        return false;
    } else return true;
}

export function toWeakenCarts(goted) {
    localStorage.setItem('plDeck', JSON.stringify([]));
    localStorage.setItem('btDeck', JSON.stringify([]));
    if (!checkDeck()) return alert("you do not have enough cards in your Deck!");
    let plDeck = []
    let btDeck = []
    if (goted === 'l' || goted === 'd') {
        deck.forEach(idOf => {
            cards.forEach(c => {
                if (parseInt(idOf.id) === parseInt(c.id)) {
                    if (goted !== c.type) {
                        plDeck.push({ id: parseInt(idOf.id), atk: parseFloat(c.atk - (c.atk * 0.2)), def: parseFloat(c.def - (c.def * 0.2)), o: "-20%" })
                    } else {
                        plDeck.push({ id: parseInt(idOf.id), atk: c.atk, def: c.def })
                    }
                }
            })
        })

        cards.forEach(card => {
            if (card.type === goted) {
                btDeck.push({ id: card.id, atk: parseFloat(card.atk - (card.atk * 0.2)), def: parseFloat(card.def - (card.def * 0.2)), o: "-20%" })
            } else {
                btDeck.push({ id: card.id, atk: card.atk, def: card.def })
            }
        })
    }

    localStorage.setItem('plDeck', JSON.stringify(plDeck));
    localStorage.setItem('btDeck', JSON.stringify(btDeck));
    // console.log(plDeck);
    // console.log(btDeck);
}

export function startGame(goted) {
    prepar_plyer_side(goted);
    prepar_boot_side(goted);
}

export function add_cards_to_hand() {
    // console.log(hand.childElementCount)
    let inHand = JSON.parse(localStorage.getItem('inHand')) || [];
    while (5 > inHand.length) {
        let plDeck = JSON.parse(localStorage.getItem('plDeck'));
        // console.log(plDeck)

        // console.log(Math.random()* (plDeck.length - 1))
        let idc = plDeck[parseInt(Math.random() * (plDeck.length - 1))].id;
        let card = cards.find(c => c.id === idc);
        // console.log(card);

        // console.log(`${card} id == ${idc}`);
        inHand.push(idc);
        plDeck.splice((plDeck.findIndex(e => e.id === idc)), 1);

        localStorage.setItem('plDeck', JSON.stringify(plDeck));
        localStorage.setItem('inHand', JSON.stringify(inHand));

        // console.log(inHand)

    }
}

export function show_cards_in_hand() {
    let hand = document.querySelector('.player> .hand');
    let inHand = JSON.parse(localStorage.getItem('inHand')) || [];
    hand.replaceChildren();
    inHand.forEach(idc => {
        let img = document.createElement('img');
        // <img src="../images/carts/Aurelion.png" class="col-span-1 rounded-xl h-[50%]">
        img.id = 'c'+idc;
        img.src = cards[cards.findIndex(e => e.id === idc)].pathImg;
        img.atk = cards[cards.findIndex(e => e.id === idc)].atk;
        img.def = cards[cards.findIndex(e => e.id === idc)].def;
        img.className = "col-span-1 rounded-xl h-[50%]";
        // console.log(cards[cards.findIndex(e=>e.id === idc)].pathImg);
        hand.append(img);

    });

    play_card(hand);
}


function play_card(hand) {
    let dialog = document.querySelector('dialog');
    let idc ;
    hand.addEventListener('click', e => {
        if (e.target.tagName === "IMG") {
            idc = e.target.id;
            dialog.querySelector('img').src = e.target.src;
            dialog.showModal();
        }
        dialog.addEventListener('click', closEvent => {
            if (closEvent.target === dialog) {
                dialog.close();
            }
            else if (closEvent.target.id === 'atk') {
                dialog.close();
                put_img_on_table(idc, '.atk');
            }
            else if (closEvent.target.id === 'def') {
                dialog.close();
                put_img_on_table(idc, '.def');
            }
        })
    })
    
}

function put_img_on_table(idc, wher){
    let tbl = document.querySelector(wher);
    
    if(tbl.childElementCount >= 5){
        // console.log(tbl.querySelector('img'));
        tbl.querySelector('img').remove();
    }
    let oldImg = document.querySelector(`#${idc}`);
    let img = document.createElement('img');
    img.id = idc;
    img.src = oldImg.src;
    img.className = 'col-span-1 rounded-xl h-[50%]';
    if(wher === '.def')img.style = 'transform: rotate(90deg);'; true;

    tbl.append(img);
    oldImg.remove();

    updatePoints_removeCart()

}