'use strict';

let navMain = document.querySelector('.main-nav');
let navToggle = document.querySelector('.main-nav__toggle');
let n

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});

// Функция ymaps.ready() будет вызвана, когда
// загрузятся все компоненты API, а также когда будет готово DOM-дерево.
function init(){
  // Создание карты.
  let myMap = new ymaps.Map("map", {
    // Координаты центра карты.
    // Порядок по умолчанию: «широта, долгота».
    // Чтобы не определять координаты центра карты вручную,
    // воспользуйтесь инструментом Определение координат.
    center: [34.869497, -111.760186],
    // Уровень масштабирования. Допустимые значения:
    // от 0 (весь мир) до 19.
    zoom: 7,
    // Не отображать элементы управления по умолчанию
    controls: []
  });

  let myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
    hintContent: 'Седона',
    balloonContent: 'Ах Седона, городок'
  }, {
    // Опции.
    // Необходимо указать данный тип макета.
    iconLayout: 'default#image',
    // Своё изображение иконки метки.
    iconImageHref: 'img/map-marker.svg',
    // Размеры метки.
    iconImageSize: [27, 27],
  })

  myMap.geoObjects.add(myPlacemark)
}

if (document.location.pathname === '/index.html' ||
    document.location.pathname === '/') {
  ymaps.ready(init);
}
