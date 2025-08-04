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
        nextEl:'.swiper-button-prev',
        prevEl:'.swiper-button-next',
    },
    scrollbar: {
        el: '.swiper-scrollbar',
    },
})
/* 재구매가 많은 */
const bestRepurchase = new Swiper('#best_repurchase',{
    slidesPerView:3,
    spaceBetween:60,
    loop:true,
    navigation:{
        nextEl:'.swiper-button-prev',
        prevEl:'.swiper-button-next',
    },
    scrollbar: {
        el: '.swiper-scrollbar',
    },
})

/* 금액대별 */
const bestSum = new Swiper('#best_sum',{
    slidesPerView:3,
    spaceBetween:60,
    loop:true,
    navigation:{
        nextEl:'.swiper-button-prev',
        prevEl:'.swiper-button-next',
    },
    scrollbar: {
        el: '.swiper-scrollbar',
    },
})
/* 명예의전당 */
const bestTopranking = new Swiper('#best_topranking',{
    slidesPerView:3,
    spaceBetween:60,
    loop:true,
    navigation:{
        nextEl:'.swiper-button-prev',
        prevEl:'.swiper-button-next',
    },
    scrollbar: {
        el: '.swiper-scrollbar',
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
    spaceBetween:20,
    autoplay:{delay:5000,},
    speed:1000,
    loop:true,
    navigation:{
        nextEl:'#timesale_right',
        prevEl:'#timesale_left',
    },
})