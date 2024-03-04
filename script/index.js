/* 계획 웨이브 메인 배너처럼 중앙에 보이게 */

/* 상단 메인 슬라이드 */
const my_swiper = new Swiper('#projects', { 
    /* autoplay:{delay:3000}, */
    slidesPerView: 2, //슬라이드 한번에 1개씩 보이기
    spaceBetween:0, // 슬라이드 여백
   /*  centeredSlides:true, */ // 슬라이드의 기준을 가운데부터 시작하도록 설정하기
    loop:true,
    pagination:{
        el:'.swiper-pagination'
    },
    navigation:{
        nextEl:'#projects .swiper-button-next',
        prevEl:'#projects .swiper-button-prev',
    },    
})

/* 스크롤 버튼 */

/* 메일문의  */
const mail_inquire = document.querySelector(".mail a")
const mail_contents = document.querySelector(".mail form")
let is_visible = false;
console.log(mail_inquire, mail_contents)


mail_inquire.addEventListener("click",()=>{
    event.preventDefault(); // 기본 동작 방지
    if (is_visible) {
        mail_contents.style.display = "none"// 클릭 시 숨기기
        mail_inquire.querySelector("img").src =  "../images/icon/chevron-up-solid.svg"
    } else {
        mail_inquire.querySelector("img").src =  "../images/icon/chevron-down-solid.svg"
        mail_contents.style.display = "block" // 숨겨진거 보이기
    }
    is_visible = !is_visible; //상태변경
}); 

/* 주소 */
/* 기획 페이지 팝업으로 나오게 만들기  */



/* const button 변수 만들기 */ 

/* button.addEventListener("click", ()=>{
    window.open("coin_charging_page.html", "popup", "width=699,height=1377")
}) */

/* 결과는 a에 링크줘서  */