var urls = [
  'pic/Lenovo.png',
  'pic/Samsung.png',
  'pic/Apple.png',
  'pic/VieewSonic.png',
  'pic/Bosch.png',
  'pic/Hp.png',
  'pic/acer.png',
  'pic/sony.png',
  'pic/Lenovo.png',
  'pic/Samsung.png',
  'pic/Apple.png'
];

var brands = [
  'Lenovo',
  'Samsung',
  'Apple',
  'VieewSonic',
  'Bosch',
  'hp',
  'acer',
  'sony',
  'Lenovo',
  'Samsung',
  'Apple'
];

var showButton = document.querySelector(".show-all");
var swiperTemplate = document.querySelector("#swiper-template").content;
var swiper__main = document.querySelector('.swiper__main');
var swiperContainer = document.querySelector('.swiper');
var shadow = document.querySelector('.swiper-shadow');

//content fill
var createElement = function(brand,url) {
  var swiper__element = swiperTemplate.querySelector('.swiper__element');
  swiper__element.children[0].alt = brand;
  swiper__element.children[0].src = url;
  return swiper__element;
};

for (var i = 0; i < urls.length; i++) {
  var newElement = createElement(brands[i],urls[i]);
  var clonedElement = newElement.cloneNode(true);
  swiper__main.appendChild(clonedElement);
};

//click event
showButton.children[0].src = 'ic/expand.svg';
showButton.children[1].textContent = 'Показать всё';

var countClick = 1;
var clickOn = function() {
  if (showButton.children[1].textContent === 'Показать всё'){
    countClick = 1;
  };
  countClick++;
  return countClick;
};

showButton.addEventListener('click', function(){
  var clickTrue = clickOn();
  if (clickTrue % 2 === 0) {
    showButton.children[0].src = 'ic/expandClose.svg';
    showButton.children[1].textContent = 'Скрыть';
    swiper__main.classList.add('swiper__main_height-fit-content');
  } else {
    showButton.children[0].src = 'ic/expand.svg';
    showButton.children[1].textContent = 'Показать всё';
    swiper__main.classList.remove('swiper__main_height-fit-content');
    swiper__main.classList.add('swiper__main_laptop');
  }
})

//create pagination
var paginationEl = document.createElement('div');
paginationEl.className = 'swiper-pagination';
paginationEl.classList.add('pagination_style');
swiperContainer.appendChild(paginationEl);

//swiper function
var init = false;
var swiper;
function swiperChange() {
  if (window.innerWidth <= 768) {
    if (!init) {
      init = true;
      swiper = new Swiper(".swiper", {
        slidesPerView: "auto",
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      });
    }
  } else if (init) {
    swiper.destroy();
    init = false;
  }
}

//defolt setings
var windowWidth = window.innerWidth;
if (windowWidth < 768) {
  swiperChange();
  swiper__main.classList.add('swiper__main_mob');
  showButton.classList.add('show-all_display-none');
  swiperContainer.classList.add('swiper__container_mob');
  shadow.classList.remove('swiper-shadow_display-none');
}
if (windowWidth >= 768) {
  swiperChange();
  shadow.classList.add('swiper-shadow_display-none');
  showButton.children[0].src = showButton.children[0].src;
  showButton.children[1].textContent = showButton.children[1].textContent;
  swiper__main.classList.add('swiper__main_laptop');
}

// resise event
window.addEventListener('resize', function() {
 windowWidth = window.innerWidth;
 if (windowWidth < 768) {
  swiperChange();
  shadow.classList.remove('swiper-shadow_display-none');
  swiperContainer.classList.add('swiper__container_mob');
  swiper__main.classList.add('swiper__main_mob');
  showButton.classList.add('show-all_display-none');
  swiper__main.classList.remove('swiper__main_height-fit-content');
  swiper__main.classList.remove('swiper__main_laptop');
 }

 if (windowWidth >= 768) {
  swiperChange();
  shadow.classList.add('swiper-shadow_display-none');
  swiperContainer.classList.remove('swiper__container_mob');
  showButton.children[0].src = showButton.children[0].src;
  showButton.children[1].textContent = showButton.children[1].textContent;
  swiper__main.classList.add('swiper__main_laptop');
  swiper__main.classList.remove('swiper__main_mob');
  showButton.classList.remove('show-all_display-none');
   if (showButton.children[1].textContent === 'Скрыть') {
    swiper__main.classList.add('swiper__main_height-fit-content');
   }
}
});





