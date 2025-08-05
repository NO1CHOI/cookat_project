/* a 링크 이동 막기 */
document.querySelectorAll('a').forEach(function(link) {
    link.addEventListener('click', function(e) {
    if (this.getAttribute('href') === '#' || this.getAttribute('href') === '') {
            e.preventDefault();
        }
    });
});

/* 메인배너 Swiper */
const bnrSwiper = new Swiper('#bnr_swiper', { 
    slidesPerView:3,
    spaceBetween:20,
    autoplay:{delay:5000,},
    speed:1000,
    loop:true,
    navigation:{
        nextEl:'#right_btn',
        prevEl:'#left_btn',
    },
    scrollbar: {
        el: '.swiper-scrollbar',
    },
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
    },
})


/* best swiper */
/* 지금핫한 */
const bestHot = new Swiper('#best_hot',{
    slidesPerView:3,
    spaceBetween:60,
    loop:true,
    navigation:{
        nextEl:'#hot_next',
        prevEl:'#hot_prev',
    },
})
/* 재구매가 많은 */
const bestRepurchase = new Swiper('#best_repurchase',{
    slidesPerView:3,
    spaceBetween:60,
    loop:true,
    navigation:{
        nextEl:'#repurchase_next',
        prevEl:'#repurchase_prev',
    },
})

/* 금액대별 */
const bestSum = new Swiper('#best_sum',{
    slidesPerView:3,
    spaceBetween:60,
    loop:true,
    navigation:{
        nextEl:'#sum_next',
        prevEl:'#sum_prev',
    },
})
/* 명예의전당 */
const bestTopranking = new Swiper('#best_topranking',{
    slidesPerView:3,
    spaceBetween:60,
    loop:true,
    navigation:{
        nextEl:'#topranking_next',
        prevEl:'#topranking_prev',
    },
})

/* .active 이동하기 이미지 변경 */
const items = document.querySelectorAll('.best_mainitem li');
items.forEach(item => {
item.addEventListener('click', () => {
    items.forEach(el => el.classList.remove('active'));
    item.classList.add('active');
    });
});

/* best 카테고리 클릭시 하단 swiper 변경 */
const bestLi = document.querySelectorAll('.best_mainitem li')
const contents = document.querySelectorAll('.sub_item');
console.log(bestLi,contents)

bestLi.forEach((tab,idx)=>{
    items[0].classList.add('active');
    tab.addEventListener('click',()=>{
        bestLi.forEach( other => {other.classList.remove('active')})
        tab.classList.add('active');
        contents.forEach(contents => {contents.style.display = 'none'})
        contents[idx].style.display = 'block';
    })
})

/* 타임특가 swiper*/
const timeSaleSwiper = new Swiper('#time_swiper', { 
    slidesPerView:3,
    spaceBetween:60,
    speed:500,
    loop:true,
    navigation:{
        nextEl:'#timesale_left',
        prevEl:'#timesale_right',
    },
})

/* 타임특가 시간 설정 */
function updateTimer() {
const future = Date.parse("2025/08/30 00:00:00");
const now = new Date();
const diff = future - now;

const days = Math.floor(diff / (1000 * 60 * 60 * 24));
const hours = Math.floor(diff / (1000 * 60 * 60));
const mins = Math.floor(diff / (1000 * 60));
const secs = Math.floor(diff / 1000);

const d = days;
const h = hours - days * 24;
const m = mins - hours * 60;
const s = secs - mins * 60;
document.getElementById("timer")
.innerHTML =
'<div>' + d + '<span>Days</span></div>' +
'<div>' + h + '<span>Hours</span></div>' +
'<div>' + m + '<span>Minutes</span></div>' +
'<div>' + s + '<span>Seconds</span></div>';
}

setInterval(updateTimer, 1000);