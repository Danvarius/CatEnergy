var navWrapper = document.querySelector('.page-header__wrapper');
var navButton = document.querySelector('.page-header__menu');
var navMain = document.querySelector('.main-nav');

navWrapper.classList.remove('page-header__wrapper--nojs');
navMain.classList.remove('js-no');

navButton.addEventListener('click', function() {
   if (navButton.classList.contains('page-header__menu--closed')) {
      navButton.classList.remove('page-header__menu--closed');
      navMain.classList.add('no-nav');
      navButton.classList.add('page-header__menu--opened');
   } else {
      navButton.classList.add('page-header__menu--closed');
      navMain.classList.remove('no-nav');
      navButton.classList.remove('page-header__menu--opened');
   }
});

