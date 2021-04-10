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

var inputWidth = document.querySelector('.about-diffenition__small-range');
var linkOne = document.querySelector('.about-diffenition__link-one');
var linkTwo = document.querySelector('.about-diffenition__link-two');
var imgOne = document.querySelector('.living-example__img');
var imgTwo = document.querySelector('.living-example__img-two');

linkOne.addEventListener('click', function() {
   inputWidth.classList.remove('about-diffenition__small-range--right');
   linkTwo.classList.remove('about-diffenition__border');
   linkOne.classList.add('about-diffenition__border');
   imgTwo.classList.remove('living-example__img-two--on');
   imgOne.classList.remove('living-example__img--off');
});

linkTwo.addEventListener('click', function() {
   inputWidth.classList.add('about-diffenition__small-range--right');
   linkOne.classList.remove('about-diffenition__border');
   linkTwo.classList.add('about-diffenition__border');
   imgTwo.classList.add('living-example__img-two--on');
   imgOne.classList.add('living-example__img--off');
});