
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

// seleziono i bottoni
const nextEl = document.getElementById('next');
nextEl.addEventListener('click', function () {
   console.log('clicked');

   // seleziono le slide
   const slideImagesElements = document.querySelectorAll('.slider > .images > img')

   // seleziono la slide attuale
   const currentSlide = slideImagesElements[activeImg];

   // rimuovo la classe active 
   currentSlide.classList.remove('active');

   // incremento la variabile dell'img active
   activeImg++;

   // verifica per il tato next per lo scroll infinito
   if (activeImg == images.length) {
      activeImg = 0;
   }

   //seleziono la prossima slide 
   const nextImage = slideImagesElements[activeImg];

   // applico la classe active
   nextImage.classList.add('active');
})

const prevEl = document.getElementById('prev');
prevEl.addEventListener('click', function () {
   console.log('clicked');

   // seleziono le slide
   const slideImagesElements = document.querySelectorAll('.slider > .images > img')

   // seleziono la slide attuale
   const currentSlide = slideImagesElements[activeImg];

   // rimuovo la classe active 
   currentSlide.classList.remove('active');

   // incremento la variabile dell'img active
   activeImg--;

   // verifica per il tato prev per lo scroll infinito
   if (activeImg == -1) {
      activeImg = images.length - 1;
   }

   //seleziono la prossima slide 
   const prevImage = slideImagesElements[activeImg];

   // applico la classe active
   prevImage.classList.add('active');

})
