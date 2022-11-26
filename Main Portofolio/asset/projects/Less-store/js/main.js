let menuBar = document.getElementById('menu-bar');
let closeMneu = document.getElementById('close-menu');
let navLinks = document.querySelector('.nav .header .nav-links');

menuBar.addEventListener('click',function () {
    navLinks.classList.remove('m898top--100vh')
        navLinks.classList.add('m898top-0');
})
closeMneu.addEventListener('click', () => {
    navLinks.classList.remove('m898top-0');
    navLinks.classList.add('m898top--100vh')
})