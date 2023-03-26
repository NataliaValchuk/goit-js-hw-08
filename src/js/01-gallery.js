import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items.js';

const gallery = document.querySelector('.gallery');

const createGalleryItem = ({ preview, original, description }) => `
  <li class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}" />
    </a>
  </li>
`;

const renderGallery = () => {
  const galleryMarkup = galleryItems
    .map(item => createGalleryItem(item))
    .join('');

  gallery.insertAdjacentHTML('beforeend', galleryMarkup);
};

renderGallery();

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
