
const burgerBtn = document.querySelector('.js-toggle-menu');
//const navMobMenu = document.querySelector('.js-menu-mob');

const toggleMenu = () => {
  burgerBtn.classList.toggle('toggle-menu--on');
  //navMobMenu.classList.toggle('main-nav--show');
  document.body.classList.toggle('scrolled');
};


burgerBtn && burgerBtn.addEventListener('click', toggleMenu);