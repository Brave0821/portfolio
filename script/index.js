/* 계획 웨이브 메인 배너처럼 중앙에 보이게 */

/* 상단 메인 슬라이드 */
const my_swiper = new Swiper('#projects', { 
    /* autoplay:{delay:3000}, */
    slidesPerView: 5, //슬라이드 한번에 1개씩 보이기
    spaceBetween:0, // 슬라이드 여백
    centeredSlides:true, // 슬라이드의 기준을 가운데부터 시작하도록 설정하기
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
document.addEventListener("DOMContentLoaded", function() {
    const scroll_btn = document.querySelector(".scroll_btn")
    const start_wrap = this.document.querySelector(".start_wrap")

    scroll_btn.addEventListener("click",function() {
        start_wrap.scrollIntoView({behavior: 'smooth'});
    })

    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth' // 부드럽게 스크롤되도록 설정
    });
});