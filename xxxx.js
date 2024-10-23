// document.addEventListener('DOMContentLoaded', () => {
//   const slides = document.querySelectorAll('.carousel-slide > div');
//   let currentIndex = 0;
//   const totalSlides = slides.length;
//   const intervalTime = 3000; // Time between slide changes (3 seconds)
//   let interval;

//   function showSlide(index) {
//       slides.forEach((slide, i) => {
//           slide.style.display = i === index ? 'flex' : 'none';
//       });
//   }

//   function nextSlide() {
//       currentIndex = (currentIndex + 1) % totalSlides;
//       showSlide(currentIndex);
//   }

//   function prevSlide() {
//       currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
//       showSlide(currentIndex);
//   }

//   document.querySelector('.next2').addEventListener('click', nextSlide);
//   document.querySelector('.prev2').addEventListener('click', prevSlide);

//   function startAutoplay() {
//       interval = setInterval(nextSlide, intervalTime);
//   }

//   function stopAutoplay() {
//       clearInterval(interval);
//   }

//   // Initialize carousel
//   showSlide(currentIndex);
//   startAutoplay();
// });
