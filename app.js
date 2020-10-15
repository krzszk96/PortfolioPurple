const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');
const burgerLine = document.querySelectorAll('.hamburger .line');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  burgerLine.forEach(line => {
    line.classList.toggle('toggle');
  })
});