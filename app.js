const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');
const burgerLine = document.querySelectorAll('.hamburger .line');
const scroll = document.querySelector('.scroll-button');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  burgerLine.forEach(line => {
    line.classList.toggle('toggle');
    line.classList.toggle('open');
  })
});
navLinks.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  burgerLine.forEach(line => {
    line.classList.toggle('toggle');
  })
});

var clicked = false;
scroll.addEventListener('click', () => {
  
  if(clicked){
    window.location.href = '#contact';
  }else{
    window.location.href = '#mywork';
  }
  clicked = !clicked;
});