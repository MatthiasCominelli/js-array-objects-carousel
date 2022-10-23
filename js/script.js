// Milestone 1:
// Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.
// Al click dell'utente sulle frecce verso sinistra o destra, l'immagine attiva diventerà visibile e dovremo aggiungervi
// titolo e testo.
const images = 
[
    {
        url: 'http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg',
        title: 'Svezia',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
    {
        url: 'https://static1.evcdn.net/images/reduction/1513757_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Perù',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
    {
        url: 'https://img.itinari.com/pages/images/original/0d3ed180-d22d-48e8-84df-19c4d888b41f-62-crop.jpg?ch=DPR&dpr=2.625&w=1600&s=7ebd4b5a9e045f41b4e0c7c75d298d6c',
        title: 'Chile',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
    {
        url: 'https://static1.evcdn.net/images/reduction/1583177_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Argentina',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
    {
        url: 'https://cdn.sanity.io/images/24oxpx4s/prod/ed09eff0362396772ad50ec3bfb728d332eb1c30-3200x2125.jpg?w=1600&h=1063&fit=crop',
        title: 'Colombia',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
];
//console.log(images[2])
const wrapperImages = document.querySelector(`.container`);
let activeImage = 0;
for (let i = 0; i < images.length; i++) 
{
    let activeClass =``;
    if (i == activeImage)
    {
        activeClass = `active`;
    }
    wrapperImages.innerHTML += `<div class="box_img ${activeClass}">
            <img src="${images[i].url}" class="ms_img"
                alt="">
            <div class="box_description">
                <h2>${images[i].title}</h2>
                <p>${images[i].description}</p>
            </div>
        </div>`
 };
 const buttonNext = document.querySelector(`.btn_next`);
 const buttonPrev = document.querySelector(`.btn_prev`);
 const imagesElements = document.querySelectorAll(`div.box_img`)
 console.log(imagesElements)
buttonNext.addEventListener(`click`, function()
{
    const imageActiveTaken = document.querySelector(`div.active`);
    imageActiveTaken.classList.remove(`active`);

     activeImage++;
     if (activeImage === images.length)
     {
        activeImage = 0;
     }
     imagesElements[activeImage].classList.add(`active`);


});

buttonPrev.addEventListener(`click`, function()
{
    imagesElements[activeImage].classList.remove(`active`);
    activeImage--;

    if (activeImage === - 1)
    {
        activeImage = images.length - 1;
    }

    imagesElements[activeImage].classList.add(`active`);
});