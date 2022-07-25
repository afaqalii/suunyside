const header = document.querySelector('.header')
const NavMenu = document.querySelector('.menu')
const MenuBtn = document.querySelector('.menu-icon')
const MenuItem = document.querySelectorAll('.menu-item')


MenuBtn.addEventListener('click',()=>{
    NavMenu.classList.toggle('active')
    header.classList.toggle('active')
    MenuBtn.classList.toggle('active')

})


MenuItem.forEach(n => n.addEventListener('click',()=>{

    NavMenu.classList.remove('active')
    header.classList.remove('active')
    MenuBtn.classList.remove('active')

}))