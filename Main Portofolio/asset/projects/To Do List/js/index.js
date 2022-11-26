let mainInput = document.getElementById('mainInput');
let submitBtn = document.getElementById('submitBtn');
let btmSec = document.getElementById('btmSec');
let container = document.getElementById('container')
let myForm = document.getElementById('myForm');
// Create a Task

const addTask = (eo) => {
    myForm.addEventListener('submit', (eo) => {
        eo.preventDefault()
        if (mainInput.value != '') {
            btmSec.innerHTML += `<div class="task">
            <i class="star fa-solid fa-star"></i>
            <h3 class="task-title">${mainInput.value}</h3>
            <button type="submit" class="done-task"><i class="fa fa-x"></i></button>
            </div>`
            mainInput.value = '';
        }else{
            alert('Type Some Thing Please')
        }
    })
}

addTask()

// Remove task


btmSec.addEventListener('click',(eo) => {
    if(eo.target.className == 'fa fa-x'){
        eo.target.parentElement.parentElement.remove()
}
if(eo.target.className == 'star fa-solid fa-star'){
    eo.target.style.color = 'gold';
    eo.target.style.borderColor = 'gold';
}
    
})


// Whene Task Is Done





// btmSec.addEventListener('click', (eo) => {
//     if (eo.target.className == 'star fa-solid fa-star') {
//         eo.target.style.color = 'gold';
//         eo.target.style.borderColor = 'gold';
// }