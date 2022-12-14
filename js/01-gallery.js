import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector ('.gallery');
const galleryCards = createGalleryItem (galleryItems);
galleryContainer.insertAdjacentHTML(`beforeend`, galleryCards)
galleryContainer.addEventListener ('click', onGalleryContainerClick)

function createGalleryItem (galleryItems) {
    return galleryItems.map(({preview, original, description}) => {
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
        </div>`;
    })
    .join("");
};
console.log(createGalleryItem(galleryItems))

function onGalleryContainerClick (evt) {
    if(!evt.target.classList.contains('gallery__image')) {
        return
    }
    console.log(evt.target)
}

document.querySelector('gallery__item').onclick = () => {
	basicLightbox.create(`
		<img "original">
	`).show()
}


/*



import * as basicLightbox from 'basiclightbox'
const instance = basicLightbox.create(`
    <img src="${original}">
`)
instance.show()*/
