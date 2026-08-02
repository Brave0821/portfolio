/* 메인 wrap 스크롤 내릴 시 nav faixed */
window.addEventListener('scroll', function() {
    var nav = document.querySelector('header');
    var main = document.querySelector('main');
    
    if (window.scrollY > main.offsetTop) {
        nav.style.position = 'fixed';
        nav.style.top = '0';
        nav.style.width = '100%';
        nav.style.backgroundColor = '#114232';
        nav.style.zIndex = '1000';
    } else {
        nav.style.position = 'relative';
        nav.style.backgroundColor = ''; // 이전의 스타일로 복원하려면 이전의 스타일을 지정하세요
    }
});

/* 위로가기 버튼 */
function scrollToTop() {
    document.querySelector('.main_wrap').scrollIntoView({ behavior: 'smooth' });
}

/* 상단 메인 슬라이드 (웹 프로젝트) */
const my_swiper = new Swiper('#projects', { 
    slidesPerView: 3, 
    spaceBetween:0, 
    loop:true,
    pagination:{
        el:'.swiper-pagination'
    },
    navigation:{
        nextEl:'#projects .swiper-button-next',
        prevEl:'#projects .swiper-button-prev',
    },
    breakpoints: {
        1025: { slidesPerView: 3 },
        768: { slidesPerView: 2 },
        480: { slidesPerView: 1 },
        200: { slidesPerView: 1 }
    }
});

/* QA 검수 및 문서 관리 슬라이드 (새로 추가된 슬라이더) */
const qa_swiper = new Swiper('#qa_projects', { 
    slidesPerView: 3, 
    spaceBetween: 0, 
    loop: false, // 문서 자료는 보통 개수가 적으므로 반복(loop)을 false로 두는 것이 깔끔합니다.
    pagination:{
        el:'.swiper-pagination'
    },
    navigation:{
        nextEl:'#qa_projects .swiper-button-next',
        prevEl:'#qa_projects .swiper-button-prev',
    },
    breakpoints: {
        1025: { slidesPerView: 3 },
        768: { slidesPerView: 2 },
        480: { slidesPerView: 1 },
        200: { slidesPerView: 1 }
    }
});


/* 메일문의  */
const mail_inquire = document.querySelector(".mail a")
const mail_contents = document.querySelector(".mail form")
let is_visible = false;

mail_inquire.addEventListener("click",(event)=>{
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


/* 스크롤 버튼 감시 설정 */
const scrollToTopButton = document.querySelector('.scroll-to-top') || document.querySelector('#scroll-to-top');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // 슬라이더가 뷰포트에 들어오면 버튼 숨기기
            scrollToTopButton.style.display = 'none';
        } else {
            // 슬라이더가 뷰포트를 벗어나면 버튼 보이기
            scrollToTopButton.style.display = 'block';
        }
    });
});

// 기존 웹 프로젝트 슬라이더 감시
const slider = document.querySelector('#projects');
if(slider) observer.observe(slider);

// 새로 추가된 QA 슬라이더 감시 (추가됨)
const qa_slider = document.querySelector('#qa_projects');
if(qa_slider) observer.observe(qa_slider);

// 메일 문의 섹션 감시
const mailSection = document.querySelector('.mail');
const mailObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // 메일 문의 섹션이 뷰포트에 들어오면 버튼 보이기
            scrollToTopButton.style.display = 'block';
        }
    });
});
if(mailSection) mailObserver.observe(mailSection);


/* 진행도 관련 함수들 */
function updateProgress_wavve(percentage) {
    const progressBar_wavve = document.getElementById('progress_wavve');
    if(!progressBar_wavve) return;
    const newWidth_wavve = Math.min(100, Math.max(0, percentage)) + '%';
    progressBar_wavve.style.width = newWidth_wavve;
    
    if (percentage < 50) {
        progressBar_wavve.style.backgroundColor = '#f44336'; 
    } else {
        progressBar_wavve.style.backgroundColor = '#4caf50'; 
    }
}
updateProgress_wavve(100); 

function updateProgress_virens(percentage) {
    const progressBar_virens = document.getElementById('progress_virens');
    if(!progressBar_virens) return;
    const newWidth_virens = Math.min(100, Math.max(0, percentage)) + '%';
    progressBar_virens.style.width = newWidth_virens;
    
    if (percentage < 50) {
        progressBar_virens.style.backgroundColor = '#f44336'; 
    } else {
        progressBar_virens.style.backgroundColor = '#4caf50'; 
    }
}
updateProgress_virens(100);

function updateProgress_art(percentage) {
    const progressBar_art = document.getElementById('progress_art');
    if(!progressBar_art) return;
    const newWidth_art = Math.min(100, Math.max(0, percentage)) + '%';
    progressBar_art.style.width = newWidth_art;
    
    if (percentage < 50) {
        progressBar_art.style.backgroundColor = '#f44336'; 
    } else {
        progressBar_art.style.backgroundColor = '#4caf50'; 
    }
}
updateProgress_art(60);

function updateProgress_call(percentage) {
    const progressBar_call = document.getElementById('progress_call');
    if(!progressBar_call) return;
    const newWidth_call = Math.min(100, Math.max(0, percentage)) + '%';
    progressBar_call.style.width = newWidth_call;
    
    if (percentage < 50) {
        progressBar_call.style.backgroundColor = '#f44336'; 
    } else {
        progressBar_call.style.backgroundColor = '#4caf50'; 
    }
}
updateProgress_call(100);

function updateProgress_star(percentage) {
    const progressBar_star = document.getElementById('progress_star');
    if(!progressBar_star) return;
    const newWidth_star = Math.min(100, Math.max(0, percentage)) + '%';
    progressBar_star.style.width = newWidth_star;
    
    if (percentage < 50) {
        progressBar_star.style.backgroundColor = '#f44336'; 
    } else {
        progressBar_star.style.backgroundColor = '#4caf50'; 
    }
}
updateProgress_star(100);


/* 부트스트랩 툴팁 */
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));


/* 작업중 부분 클릭 시  */
function show_alert(event) {
    if(event) event.preventDefault(); 
    alert("준비중입니다.");
}


/* 실험용 메일 폼 검증 (약간 수정됨) */
document.getElementById('mailFrm').addEventListener('submit', function(event) {
    // 주의: id="floatingInputValue"가 여러 요소에 중복되어 사용되고 있습니다.
    // 폼 요소 선택을 name 속성으로 변경하여 정확히 값을 가져오게 수정했습니다.
    var name = this.querySelector('input[name="name"]').value;
    var email = this.querySelector('input[name="email"]').value;
    var message = this.querySelector('textarea[name="message"]').value;

    if (!name || !email || !message) {
        event.preventDefault();
        alert("모든 필수 항목을 입력해주세요.");
    }
});