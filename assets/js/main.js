$('.menu-media').click(function() {
    $(this).toggleClass('menu-media--active');
    $('.menu-open').toggleClass('menu-open--active');
    $('.banners').toggleClass('banners--active');
});
$('.list-item').click(function() {
    $(this).toggleClass('list-item--active');
});
$('.basket-slide').click(function() {
    $(this).toggleClass('basket-slide--active');
});
$('.card').click(function() {
    $('.modal-product').toggleClass('modal--active');
    $('body').toggleClass('body--modal');
});
$('.login').click(function(e) {
    e.preventDefault();
    $('.modal-login').toggleClass('modal--active');
    $('body').toggleClass('body--modal');
});
$('.modal__close').click(function() {
    $(this).parent('.modal').toggleClass('modal--active');
    $('body').toggleClass('body--modal');
});
$('.login__phone').mask('+7 (999) 999-99-99');
const swiper = new Swiper('.banners-slider', {
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        500: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        810: {
            slidesPerView: 3,
            spaceBetween: 20
        },
        1100: {
            slidesPerView: 4,
            spaceBetween: 20,
            navigation: {
                nextEl: '.slider-next',
                prevEl: '.slider-prev',
            },
        }
    }
});
const swiper1 = new Swiper('.basket-slider', {
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        450: {
            slidesPerView: 2,
            spaceBetween: 10
        },
        700: {
            slidesPerView: 3,
            spaceBetween: 10,
            navigation: {
                nextEl: '.basket-slider-next',
                prevEl: '.basket-slider-prev',
            },
        }
    }
});