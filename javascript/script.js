'use strict';

const navBtns = document.querySelectorAll('.nav__btn');
const navLists = document.querySelectorAll('.nav__list');
const navImgs = document.querySelectorAll('.nav__img');
const hamburger = document.querySelector('.hamburger-menu');
const hamburgerOpen = document.querySelector('.hamburger-menu__open');
const hamburgerClose = document.querySelector('.hamburger-menu__close');
const hamburgerList = document.querySelector('.hamburger-list');

const showList = function() {
    hideLists(this);
    const navImg = this.querySelector('.nav__img');
    const navList = this.querySelector('.nav__list');

    navImg.classList.contains('nav__img--active') ?
        navImg.classList.remove('nav__img--active') :
        navImg.classList.add('nav__img--active');

    navList.classList.contains('nav__list--active') ?
        navList.classList.remove('nav__list--active') :
        navList.classList.add('nav__list--active');
};

const hideLists = function(currentNav) {
    navBtns.forEach(nav => {
        if (nav !== currentNav) {
            const navImg = nav.querySelector('.nav__img');
            const navList = nav.querySelector('.nav__list');
            navImg.classList.remove('nav__img--active');
            navList.classList.remove('nav__list--active');
        }
    });
};

const watchWindow = function(e) {
    if (!e.target.closest('.nav__btn')) {
        navImgs.forEach(el => el.classList.remove('nav__img--active'));
        navLists.forEach(el => el.classList.remove('nav__list--active'));
    }
};

navBtns.forEach(el => el.addEventListener('click', showList));
window.addEventListener('click', watchWindow);

const handleHamburger = function(e) {
    console.log(hamburger.classList.contains('hamburger-menu--hidden'));

    if (hamburger.classList.contains('hamburger-menu--hidden')) {
        hamburger.classList.remove('hamburger-menu--hidden');
        hamburgerOpen.classList.add('hamburger-list--hidden');
        hamburgerClose.classList.remove('hamburger-list--hidden');
        hamburgerList.classList.remove('hamburger-list--hidden');
    } else {
        hamburger.classList.add('hamburger-menu--hidden');
        hamburgerOpen.classList.remove('hamburger-list--hidden');
        hamburgerClose.classList.add('hamburger-list--hidden');
        hamburgerList.classList.add('hamburger-list--hidden');
    }
};
hamburger.addEventListener('click', handleHamburger);