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

/* 계획 웨이브 메인 배너처럼 중앙에 보이게 */

/* 위로가기 버튼 (중간에 스와이프 부분에서 뒤로가는데 수정중
요구사항은 스와이프 부분에서 아에 안보이고 메일 문의에서 다시 나타날 수 있게 만들기.
) */
function scrollToTop() {
    document.querySelector('.main_wrap').scrollIntoView({ behavior: 'smooth' });
}

/* 상단 메인 슬라이드 */
const my_swiper = new Swiper('#projects', { 
    /* autoplay:{delay:3000}, */
    slidesPerView: 3, //슬라이드 한번에 1개씩 보이기
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
    breakpoints: {
        // 768 이상에만 적용
        1025: {
        slidesPerView: 3,
/*         spaceBetween: 40 */
        },
        768: {
        slidesPerView: 2,
/*         spaceBetween: 40 */
        },

        480: {
            slidesPerView: 1,
        },

        200: {
            slidesPerView: 1,
        }

}})



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


/* 테스트 진행중 0222 */
// 버튼 요소 선택
const scrollToTopButton = document.querySelector('.scroll-to-top');

// Intersection Observer 설정
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

// 슬라이더 요소 감시
const slider = document.querySelector('#projects');
observer.observe(slider);

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

// 메일 문의 섹션 감시
mailObserver.observe(mailSection);


/* 테스트 진행중 0222 */

/* 진행도 관련 wavve*/
function updateProgress_wavve(percentage) {
    const progressBar_wavve = document.getElementById('progress_wavve');
    const newWidth_wavve = Math.min(100, Math.max(0, percentage)) + '%';
    progressBar_wavve.style.width = newWidth_wavve;
    
    /* 50%미만이면 #f44336 그 이상이면 #4caf50  */
    if (percentage < 50) {
        progressBar_wavve.style.backgroundColor = '#f44336'; // Red color for contribution below 60%
    } else {
        progressBar_wavve.style.backgroundColor = '#4caf50'; // Green color for contribution above or equal to 60%
    }
  }
  
  // Example usage:
  updateProgress_wavve(100); // Update the progress to 70%

/* 진행도 관련 비렌스 virens */

function updateProgress_virens(percentage) {
    const progressBar_virens = document.getElementById('progress_virens');
    const newWidth_virens = Math.min(100, Math.max(0, percentage)) + '%';
    progressBar_virens.style.width = newWidth_virens;
    
    /* 50%미만이면 #f44336 그 이상이면 #4caf50  */
    if (percentage < 50) {
        progressBar_virens.style.backgroundColor = '#f44336'; // Red color for contribution below 60%
    } else {
        progressBar_virens.style.backgroundColor = '#4caf50'; // Green color for contribution above or equal to 60%
    }
  }
  updateProgress_virens(100);

/* 진행도 미술관 */

function updateProgress_art(percentage) {
    const progressBar_art = document.getElementById('progress_art');
    const newWidth_art = Math.min(100, Math.max(0, percentage)) + '%';
    progressBar_art.style.width = newWidth_art;
    
    /* 50%미만이면 #f44336 그 이상이면 #4caf50  */
    if (percentage < 50) {
        progressBar_art.style.backgroundColor = '#f44336'; // Red color for contribution below 60%
    } else {
        progressBar_art.style.backgroundColor = '#4caf50'; // Green color for contribution above or equal to 60%
    }
  }
  updateProgress_art(60);

/* 진행도 call 백엔드 프로젝트 */

function updateProgress_call(percentage) {
    const progressBar_call = document.getElementById('progress_call');
    const newWidth_call = Math.min(100, Math.max(0, percentage)) + '%';
    progressBar_call.style.width = newWidth_call;
    
    /* 50%미만이면 #f44336 그 이상이면 #4caf50  */
    if (percentage < 50) {
        progressBar_call.style.backgroundColor = '#f44336'; // Red color for contribution below 60%
    } else {
        progressBar_call.style.backgroundColor = '#4caf50'; // Green color for contribution above or equal to 60%
    }
  }
  updateProgress_call(100);

/* 진행도 스타벅스 프로젝트 */

function updateProgress_star(percentage) {
    const progressBar_star = document.getElementById('progress_star');
    const newWidth_star = Math.min(100, Math.max(0, percentage)) + '%';
    progressBar_star.style.width = newWidth_star;
    
    /* 50%미만이면 #f44336 그 이상이면 #4caf50  */
    if (percentage < 50) {
        progressBar_star.style.backgroundColor = '#f44336'; // Red color for contribution below 60%
    } else {
        progressBar_star.style.backgroundColor = '#4caf50'; // Green color for contribution above or equal to 60%
    }
  }
  updateProgress_star(100);




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