const nav = document.querySelector('#nav');
const navBtn = document.querySelector('#nav-btn');
const navBtnImg = document.querySelector('#nav-btn-img');

navBtn.onclick = ()=> {
    if (nav.classList.toggle('open')) {
    navBtnImg.src = "./img/icons/nav-close.svg"
    } else {
        navBtnImg.src = "./img/icons/nav-open.svg"
    }
}


    AOS.init({
    
        // once: true 
        // если хотим, чтобы анимация срабатывала только один раз

        // disable: 'phone'
        // если хотим отключить анимацию на мобилках
    });
