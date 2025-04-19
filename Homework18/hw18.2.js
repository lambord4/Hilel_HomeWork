/*
Реалізувати слайдер
Змінювати кожні 3 секунди зображення (масив з 5+ зображень)
Реалізувати переключення по стрілках (вперед/назад). 
Слайдер має працювати циклічно: при досягненні останнього зображення і при кліці на стрілку “вперед” - показувати перше зображення
Слайдер пишемо самі, варіанти з інтернету - не використовуємо
Анімація та інші ефекти - за бажанням
*/


const images = [
    "./img/1.jpg",
    "./img/2.jpg",
    "./img/3.jpg",
    "./img/4.jpg",
    "./img/5.jpg",
  ];
  
  let currentIndex = 0;
  const slide = document.getElementById("slide");
  
  function showSlide(index) {
    slide.src = images[index];
  }
  
  function nextSlide() {
    currentIndex = (currentIndex + 1) % images.length;
    showSlide(currentIndex);
  }
  
  function prevSlide() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showSlide(currentIndex);
  }

  let sliderTimer = setInterval(nextSlide, 3000);
  
  document.getElementById("next").addEventListener("click", () => {
    nextSlide();
    resetSlider();
  });
  document.getElementById("prev").addEventListener("click", () => {
    prevSlide();
    resetSlider();
  });
  
  function resetSlider() {
    clearInterval(sliderTimer);
    sliderTimer = setInterval(nextSlide, 3000);
  }
  
  showSlide(currentIndex);
  