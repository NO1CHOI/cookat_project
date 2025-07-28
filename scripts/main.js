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