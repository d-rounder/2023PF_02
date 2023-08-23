$(document).ready(function(){

  history.scrollRestoration = "auto";



    const $text = document.querySelector(".typing");

    // 글자 모음
    const letters = [
      "@2021",
      "@2022", 
      "@2023"
    ];
    
    // 글자 입력 속도
    const speed = 150;
    let i = 0;
    
    // 타이핑 효과
    const typing = async () => {  
      const letter = letters[i].split("");
      
      while (letter.length) {
        await wait(speed);
        $text.innerHTML += letter.shift(); 
      }
      
      // 잠시 대기
      await wait(900);
      
      // 지우는 효과
      if (letters[i + 1]) remove();
    }
    
    // 글자 지우는 효과
    const remove = async () => {
      const letter = letters[i].split("");
      
      while (letter.length) {
        await wait(speed);
        
        letter.pop();
        $text.innerHTML = letter.join(""); 
      }
      
      // 다음 순서의 글자로 지정, 타이핑 함수 다시 실행
      i = !letters[i+1] ? 0 : i + 1;
      typing();
    }
    
    // 딜레이 기능 ( 마이크로초 )
    function wait(ms) {
      return new Promise(res => setTimeout(res, ms))
    }
    
    // 초기 실행
    setTimeout(typing, 500);









      // 무한 슬라이드 carousel
      const carousel = () => {
        let carouselSlider = document.querySelector('.carousel');
        let list = document.querySelector('.tool');
        let item = document.querySelector('.item');
        let list2;
    
        const speed = .5;
    
        const width = list.offsetWidth;
        let x = 0;
        let x2 = width;
    
        const clone = () => {
            list2 = list.cloneNode(true)
            carouselSlider.appendChild(list2)
            list2.style.left = `${width}px`;
        }
    
        const moveFirst = () => {
            x -= speed;
    
            if(width >= Math.abs(x)){
                list.style.left = `${x}px`
            }else{
                x = width
            }
        }
    
        const moveSecond = () => {
            x2 -= speed;
    
            if(list2.offsetWidth >= Math.abs(x2)){
                list2.style.left = `${x2}px`
            }else{
                x2 = width;
            }
        }
    
        const hover = () => {
            clearInterval(a);
            clearInterval(b);
        }
    
        const unHover = () => {
            a = setInterval(moveFirst, 10)
            b = setInterval(moveSecond, 10)
        }
    
        clone()
    
        let a = setInterval(moveFirst, 10);
        let b = setInterval(moveSecond, 10);
    
        carouselSlider.addEventListener('mouseenter', hover)
        carouselSlider.addEventListener('mouseleave', unHover)
    }
    
    carousel();








//햄버거 버튼
var burger = $('.menu-trigger');

burger.each(function (index) {
  var $this = $(this);

  $this.on('click', function (e) {
    e.preventDefault();
    $(this).toggleClass('active-' + (index + 1));
  })
});

var h = 0;

$('#toggle').click(function() {
  $(this).toggleClass('active');
  $('#fullscreen').toggleClass('open');
 });






});





