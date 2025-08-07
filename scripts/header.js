// nav 변수 지정
const navGnb = document.querySelector('.gnb .allcate')
const navLnb = document.querySelector('.lnb')

console.log(navGnb,navLnb) //콘솔확인


// 초기셋팅
navLnb.style.display = 'none'

navGnb.addEventListener('click', () => {
    if (navLnb.style.display == 'none') {
        navLnb.style.display = 'flex';  // 열기
    } else {
        navLnb.style.display = 'none';  // 닫기
    }
});