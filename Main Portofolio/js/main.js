let contactForm = document.getElementById('contact-form');
let contactFormContainer = document.querySelector('#contact-us .container');
let contactFormDone = document.querySelector('#contact-us .done-container');
contactForm.addEventListener('submit',(event) => {
    event.preventDefault();
    contactFormContainer.style.display = 'none';
    contactFormDone.style.left = '50%';
})