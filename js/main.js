// Затемнение хедера при скролле
window.onscroll = function showHeader() {

    var header = document.querySelector('.header');

    if (window.pageYOffset > 1) {
        header.classList.add('active')
    } else {
        header.classList.remove('active')
    }

}
// Слайдер(Slider)
var swiper1 = new Swiper('.slider-swiper', {
    slidesPerView: 1,
    breakpoints: {
        1600: {
            slidesPerView: 4,
        },
        992: {
            slidesPerView: 3,
        },
        768: {
            slidesPerView: 2,
        },
    },
    spaceBetween: 30,
    speed: 500,
    pagination: {
        el: '.swiper-pagination',
    },
    loop: true,
    navigation: {
        nextEl: '.swiper-arrow-next',
        prevEl: '.swiper-arrow-prev',
    },
    simulateTouch: false
});
// Слайдер(Instagram)
var swiper1 = new Swiper('.instagram-swiper', {
    slidesPerView: 2,
    autoplay: {
        delay: 3500,
    },
    breakpoints: {
        992: {
            slidesPerView: 6,
        },
        768: {
            slidesPerView: 4,
        },
    },
    spaceBetween: 0,
    loop: true,
});
// Меню и бургер для телефонов
$(document).ready(function () {
    $(".header__burger").click(function (e) {
        $(".header__burger, .menu").toggleClass("active");
        $("body").toggleClass('lock');
    });
    $(".menu__item").click(function (e) {
        $(".header__burger").removeClass("active");
        $(".menu").removeClass("active");
        $("body").removeClass("lock");
    });
});