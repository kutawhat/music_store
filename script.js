"use strict"

//Слайдер - Началo
const slide = document.querySelector('.kit_slides_wrapper');
const slideProduct = document.querySelectorAll('.kit_slides_wrapper div.kit_slide')

//кнопки 
const prev = document.querySelector('#prev');
const next = document.querySelector('#next');

//счетчик 
let counter = 1;
const size = slideProduct[0].clientWidth;

slide.style.transform = 'translateX(' + (-size * counter) + 'px)';

next.addEventListener('click', function () {
    if (counter >= slideProduct.length - 1) return;
    slide.style.transition = "transform 0.5s ease-in-out";
    counter++;
    slide.style.transform = 'translateX(' + (-size * counter) + 'px)';
})

prev.addEventListener('click', function () {
    if (counter <= 0) return;
    slide.style.transition = "transform 0.5s ease-in-out";
    counter--;
    slide.style.transform = 'translateX(' + (-size * counter) + 'px)';
})

slide.addEventListener('transitionend', function(){
    if (slideProduct[counter].id === 'lastClone') {
        slide.style.transition = "none";
        counter = slideProduct.length - 2;
        slide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
    if (slideProduct[counter].id === 'firstClone') {
        slide.style.transition = "none";
        counter = slideProduct.length - counter;
        slide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
})
//Слайдер - Конец

//Прокрутка - Начало
const progress = document.querySelector('.progress');

window.addEventListener('scroll', function () {
    console.log('gh')
    let wScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let wHeight = this.document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let per = wScroll / wHeight * 100;

    progress.style.width = per + '%';
})
//Прокрутка - Конец

//Up кнопка - Начало
const up = document.body.querySelector(".arrow-cont");

window.addEventListener("scroll", function () {
    if (window.pageYOffset > 800) {
        up.classList.add("active");
    }
    else {
        up.classList.remove("active");
    }
})

up.addEventListener('click', function () {
    window.scrollTo(0, 0);
})
//Up кнопка - Конец

//Корзина - Начало
 let counter1 = 0; 
 function countClicks() { 
 counter1++; 
 document.getElementById("count").innerHTML = counter; 
 };
//Корзина - Конец

//Шапка - Начало
    
//Шапка - Конец


//Форма - Начало

//Форма - Конец