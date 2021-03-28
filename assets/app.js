const header = document.querySelector('.header');

const isHeaderSticky = () => {
  if (window.pageYOffset > 0) {
    header.classList.add('header__isSticky');
  } else {
    header.classList.remove('header__isSticky');
  }
  console.log(`window: ${window.pageYOffset} / header: ${header.offsetTop}`);
};

window.addEventListener('scroll', isHeaderSticky);
