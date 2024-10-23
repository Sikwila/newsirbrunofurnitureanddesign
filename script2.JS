document.addEventListener('DOMContentLoaded', function() {
  const prevButton = document.querySelector('.prev');
  const nextButton = document.querySelector('.next');
  const slides = document.querySelector('.carousel-slide');
  const totalSlides = slides.children.length;
  let currentIndex = 0;

  function showSlide(index) {
      if (index >= totalSlides) currentIndex = 0;
      else if (index < 0) currentIndex = totalSlides - 1;
      else currentIndex = index;

      const offset = -currentIndex * 100;
      slides.style.transform = `translateX(${offset}%)`;
  }

  nextButton.addEventListener('click', function() {
      showSlide(currentIndex + 1);
  });

  prevButton.addEventListener('click', function() {
      showSlide(currentIndex - 1);
  });

  showSlide(currentIndex); 
});


document.addEventListener('DOMContentLoaded', function () {
  const readMoreLinks = document.querySelectorAll('.read-more-link');

  readMoreLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const targetId = link.getAttribute('data-target');
      const extendedText = document.getElementById(targetId);

      extendedText.style.display = extendedText.style.display === 'block' ? 'none' : 'block';
      link.textContent = extendedText.style.display === 'block' ? 'Read Less' : 'Read More';
    });
  });
});


  
