$('.menu-media').click(function() {
    $(this).toggleClass('menu-media--active');
    $('.menu-open').toggleClass('menu-open--active');
});

const swiper = new Swiper('.swiper-container', {
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