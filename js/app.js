const hamburger = document.querySelector('.hamburger');
const header = document.querySelector('.header');
const close = document.querySelector('.close');
const mySlides = document.querySelectorAll('.mySlides');
const firstSlide = document.getElementById('first-slide');
const secondSlide = document.getElementById('second-slide');
const thirdSlide = document.getElementById('third-slide');
const leftAngle = document.querySelector('.left');
const rightAngle = document.querySelector('.right');

leftAngle.addEventListener('click', prev);
rightAngle.addEventListener('click', next);

var i = 0;

function next() {
  if (i < mySlides.length - 1) {
    i++;
  }
  return showSlide();
}

function prev() {
  if (i >= mySlides.length - 2) {
    i--;
  }
  return showSlide();
}

function showSlide() {
  if (i === 0) {
    mySlides[0].style.display = 'flex';
    mySlides[1].style.display = 'none';
    mySlides[2].style.display = 'none';
  }
  if (i === 1) {
    mySlides[0].style.display = 'none';
    mySlides[1].style.display = 'flex';
    mySlides[2].style.display = 'none';
  }
  if (i === 2) {
    mySlides[0].style.display = 'none';
    mySlides[1].style.display = 'none';
    mySlides[2].style.display = 'flex';
  }
}

hamburger.addEventListener('click', addActiveClass);

function addActiveClass() {
  if (header.classList.contains('not-active')) {
    header.classList.remove('not-active');
    header.classList.add('active');
  }
}

close.addEventListener('click', removeActiveClass);

function removeActiveClass() {
  if (header.classList.contains('active')) {
    header.classList.remove('active');
    header.classList.add('not-active');
  }
}
