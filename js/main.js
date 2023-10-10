// swiper
let swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 60,
    effect: '',
    coverflowEffect: {
        rotate: 40,
        slideShadows: false,
    },

    // autoplay: {
    //     delay: 3000,
    //     disableOnInteraction: false,
    // },
    // loop: true,

    grabCursor: true,
    breakpoints: {
        1025: {
            slidesPerView: 3,
        },
        768: {
            slidesPerView: 3,
        },
        345: {
            slidesPerView: 1,
        },
        320: {
            slidesPerView: 1,
        },
        200: {
            slidesPerView: 1,
        }
    },
    pagination: {
        el: '.swiper-pagination', // Селектор контейнера для пагинации
        clickable: true, // Сделать пагинацию кликабельной
    },
});




