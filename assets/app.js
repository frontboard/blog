// 1. Show header on scroll
// 2. Hamburger menu dropdown
// 3. Newsletter validation

// 1. Show header on scroll
const header = {
  target: document.querySelector('.header'),
  scrollUpClass: 'header__scroll-up',
  scrollDownClass: 'header__scroll-down',

  lastScroll: 0,

  show: () => {
    header.target.classList.remove(header.scrollDownClass);
    header.target.classList.add(header.scrollUpClass);
  },

  hide: () => {
    header.target.classList.remove(header.scrollUpClass);
    header.target.classList.add(header.scrollDownClass);
  },

  scrollMonitor: () => {
    let currentScroll = window.pageYOffset;

    if (currentScroll <= 0) {
      header.target.classList.remove(header.scrollUpClass);
      return;
    }

    if (currentScroll > header.lastScroll) {
      // scroll down
      header.hide();
    } else if (currentScroll < header.lastScroll) {
      // scroll up
      header.show();
    }

    header.lastScroll = currentScroll;
  },
};

window.addEventListener('scroll', () => header.scrollMonitor());

// 2. Hamburger menu dropdown
const menu = {
  hamburger: document.querySelector('#nav-toggler'),
  header: document.querySelector('header.header'),
  triggers: document.querySelectorAll('.trigger'),

  toggleMenu: () => {
    if (menu.hamburger.checked) {
      // on open
      menu.header.classList.add('header__opened');
      menu.triggers.forEach((el) => el.classList.add('trigger__open'));
    } else {
      // on close
      menu.header.classList.remove('header__opened');
      menu.triggers.forEach((el) => el.classList.remove('trigger__open'));
    }
  },
};

menu.hamburger.addEventListener('input', () => menu.toggleMenu());

// 3. Newsletter validation
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

if (newsletter.button) {
  newsletter.button.addEventListener('click', (event) => newsletter.validate(event));
}