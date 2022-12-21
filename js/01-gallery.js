import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector ('.gallery');
const galleryCards = createGalleryItem (galleryItems);
galleryContainer.insertAdjacentHTML(`beforeend`, galleryCards)
galleryContainer.addEventListener(`click`, getRightClick)

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

function getRightClick (e) {
    e.preventDefault();
    if (!e.target.classList.contains("gallery__image")) {
        return
    }
    const instance = basicLightbox.create(
        `<img src="${e.target.dataset.source}" width="800" height="600"/>   
        `,)
    instance.show();

    galleryContainer.addEventListener("keydown", (e) => {
        if (e.code === "Escape") {
            instance.close();
          }
    })
}
