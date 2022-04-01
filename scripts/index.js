// Home Page
// Collapse

const collapse = document.getElementsByClassName('faq__section-collapse');

for (let i = 0; i < collapse.length; i++) {
  collapse[i].addEventListener('click', function () {
    this.classList.toggle('active');
    const content = this.nextElementSibling;
    if (content.style.height === '10rem') {
      content.style.height = 0;
    } else {
      content.style.height = '10rem';
    }
  });
}

//  Nav Menu
const hamburger = document.querySelector('.hamburger');
const navbar = document.querySelector('.navbar');

hamburger.addEventListener('click', mobileMenu);
function mobileMenu() {
  hamburger.classList.toggle('active');
  navbar.classList.toggle('active-navbar');

  if (navbar.classList.contains('active-navbar')) {
    console.log('lock scroll Y');
    document.body.style.overflowY = 'hidden';
  } else {
    document.body.style.overflowY = 'scroll';
  }
}

//Scroll navbar
const navbar_fixed = document.querySelector('.navbar-fixed');
const navbar_menu = document.querySelector('.navbar-menu');
let lastScrollY = window.scrollY;
window.addEventListener('scroll', function () {
  navbar_fixed.classList.toggle('sticky', window.scrollY > lastScrollY);
  navbar_menu.classList.toggle('sticky-menu', window.scrollY > lastScrollY);

  lastScrollY = this.window.scrollY;
});
