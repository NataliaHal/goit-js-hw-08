// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

import SimpleLightbox from "simplelightbox/dist/simple-lightbox.min.js";
import "simplelightbox/dist/simple-lightbox.min.css";

const images = document.querySelectorAll('img');
const lightbox = new SimpleLightbox('.gallery a');

images.forEach(image => {
  image.addEventListener('click', (event) => {
    event.preventDefault();
    lightbox.open({ src: event.target.src });
  });
});c
