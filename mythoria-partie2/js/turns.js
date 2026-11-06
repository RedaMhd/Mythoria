import { toWeakenCarts, startGame } from "./utils.js";
import { creat_plyer_state } from "./state.js";


function randomStart() {
    return (Math.random() > 0.5) ? 'd' : 'l';
}

export function getRolSide() {
    let divSpn = document.querySelector('.rol');
    let limg = document.createElement('img');
    let dimg = document.createElement('img');
    let p = document.createElement('p');
    let pick = document.createElement('p');
    pick.textContent = 'pick one side to flep the coin !';
    pick.className = 'w-full text-center'

    divSpn.replaceChildren();

    limg.src = './assets/images/Piecs2&.png'
    dimg.src = './assets/images/Piecs1&.png'

    limg.className = "w-[20%] h-[25%]"
    dimg.className = "w-[20%] h-[25%]"

    limg.id = 'cn1';
    dimg.id = 'cn2';

    p.className = "w-full text-center"
    p.textContent = 'Let\'s see who going to start ferst.';
    divSpn.append(p, limg, dimg, pick);

    let winerTurn = randomStart();
    let time = 6000;

    let side;

    limg.addEventListener('click', e => {
        divSpn.replaceChildren();
        setTimeout(flepCoin(), 4000);
        if (winerTurn === 'd') time = 4000;
        setTimeout(() => {
            divSpn.replaceChildren(); 
            (winerTurn === 'l') ? (pickSide('player')) : (pickSide('boot'));
            console.log(side);
            // setTimeout(()=>{ creat_plyer_state(side, (winerTurn === 'l')? 'player': 'boot')}, time)
            
        }, time);
        
        // return side;
        // console.log('getRolSide');
    })
    dimg.addEventListener('click', e => {
        divSpn.replaceChildren();
        // if(winerTurn === 'd'){
        //     alert('it you D');
        // }else alert('the boot goes ferst (you L)')
        flepCoin();
        if (winerTurn === 'd') time = 4000;
        setTimeout(() => {
            divSpn.replaceChildren();
            (winerTurn === 'd') ? (pickSide('player')) : (pickSide('boot'));
            // console.log(side)
            // setTimeout(()=>{ creat_plyer_state(side, (winerTurn === 'd')? 'player': 'boot')}, time)
            
        }, time);
        
        
        // return side;
        // console.log('getRolSide');
    })


}

export function flepCoin() {
    let divSpn = document.querySelector('.rol');
    divSpn.replaceChildren();

    let limg = document.createElement('img');
    let dimg = document.createElement('img');

    // <img id="lImg" class="w-[5em] h-[5em]" src="./assets/images/Piecs2&.png" alt="">
    //         <img id="dImg" class="w-[5em] h-[5em]" src="./assets/images/Piecs1&.png" alt=""></img>

    limg.src = './assets/images/Piecs2&.png';
    dimg.src = './assets/images/Piecs1&.png';

    limg.className = 'w-[5em] h-[5em]';
    dimg.className = 'w-[5em] h-[5em]';

    limg.id = 'lImg';
    dimg.id = 'dImg';
    divSpn.append(limg, dimg);


};

function pickSide(who) {
    let divSpn = document.querySelector('.rol');
    let side;

    if (who === 'player') {
        alert('you ween!!')
        let limg = document.createElement('img');
        let dimg = document.createElement('img');
        let p = document.createElement('p');
        let pick = document.createElement('p');
        pick.textContent = 'pick one to start the draw';
        pick.className = 'w-full text-center'

        divSpn.replaceChildren();

        limg.src = './assets/images/lSide.png'
        dimg.src = './assets/images/dSide.png'

        limg.className = "w-[20%] h-[50%]"
        dimg.className = "w-[20%] h-[50%]"

        limg.id = 'cn1';
        dimg.id = 'cn2';

        p.className = "w-full text-center"
        p.textContent = 'Let\'s see which side it will play for.';
        divSpn.append(p, limg, dimg, pick);

        limg.addEventListener('click', e => {
            divSpn.replaceChildren();

            alert('you choose goodness side!');
            side = 'l';
            toWeakenCarts('l');
            showStarte('l');
            localStorage.setItem('state', JSON.stringify([{playerSide : side, winerTurn: 'player', playerPoints : 100, bootPoints : 100}]))

        })
        dimg.addEventListener('click', e => {
            divSpn.replaceChildren();
            // if(winerTurn === 'd'){
            alert('you choose the evil side!');
            side = 'd';

            // }else alert('the boot goes ferst (you L)')
            toWeakenCarts('d');
            showStarte('d');
            localStorage.setItem('state', JSON.stringify([{playerSide : side, winerTurn: 'player', playerPoints : 100, bootPoints : 100}]))
        })
        // return side;
    } else {
        let winerTurn = randomStart();
        alert("boot is choosing side that hi wod play for...");
        alert(`the boot shos the ${(winerTurn === 'l') ? 'light side' : 'darck side'}`)
        side = (winerTurn === 'l') ? 'd' : 'l';
        showStarte(side);
        // return side;
        // console.log('player side')
        localStorage.setItem('state', JSON.stringify([{playerSide : side, winerTurn: 'boot', playerPoints : 100, bootPoints : 100}]))
    }
    

}

function showStarte(playerSide) {
    let divSpn = document.querySelector('.rol');
    let toStart = document.createElement('div');
    toStart.innerHTML = `
            <div class="flex justify-between">
                <div class="grid grid-cols-3 text-center" style="font-size: 230%;">
                    <img src="./assets/images/lSide.png" class="col-span-2 w-[80%]" alt="">
                    <h1 class="m-auto">${(playerSide === 'l') ? 'You' : 'Boot'}</h1>
                </div>
                
                

                <div class="grid grid-cols-3 text-center" style="font-size: 230%;">
                    <h1 class="m-auto">${(playerSide === 'd') ? 'You' : 'Boot'}</h1>
                    <img src="./assets/images/dSide.png" class="col-span-2 w-[80%]" alt="">
                </div>
            </div>
            <button class="flex m-auto">
                <a href="arena.html" id="arena" class="w-[20%] m-auto">
                    <img src="./assets/images/go_button.png " class="w-[100%]  transition delay-150 duration-300 ease-in-out hover:scale-110"  alt="">
                </a>
            </button>
            `;
    divSpn.classList.add('bg-[url(./assets/images/baq.png)]', 'bg-center', 'bg-no-repeat');
    // toStart.className = 'm-auto'
    divSpn.replaceChildren(toStart);

    const arena = document.querySelector('#arena');
    console.log(arena)
    arena.addEventListener('click', e => {
        console.log('jfj');
        startGame(playerSide);
        // e.preventDefault();
    })
}
