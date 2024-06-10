//far funzionare il carosello 

// inserire contenuti carosello 
//dati carosello 

const imgArray = ["img/01.webp", 
 "img/02.webp", 
 "img/03.webp",
 "img/04.webp",
 "img/05.webp"];

 //identifichiamo il contenitore

 const slide = document.querySelector(".slide");


 // creiamo il ciclo per le img 

 for (let i=0; i<imgArray.length; i++) {

    ImgItem = imgArray[i]

    //Inseriamo l'elemento nel contenitore 

    slide.innerHTML += `<img src="${imgArray[i]}" class="hidden caroselloImg"></img>`;
    console.log ("slide");
    
}

//selezioniamo tutti gli elementi img in pagima 

const allImgs = document.querySelectorAll(".caroselloImg");
allImgs[0].classList.toggle("hidden");



// selezioniamo i bottoni
const indietroBtn = document.querySelector("#indietro");
const avantiBtn = document.querySelector("#avanti");
let index = 0;
//indietroBtn.style.display = "none";


//gestiamo il click su indietro
indietroBtn.addEventListener("click", function(){

    if (index >0) {

        allImgs[Index].classList.toggle("hidden");
        index--;
        allImgs[index].classList.toggle("hidden");

    }

    if (index == 0) {

        indietroBtn.style.display = "none";

    }

    avantiBtn.style.display= "block";

});

//gestiamo il click su avanti 

avantiBtn.addEventListener("click", function(){

    if (index < ImgItem.length -1) {

        allImgs[index].classList.toggle("hidden");
        index++;
        allImgs[index].classList.toggle("hidden");

    }

    
    if (index == (ImgItem.length -1)) {

        nextBtn.style.display = "none";

    }
    
    indietroBtn.style.display= "block";

});