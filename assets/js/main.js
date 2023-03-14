
// creo un array con all'interno le immagini da 
const images = [
   "./assets/img/01.webp",
   "./assets/img/02.webp",
   "./assets/img/03.webp",
   "./assets/img/04.webp",
   "./assets/img/05.webp"
];

// seleziono lo slider dal DOM e ricavo l'elemento images
const sliderElementImg = document.querySelector(".slider > .images");

// imposto il cintatore active a 0
let activeImg = 0;

// eseguo un ciclo per il riempimento dello slider e rendo visibile l'immagine
for (let i = 0; i < images.length; i++) {
   const imgSrc = images[i];
   const imageEl = `<img src="${imgSrc}" alt="" class="img-thumbnail border-0 ${i === activeImg ? 'active' : ''}">`;
   console.log(imageEl);

   // insertAdjacentHTML
   sliderElementImg.insertAdjacentHTML('beforeend', imageEl);
}

