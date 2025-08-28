function toggleMenu() {
    const menu = document.querySelector('.mobile_menu');
    const burger = document.querySelector('.fa-bars');
    menu.classList.toggle('active');
    burger.classList.toggle('active');
}