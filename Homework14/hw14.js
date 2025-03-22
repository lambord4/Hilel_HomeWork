const slides = document.querySelectorAll('.slide');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const dotsContainer = document.querySelector('.dots');

let current = 0;
const Max = 4

slides.forEach((slide, index) => {             //Создал дотс с индексами
    const dot = document.createElement('span');
    dot.classList.add('dot');
    dot.dataset.index = index; 
    if (index === 0) dot.classList.add('active'); 
    dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll('.dot');

function currentChecker (current) {            //Создал функцию для проверки текущего индекса
    if (current === 0) {
        prev.style.visibility = 'hidden';
    } else {
        prev.style.visibility = 'visible';
    }
    
    if ( current === Max) {
        next.style.visibility = 'hidden';
    } else {
        next.style.visibility = 'visible';
    }
};


currentChecker(current);                       //Проверяю текущий индекс при запуске страницы

function showSlide(index) {          
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    slides[index].classList.add('active');
    dots[index].classList.add('active');

    current = index;
};

prev.addEventListener('click', () => {      //Нажатие на кнопку назад
  current = (current - 1 + slides.length) % slides.length;
  showSlide(current);
  currentChecker(current);
});

next.addEventListener('click', () => {     //Нажатие на кнопку вперед
  current = (current + 1) % slides.length;
  showSlide(current);
  currentChecker(current);
});

dotsContainer.addEventListener('click', (event) => {     //Обработчик клика по точкам
    if (event.target.classList.contains('dot')) {
      current = parseInt(event.target.dataset.index);
      showSlide(current);
      currentChecker(current);
    }
  });



