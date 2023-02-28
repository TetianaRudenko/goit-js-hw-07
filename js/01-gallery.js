import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');
const gallaryMarkup = createGallaryMarkup(galleryItems); 

galleryContainer.insertAdjacentHTML('beforeend', gallaryMarkup);

galleryContainer.addEventListener('click', onGallaryContainerClick);

function createGallaryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original,description }) => {
      return `
      <div class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </div>
    `;
    })
    .join('');
}

const instance = basicLightbox.create(`<img width="100%" height="100vh" src="">`, {onShow: (instance) => {window.addEventListener('keydown', onEscPress)},
  onClose: (instance) => { window.removeEventListener('keydown', onEscPress) }
});

function onGallaryContainerClick(evt) {
  evt.preventDefault()
  instance.element().querySelector('img').src = evt.target.dataset.source;
  instance.show(); 

}

function onEscPress(evt) {
 if(evt.code === "Escape") {
  instance.close();
 }
}



console.log(galleryItems);