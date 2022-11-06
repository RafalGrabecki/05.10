

const showgreeting =() =>{
    const title= document.getElementById("title");
    
    const date= new Date();
    const hour = date.getHours();
    if( hour <12 && hour >=6) {
       title.textContent ="Dzień Dobry"
    }
    else if (hour >=12 && hour < 18){
        title.textContent= "GoodAfternoon"
    }
    else {
        title.textContent = "Good Evening"
    }
}
showgreeting();

const przycisk = document.getElementById("login");
const subtitle = document.getElementById("subtitle");
const powitanie =() => {
    
    subtitle.textContent=("Witaj Janek");
}
const pozegnanie =() => {

    subtitle.textContent=("Utwórz konto albo się zaloguj");
}

przycisk.addEventListener("click", powitanie);





/* <article class="best-card">
                    <img src="https://i.pravatar.cc/150?img=3" alt="">
                    <h3 class="card-name">John Smith</h3>
                    <button class="card-btn"><i class="bi bi-person"></i>Follow</button>
                    <p>Some quick example text to build on the card title and make up the bulk of the.</p>
                </article> */

// best workers

const workerswrapper=document.getElementById("Workers");

function createWorkerCard(zdjecie,imie,tekst){

    const card = document.createElement("Article");
    card.setAttribute("class","best-card");
    const image = document.createElement("img");
    image.src=zdjecie;
    image.alt =`zdjęcie użytkownika ${imie}`;
    card.appendChild(image);

    const title = document.createElement("h3");   
    title.classList.add("card-name");
    title.textContent=imie;
    card.appendChild(title);

    const btn = document.createElement("button");
    btn.classList.add("card-btn");
    btn.innerHTML =    `<i class="bi bi-person"></i>Follow`
    card.appendChild(btn);

    const p = document.createElement("p");
    p.textContent= tekst;
    card.appendChild(p);


     workerswrapper.appendChild(card);

}
createWorkerCard("https://i.pravatar.cc/150?img=3" , "Marek Marecki" ,"miesiąc czerwiec");
createWorkerCard("https://i.pravatar.cc/150?img=2" , "Maciek Nowak","miesiąc lipiec");
createWorkerCard("https://i.pravatar.cc/150?img=1" , "Magda Kowalska","Miesiąc sierpień");
createWorkerCard("https://i.pravatar.cc/150?img=4" , "Rafał Grabecki","miesiac wrzesień");

/* <div class="pricing" id="cenowe">
            <div class="pricing-wrapper >
                <article class="pricing-card">
                    <span class="text2"><sup>$</sup></span><span class="text">19</span><span class="text3">/Month</span>
                                            <p class="wyrownaj1">Best for higher volume businesses </p>
                                            <p class="wyrownaj1">that need additional features and power.</p>
                                            <p class="wyrownaj">Full Support </p>
                                            <p class="wyrownaj"> No Storage 50 GB</p>
                                            <p class="wyrownaj"> Visitors 400k</p>
                    <button class="card-btn"><i class="bi bi-person"></i>Buy Now</button> */


const cenowewrapper=document.getElementById("cenowe1");


const createcena =() =>{
const card=document.createElement("Article");
card.classList.add("pricing-card");
const span = document.createElement("span");
span.classList.add("text2");
const sup = document.createElement("sup");
sup.classList.add("text2");
sup.textContent= ("$");


card.appendChild(span);
card.appendChild(sup);
const span2 = document.createElement("span");
span2.classList.add("text");
span2.textContent= ("19");
card.appendChild(span2);
const span3 = document.createElement("span");
span3.classList.add("text3");
span3.textContent= ("/Month");
card.appendChild(span3);
const p = document.createElement("p");
p.classList.add("wyrownaj1");
p.textContent= ("Best for higher volume businesses");
card.appendChild(p);
const p1 = document.createElement("p");
p1.classList.add("wyrownaj1");
p1.textContent= ("that need additional features and power.");
card.appendChild(p1);
const p2 = document.createElement("p");
p2.classList.add("wyrownaj");
p2.textContent= ("Full Support");
card.appendChild(p2);
const p3 = document.createElement("p");
p3.classList.add("wyrownaj");
p3.textContent= ("No Storage 50 GB");
card.appendChild(p3);
const p4 = document.createElement("p");
p4.classList.add("wyrownaj");
p4.textContent= ("Visitors 400k");
card.appendChild(p4);





const btn1 = document.createElement("button");
    btn1.classList.add("card-btn");
    btn1.innerHTML = `<i class="bi bi-person"></i>Buy Now`
    card.appendChild(btn1);





cenowewrapper.appendChild(card);
}

createcena();
createcena();
createcena();
createcena();











const username =19;

const info =() =>{

};

const menu = document.getElementById("Menu");
const Hamburgerbtn= document.getElementById("hamburgerbtn");

const klasa =() =>{
    menu.classList.toggle("showmenu");
    // if(menu.classList.contains("showmenu")){
    //     menu.classList.remove("showmenu")
    // }
    // else {
    //     menu.classList.add("showmenu")
    // };
    
};

Hamburgerbtn.addEventListener("click",klasa);


