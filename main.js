// Swiper 인스턴스 초기화
const swiper = new Swiper('.swiper-container', {
  direction: 'horizontal', // 가로 스와이프
  slidesPerView: 1, // 한 번에 한 슬라이드만 보이게 설정
  spaceBetween: 0, // 슬라이드 간격을 없앰
  loop: false,
  allowTouchMove: true, // 터치로 스와이프 가능
  centeredSlides: true, // 슬라이드가 화면 중앙에 오도록
  on: {
    slideChangeTransitionEnd: function() {
      swiper.update(); // 스와이프 후 화면 비율 고정
    }
  }
});

// 설문조사 답변 변수 초기화
let answer1 = '';
let answer2 = '';
let answer3 = '';

function goToSurveyPage() {
  // 첫 번째 설문 페이지로 슬라이드 이동 (설문조사 1 페이지가 3번째 슬라이드라 가정)
  swiper.slideTo(2); // 슬라이드 인덱스는 0부터 시작하므로 3번째 슬라이드는 인덱스 2입니다.
}


// 설문 답변 저장 및 슬라이드 이동 함수
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
  showLoadingScreen();  // 로딩 화면으로 이동
}

// 슬라이드 이동 함수
function nextSlide() {
  swiper.slideNext();
}

// 로딩 화면 후 제품 추천 함수
function showLoadingScreen() {
  swiper.slideNext();
  setTimeout(() => {
    showProductRecommendation();  // 로딩 후 제품 추천
    swiper.slideNext();
  }, 1500);  // 1.5초 대기 후 이동
}

// 최종 제품 추천 함수
function showProductRecommendation() {
  let recommendedProductImage = '';

  // 선택된 답변에 따라 추천 이미지 변경
  if (answer3 === '편리함' || answer3 === '포이컵') {
    recommendedProductImage = 'https://oiisa.com/web/product/small/202405/68928d185e039a2bb0f9ab99c1db9331.png';
  } else if (answer3 === '벨') {
    recommendedProductImage = 'https://raw.githubusercontent.com/oiisadev/image_forder/e8151879f676e40880ae2e0fd831143c5b0c3968/assets/images/IMG_6819.JPG';
  }

  // 추천 제품 이미지 적용
  document.getElementById('recommended-product-image').src = recommendedProductImage;
}

// 백엔드 서버에서 데이터를 받아와서 화면에 출력하는 함수
fetch('https://onbd-backend.onrender.com/api/hello')
  .then(response => response.json())
  .then(data => {
    console.log(data.message);  // 콘솔에 메시지 출력
    document.getElementById('response').textContent = data.message;  // 화면에 메시지 출력
  })
  .catch(error => {
    console.error('Error fetching data from the backend:', error);
  });
