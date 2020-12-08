"use strict";
const button = document.getElementsByClassName('header__menu-button')[0];
const menu = document.getElementsByClassName('header__menu')[0];
const link = document.querySelectorAll('.header__menu-link');


button.addEventListener('click', (ev) => {
    button.classList.toggle('active');
    menu.classList.toggle('active');
    link.forEach(el=>{
        el.classList.toggle('mobile');
    })
})

