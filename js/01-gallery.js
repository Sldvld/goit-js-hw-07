import { galleryItems } from './gallery-items.js';

const galleryEl = document.querySelector(`.gallery`);

const createMarkup = galleryItems.map(
    ({preview, original, description}) => {
        return `<div class = "gallery__item">
        <a class="gallery__link" 
            href="${original}">
        <img class="gallery__image"
            src="${preview}"
            alt="${description}"
            data-source="${original}"/>
        </a>
        </div>`
    }).join(``);

galleryEl.insertAdjacentHTML(`afterbegin`, createMarkup);

galleryEl.addEventListener(`click`, clickOnImage)

function clickOnImage(event) {
    event.preventDefault();
    if (event.target.nodeName !== "IMG"){
        return
    }
    const instance = basicLightbox.create(`<img src="${event.target.dataset.source}" width="800" height="600">`,
    {
    onShow: (instance) => {
        window.addEventListener(`keydown`, onCloseModal)
    },
    onClose: (instance) => {
        window.addEventListener(`keydown`, onCloseModal)
    }
});
function onCloseModal(event) {
    if (event.key === 'Escape') {
        instance.close();
    }
}
instance.show()
}

console.log(galleryItems);
