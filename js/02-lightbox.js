import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');
const gallaryMarkup = createGallaryMarkup(galleryItems); 

galleryContainer.insertAdjacentHTML('beforeend', gallaryMarkup);

function createGallaryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
    <a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>
    `}).join("");
  }

let lightbox = new SimpleLightbox('.gallery a', { caption: true, captionSelector: 'img[alt]', captionType: 'attr', captionsData: 'alt', captionPosition: 'bottom', captionDelay: 250 }); 

console.log(galleryItems);

