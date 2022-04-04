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

/*==================== SCROLL REVEAL ANIMATION ====================*/
const sr = ScrollReveal({
  reset: true,
  distance: '60px',
  duration: 1250,
});

//top
sr.reveal(
  `.hero__text , .logo__section-sponsor, .hero__btn , .logo__section-title, .contact__desc`,
  {
    origin: 'top',
    interval: 100,
  }
);

//left with interval
sr.reveal(
  ` .hero__image, .why__section-left , .faq__section-item ,
   .faq-heading, .main-heading, .hero__blog-text,
   .description__section>*, .about__text>*, .blog-content__section>*,
   .privacy-policy__section>* `,
  {
    origin: 'left',
    delay: 200,
    interval: 300,
  }
);

//left
sr.reveal(` .hero__title`, {
  origin: 'left',
});

//right
sr.reveal(
  `.why__section-right , .image__section_text, .box-orange, .box-orange>* `,
  {
    origin: 'right',
    interval: 100,
  }
);

//bottom with interval
sr.reveal(
  `.social-logo>img , .feature__card-color , .feature__card-text , .customer__card>.customer__card-item,
   .row-1>* , .row-2>* , .customer-item, .pricing__section-items>*, .team-members>*, .featured-post-items>*`,
  {
    origin: 'bottom',
    interval: 300,
  }
);

//bottom
sr.reveal(`.contact-form`, {
  origin: 'bottom',
});

ScrollReveal({ distance: '0px', duration: 1250 }).reveal(
  `.image__section , .happy__section, .hero__about, .hero__pricing, h1`,
  {
    delay: 200,
    interval: 100,
  }
);
ScrollReveal({ distance: '0px', duration: 1250 }).reveal(
  `.description__section-img, .hero__blog-img`,
  {
    delay: 500,
    interval: 100,
  }
);
