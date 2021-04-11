// Sticky header
// const header = document.querySelector('.header');

// const isHeaderSticky = () => {
//   if (window.pageYOffset > 0) {
//     header.classList.add('header__isSticky');
//   } else {
//     header.classList.remove('header__isSticky');
//   }
// };
const body = document.body;
// const triggerMenu = document.querySelector(".page-header .trigger-menu");
// const nav = document.querySelector(".page-header nav");
const header = document.querySelector(".header");
const scrollUp = "header__scroll-up";
const scrollDown = "header__scroll-down";
let lastScroll = 0;

// triggerMenu.addEventListener("click", () => {
//   body.classList.toggle("menu-open");
// });

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll <= 0) {
    header.classList.remove(scrollUp);
    return;
  }
  
  if (currentScroll > lastScroll && !header.classList.contains(scrollDown)) {
    // down
    header.classList.remove(scrollUp);
    header.classList.add(scrollDown);
  } else if (currentScroll < lastScroll && header.classList.contains(scrollDown)) {
    // up
    header.classList.remove(scrollDown);
    header.classList.add(scrollUp);
  }
  lastScroll = currentScroll;
});

// window.addEventListener('load', () => {
//   window.addEventListener('scroll', header);
// });

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

// Newsletter validation
const newsletter = {
  button: document.querySelector('#newsletter-submit'),
  error: document.querySelector('.newsletter__error'),
  errorNoPrivacy: 'Zaakceptuj politykę prywatności, aby przejść dalej.',
  errorEmptyField: 'Wypełnij wszystkie pola formularza, aby przejść dalej.',
  errorVisibleClassName: 'newsletter__error-visible',

  throwError: (msg, event) => {
    event.preventDefault();
    newsletter.error.textContent = msg;
    newsletter.error.classList.add(newsletter.errorVisibleClassName);
  },

  validate: (event) => {
    const form = {
      firstname: document.querySelector('#first_name').value,
      email: document.querySelector('#email_address').value,
      checkbox: document.querySelector('#privacy').checked
    };

    if (form.firstname && form.email) {
      if (!form.checkbox) {
        newsletter.throwError(newsletter.errorNoPrivacy, event);
      }
    } else {
        newsletter.throwError(newsletter.errorEmptyField, event);
    }
  },
};

newsletter.button.addEventListener('click', (event) => newsletter.validate(event));