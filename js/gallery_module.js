//filter
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


//up_Btn
const scrollToTopButton = document.getElementById('scrollToTopButton');
const footer = document.getElementById('myFooter');

window.addEventListener('scroll', () => {
    if (window.scrollY > window.innerHeight) {
        scrollToTopButton.style.display = 'block';
    } else {
        scrollToTopButton.style.display = 'none';
    }

    // Скрыть кнопку при прокрутке до футера
    if (window.scrollY + window.innerHeight >= footer.offsetTop) {
        scrollToTopButton.style.display = 'none';
    }
});

scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});


