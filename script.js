// back tot top

let backToTopBtn = document.querySelector('.back-to-top')

window.onscroll = () => {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        backToTopBtn.style.display = 'flex'
    } else {
        backToTopBtn.style.display = 'none'
    }
}

//Top nav menu

let menuItem = document.getElementsByClassName('menu-item');

Array.from(menuItem).forEach((item, index) =>{
    item.onclick = (e) =>{
        let currentMenu = document.querySelector('.menu-item.active');
        currentMenu.classList.remove('active');
        item.classList.add('active');
    }
})