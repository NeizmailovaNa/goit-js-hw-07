import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryContainer = document.querySelector ('.gallery');
const galleryCards = createGalleryItem (galleryItems);
galleryContainer.insertAdjacentHTML(`beforeend`, galleryCards)

function createGalleryItem (galleryItems) {
    return galleryItems.map(({preview, original, description}) => {
        return `
        <a class="gallery__item" href="${original}">
            <img 
                class="gallery__image" 
                src="${preview}" 
                alt="${description}" 
            />
        </a>`;
    })
    .join("");
};
console.log(galleryItems);

new SimpleLightbox('.gallery a', { 
    captionsData: "alt",
    captionDelay: 250
});
