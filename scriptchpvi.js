const carouselTrack = document.querySelector('.carouselpista');
  const carouselItems = document.querySelectorAll('.carouselithen');

  let currentIndex = 0;

  function nextSlide() {
      currentIndex = (currentIndex + 1) % carouselItems.length;
      updateCarousel();
  }

  function updateCarousel() {
      const translateValue = -currentIndex * 100 + '%';
      carouselTrack.style.transform = 'translateX(' + translateValue + ')';
  }

  setInterval(nextSlide, 5000); // Cambia la imagen cada 3 segundos (3000 milisegundos)