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

    slide.innerHTML += `<img src="${imgArray[i]}" class="hidden carouselImg"></img>`;
    console.log ("slide");
    
}