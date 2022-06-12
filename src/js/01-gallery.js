// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');
const galleryMarkUp = createGalleryCardMarkUp(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', galleryMarkUp);

new SimpleLightbox('.gallery a', {
  sourceAttr: 'href',
  captionDelay: 250,
  captionPosition: 'bottom',
});

function createGalleryCardMarkUp(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" title = "${description}"/>
    </a>`;
    })
    .join('');
}
