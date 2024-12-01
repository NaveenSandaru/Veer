const galleryContainer = document.querySelector(".gallery-container-1");
const galleryItems = document.querySelectorAll(".gallery-item-first");

const galleryContainer2 = document.querySelector(".gallery-container-2");
const galleryItems2 = document.querySelectorAll(".gallery-item-second");

const galleryContainer3 = document.querySelector(".gallery-container-3");
const galleryItems3 = document.querySelectorAll(".gallery-item-third");

const galleryContainer4 = document.querySelector(".gallery-container-4");
const galleryItems4 = document.querySelectorAll(".gallery-item-fourth");

const galleryContainer5 = document.querySelector(".gallery-container-5");
const galleryItems5 = document.querySelectorAll(".gallery-item-fifth");

class Carousel {
  constructor(container, items) {
    this.carouselContainer = container;
    this.carouselArray = [...items];
  }

  updateGallery() {
    this.carouselArray.forEach((el) => {
      el.classList.remove("gallery-item-1");
      el.classList.remove("gallery-item-2");
      el.classList.remove("gallery-item-3");
      el.classList.remove("gallery-item-4");
      el.classList.remove("gallery-item-5");
      el.classList.remove("gallery-item-6");
      el.classList.remove("gallery-item-7");
    });

    this.carouselArray.slice(0, 7).forEach((e1, i) => {
      e1.classList.add(`gallery-item-${i + 1}`);
    });
  }

  animateCarousel() {
    setInterval(() => {
      this.carouselArray.push(this.carouselArray.shift());
      this.updateGallery();
    }, 3000); // change the interval time to adjust the animation speed
  }
}

const exampleCarousel = new Carousel(galleryContainer, galleryItems);
exampleCarousel.animateCarousel();

const exampleCarousel2 = new Carousel(galleryContainer2, galleryItems2);
exampleCarousel2.animateCarousel();

const exampleCarousel3 = new Carousel(galleryContainer3, galleryItems3);
exampleCarousel3.animateCarousel();

const exampleCarousel4 = new Carousel(galleryContainer4, galleryItems4);
exampleCarousel4.animateCarousel();

const exampleCarousel5 = new Carousel(galleryContainer5, galleryItems5);
exampleCarousel5.animateCarousel();
