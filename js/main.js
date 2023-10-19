// swiper
// let swiper = new Swiper(".mySwiper", {
//     slidesPerView: 3,
//     spaceBetween: 60,
//     effect: '',
//     coverflowEffect: {
//         rotate: 40,
//         slideShadows: false,
//     },
//
//     // autoplay: {
//     //     delay: 3000,
//     //     disableOnInteraction: false,
//     // },
//     // loop: true,
//
//     grabCursor: true,
//     breakpoints: {
//         1025: {
//             slidesPerView: 3,
//         },
//         768: {
//             slidesPerView: 3,
//         },
//         345: {
//             slidesPerView: 1,
//         },
//         320: {
//             slidesPerView: 1,
//         },
//         200: {
//             slidesPerView: 1,
//         }
//     },
//     pagination: {
//         el: '.swiper-pagination', // Селектор контейнера для пагинации
//         clickable: true, // Сделать пагинацию кликабельной
//     },
// });

//gallery
// Получаем все элементы с классом "car"
const cars = document.querySelectorAll('.car');

// Получаем все элементы с атрибутом "value" внутри элемента с классом "filter"
const filterOptions = document.querySelectorAll('.filter input[name="filter"]');

// Добавляем обработчик события изменения для каждого элемента фильтра
filterOptions.forEach(option => {
    option.addEventListener('change', () => {
        const selectedBrand = option.value; // Получаем значение выбранной марки

        // Перебираем все карточки с автомобилями
        cars.forEach(car => {
            const carBrand = car.getAttribute('data-brand'); // Получаем марку автомобиля из атрибута

            // Если выбрана опция "Все" или марка совпадает с выбранной, показываем карточку, иначе скрываем
            if (selectedBrand === 'all' || selectedBrand === carBrand) {
                car.style.display = 'block';
            } else {
                car.style.display = 'none';
            }
        });
    });
});


const carIcon = document.getElementById('carIcon');
const carList = document.getElementById('carList');

carIcon.addEventListener('click', () => {
    if (carList.style.display === 'none' || carList.style.display === '') {
        carList.style.display = 'block';
    } else {
        carList.style.display = 'none';
    }
});





