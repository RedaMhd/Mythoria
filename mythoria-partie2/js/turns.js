
function randomStart() {
    return (Math.random() > 0.5) ? 'd' : 'l';
}

export function getRolSide() {
    let divSpn = document.querySelector('.rol');
    let limg = document.createElement('img');
    let dimg = document.createElement('img');
    let p = document.createElement('p');
    let pick = document.createElement('p');
    pick.textContent = 'pick one to start the draw';
    pick.className = 'w-full text-center'

    divSpn.replaceChildren();

    limg.src = './assets/images/Piecs2.png'
    dimg.src = './assets/images/Piecs1.png'

    limg.className = "w-[20%] h-[50%]"
    dimg.className = "w-[20%] h-[50%]"

    limg.id = 'cn1';
    dimg.id = 'cn2';

    p.className = "w-full text-center"
    p.textContent = 'Let\'s see which side it will play for.';
    divSpn.append(p, limg, dimg, pick);

    let winerTurn = randomStart();
    limg.addEventListener('click', e => {
        divSpn.replaceChildren();
        if(winerTurn === 'l'){
            alert('it you L');
        }else alert('the boot goes ferst (you D)')
    })
    dimg.addEventListener('click', e => {
        divSpn.replaceChildren();
        if(winerTurn === 'd'){
            alert('it you D');
        }else alert('the boot goes ferst (you L)')
    })
}