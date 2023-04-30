// Add imports above this line
import { galleryItems as items } from './gallery-items';
// Change code below this line

console.log(items);


import SimpleLightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryEl = document.querySelector('.gallery');
galleryEl.innerHTML = markupGallery(items);

const gallery = new SimpleLightbox('.gallery a', {
captionsData: 'alt',
captionDelay: 250,
});

function markupGallery(listItems) {
return listItems
.map(
item => <a class="gallery__item" href="${item.original}"> <img class="gallery__image" src="${item.preview}" alt="${item.description}" /> </a> )
.join('');
}