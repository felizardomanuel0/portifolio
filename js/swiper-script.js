$(function () {
    var swiper = new Swiper('.swiper-carousel', {
        autoplay: {
            delay: 3000
        },
        initialSlide : 1,   
        speed: 2000,
        slidesPerView: 2,
        slidesPerGroup: 1,
        spaceBetween: 30,
        loop: true,
        breakpoints: {
            // when window width is >= 360px
            360: {
                slidesPerView: 1,
            },
            // when window width is >= 768px
            768: {
                slidesPerView: 1,
            },
            // when window width is >= 1024px
            1024: {
                slidesPerView:2,
            }
        },
        // If we need pagination
        pagination: {
            enabled: true,
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
    });

});