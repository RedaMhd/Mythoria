import { boosters } from "./data.js";


let divCntBstr = document.querySelector(".myBstrs");
let myBstr = [];

function showBstrs() {
    if (localStorage.getItem('myBoosters') === null) {
        localStorage.setItem('myBoosters', JSON.stringify([]));
    } else {
        myBstr = JSON.parse(localStorage.getItem('myBoosters'));
    }
    // id: nbr:
    if(myBstr.length === 0){
        alert("you don't have any boosters, try store!");
    }else{
        myBstr.forEach(b =>{
            let div = document.createElement("div");
            let h1 = document.createElement("h1");
            let img = document.createElement("img");

            div.className = "h-[7em] text-center";
            // img.className = "h-[7em]";
            img.src = boosters[b.id].pathImg;
            h1.textContent = `${b.nbr}`
            
            div.append(img);
            div.append(h1);
            divCntBstr.append(div);
        })
    }



}

showBstrs();