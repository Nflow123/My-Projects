let navLinks = document.querySelector('.header .nav-links');
let barsIcon = document.querySelector('.header .bars');
let closeIcon = document.querySelector('.header .close')

barsIcon.classList.add('.d-f-991');

barsIcon.addEventListener('click',(eo) => {
    navLinks.classList.add('top-60-991');
    barsIcon.style.display = 'none';
    closeIcon.style.display = 'flex';
})

closeIcon.addEventListener('click',(eo) => {
    navLinks.classList.remove('top-60-991');
    barsIcon.style.display = 'flex';
    closeIcon.style.display = 'none';
})

let skillsSec = document.getElementById('skills');
let progressBar = document.querySelectorAll('#skills .skill-block .skill-prog .skill-bar')
window.onscroll = function(){
    if(window.scrollY >= skills.offsetTop - 150){
        progressBar.forEach((item) =>{
            item.style.width = item.dataset.width;
        })
    }
}

console.log('Hello There')