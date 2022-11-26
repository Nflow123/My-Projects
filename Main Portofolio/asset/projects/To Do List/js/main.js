let mainInput = document.getElementById('mainInput');
let submitBtn = document.getElementById('submitBtn');
let inputValue;
let container = document.getElementById('container');
let btmSec = document.getElementById('btmSec');
let taskTitle = document.getElementsByClassName('task-title')[0]

submitBtn.onclick = (eo) => {
    inputValue = mainInput.value;
    mainInput.value = '';
    taskTitle.innerHTML = inputValue;
    newTask = `<div class="task">
    <i class="star fa-solid fa-star"></i>
    <h3 class="task-title">${inputValue}</h3>
    <button type="submit" class="done-task"><i class="fa fa-x"></i></button>
    </div>`;
    btmSec.innerHTML += newTask;
}