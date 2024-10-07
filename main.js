const swiper = new Swiper('.swiper-container', {
  direction: 'horizontal',
  slidesPerView: 1,
  spaceBetween: 0,
  loop: false,
  allowTouchMove: true,
  centeredSlides: true,
  on: {
    slideChangeTransitionEnd: function() {
      swiper.update();
    }
  }
});

let answer1 = '';
let answer2 = '';
let answer3 = '';

function selectAnswer1(answer) {
  answer1 = answer;
  nextSlide();
}

function selectAnswer2(answer) {
  answer2 = answer;
  nextSlide();
}

function selectAnswer3(answer) {
  answer3 = answer;
  showLoadingScreen();
}

function nextSlide() {
  swiper.slideNext();
}

function showLoadingScreen() {
  swiper.slideNext();
  setTimeout(() => {
    showProductRecommendation();
    swiper.slideNext();
  }, 1500);
}

function showProductRecommendation() {
  let recommendedProductImage = '';
  if (answer3 === '편리함' || answer3 === '포이컵') {
    recommendedProductImage = 'https://oiisa.com/web/product/small/202405/68928d185e039a2bb0f9ab99c1db9331.png';
  } else if (answer3 === '벨') {
    recommendedProductImage = 'https://raw.githubusercontent.com/oiisadev/image_forder/e8151879f676e40880ae2e0fd831143c5b0c3968/assets/images/IMG_6819.JPG';
  }
  document.getElementById('recommended-product-image').src = recommendedProductImage;
}
