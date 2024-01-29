// Add imports above this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items.js';

console.log(galleryItems);
document.addEventListener('DOMContentLoaded', () => {
  const gallery = document.querySelector('.gallery');

  function renderGalleryItems() {
    galleryItems.forEach((item) => {
      const listItem = document.createElement('li');
      listItem.classList.add('gallery__item');

      const link = document.createElement('a');
      link.classList.add('gallery__link');
      link.href = item.original;

      const image = document.createElement('img');
      image.classList.add('gallery__image');
      image.src = item.preview;
      image.alt = item.description;

      link.appendChild(image);
      listItem.appendChild(link);
      gallery.appendChild(listItem);
    });
  }

  // Initialize SimpleLightbox

  renderGalleryItems();
  const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
    captionPosition: 'bottom',
  });

  lightbox.show();
});