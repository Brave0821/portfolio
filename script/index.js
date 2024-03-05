/* 계획 웨이브 메인 배너처럼 중앙에 보이게 */

/* 상단 메인 슬라이드 */
const my_swiper = new Swiper('#projects', { 
    /* autoplay:{delay:3000}, */
    slidesPerView: 2, //슬라이드 한번에 1개씩 보이기
    spaceBetween:0, // 슬라이드 여백
    /* centeredSlides:true, */ // 슬라이드의 기준을 가운데부터 시작하도록 설정하기
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

/* 부트스트랩 툴팁 */
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))


/* 작업중 부분 클릭 시  */
/* document.getElementsByClassName('view').addEventListener('click', function(event) {
    event.preventDefault(); 
    show_alert(); 
}); */

function show_alert() {
    alert("준비중입니다.");
    event.preventDefault(); 
}
/* function send_alert() {
    alert("전송완료");
    event.preventDefault(); 
}

 */
/* 실험용 */
document.getElementById('sendbtn').addEventListener('submit', function(event) {
    var name = document.getElementById('floatingInputValue').value;
    var email = document.getElementById('floatingInputValue').value;
    var message = document.getElementById('floatingInputValue').value;

    if (!name || !email || !message) {
        // 필수 입력 필드가 비어있을 경우 폼 제출을 중단하고 경고창을 띄움
        event.preventDefault();
        alert("모든 필수 항목을 입력해주세요.");
    }
});