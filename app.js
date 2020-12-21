const navSlide = () => {
  const burger = document.querySelector('.nav__toggle');
  const nav = document.querySelector('.nav__list');
  const navLinks = document.querySelectorAll('.nav__list li');

  burger.addEventListener('click', () => {
    nav.classList.toggle('nav__list-active');

    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = '';
      } else {
        link.style.animation = `navLinkFade 0.3s ease forwards ${
          index / 7 + 0.5
        }s`;
      }
    });
  });
};



const app = () => {
  navSlide();
};

app();