const btnClose = document.querySelector('#btn-close');
const btnLeft = document.querySelector('#btn-left');
const btnRigth = document.querySelector('#btn-rigth');

const image = document.querySelectorAll('.galery img');
const lightbox = document.querySelector('#principal_Container');

const imageActive = document.querySelector('#image_active');
let indexImage = 0;

const openLivebox = (event) =>{
    imageActive.src = event?.target.src;
    lightbox.style.display = 'flex';
    indexImage = Array.from(image).indexOf(event.target)
}

image.forEach((image)=>{
    image.addEventListener('click', openLivebox)
})

btnClose?.addEventListener('click', ()=>{
    lightbox.style.display = 'none';
})

const avanceImage = ()=>{
    if(indexImage === image.length -1){
        indexImage = -1;
    }

    imageActive.src = image[indexImage + 1].src;
    indexImage++;
}

btnRigth?.addEventListener('click', avanceImage)


const returnImage = ()=>{
    if(indexImage === 0){
        indexImage = image.length;
    }
    imageActive.src = image[indexImage - 1].src;
    indexImage--;
}

btnLeft?.addEventListener('click', returnImage)