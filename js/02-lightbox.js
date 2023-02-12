import { galleryItems } from './gallery-items.js';

const galleryEl = document.querySelector(`.gallery`)

const createMarkup = galleryItems.map(
    ({preview, original, description}) => {
        return `
        <a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>`
}
).join(``);
galleryEl.insertAdjacentHTML(`afterbegin`, createMarkup);

galleryEl.addEventListener(`click`, clickOnImage);

function clickOnImage(evt){
    evt.preventDefault();
    if (evt.target.nodeName !== "IMG"){
        return
    }
}
var lightbox = new SimpleLightbox('.gallery a',{
    captionDelay: 250,
    captionsData: "alt", 
  });

console.log(galleryItems);
