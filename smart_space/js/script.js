const swiper = new Swiper('.slider-main-bloc', {
    // Optional parameters
    loop: true,
    // Navigation arrows
    navigation: {
      nextEl: '.body-main-block__arrow.swiper-button-next',
      prevEl: '.body-main-block__arrow.swiper-button-prev',
    },
  
  
  });

  // TAБЫ //

  // Метод делегирования - отслеживаем нажимание на обьект , реакция на клик
  // Обращаемся ко всему документу и навешиваем прослушку на клик
  // Создаем константы и получаем элемент который мы нажали с опции addEventListener//
  // отсеиваем лишние элементы. узнаем если у нажатого элемента или его родиетля класс tabs-deasl__button
  //и если да - то 








  const tabNavItems = document.querySelectorAll('.tabs-deals__button');
  const tabItems = document.querySelectorAll('.item-tabs');
  document.addEventListener("click", function (e) {
    const targetElement = e.target;
    let curentActiveIndex = null;
    let newActiveIndex = null;
    if (targetElement.closest('.tabs-deals__button')){
      tabNavItems.forEach((tabNavItem, index) => {
        if(tabNavItem.classList.contains('active')){
          curentActiveIndex = index;
          tabNavItem.classList.remove('active');
        }
        if(tabNavItem === targetElement){
          newActiveIndex = index;
        }
      });
      targetElement.classList.add('active');
      tabItems[curentActiveIndex].classList.remove('active');
      tabItems[newActiveIndex].classList.add('active');
    }
  });