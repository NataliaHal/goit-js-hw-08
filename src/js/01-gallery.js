import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const images = document.querySelectorAll('.gallery img');

images.forEach(image => {
  image.addEventListener('click', event => {
    const imageUrl = event.target.src;
    const lightbox = new SimpleLightbox(imageUrl);
    lightbox.open();
  });
});
