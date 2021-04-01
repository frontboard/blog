// Sticky header
const header = document.querySelector('.header');

const isHeaderSticky = () => {
  if (window.pageYOffset > 0) {
    header.classList.add('header__isSticky');
  } else {
    header.classList.remove('header__isSticky');
  }
};

window.addEventListener('scroll', isHeaderSticky);

// Menu dropdown on click
const hamburgerMenu = document.querySelector('#nav-toggler');

const toggleMenu = () => {
  if (hamburgerMenu.checked) {
    document.querySelector('header.header').classList.add('header__opened');
    document.querySelectorAll('.trigger').forEach((el) => el.classList.add('trigger__open'));
  } else {
    document.querySelector('header.header').classList.remove('header__opened');
    document.querySelectorAll('.trigger').forEach((el) => el.classList.remove('trigger__open'));
  }
};

hamburgerMenu.addEventListener('input', toggleMenu);