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


// form
// слушатель на форму по её айди
document.addEventListener('submit', function (e) {

    let message = `<b>Сообщение с сайта: </b>

        имя: ${this.name.value}
        мобильный телефон: ${this.mobile_phone.value}
        cooбщение: ${this.message.value}
        наличие карты: ${this.has_card.value}`

})
