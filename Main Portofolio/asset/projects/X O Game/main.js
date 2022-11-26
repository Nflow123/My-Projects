let turn = 'x';
let square = [];
let winnerPopUp = document.getElementById('winner-popUp');
let winnerSpan = document.getElementById('winnerSpan');
function game(id){
    let gameTitle = document.getElementById('gameTitle');
    let element = document.getElementById(id);
    if (element.innerHTML === '' && turn === 'x') {
        element.innerHTML = 'x';
        winnerSpan.innerHTML = turn;
        turn = 'o';
        gameTitle.innerHTML = 'O';
    } else if(element.innerHTML === '' && turn === 'o'){
        element.innerHTML = 'o';
        winnerSpan.innerHTML = turn;
        turn = 'x';
        gameTitle.innerHTML = 'X';
    }

    winner()
}

function winner(){
    for (let i = 1; i < 10; i++) {
        square[i] = document.getElementById(`square${i}`);
    }

    if(square[1].innerHTML == square[2].innerHTML && square[2].innerHTML == square[3].innerHTML && square[1].innerHTML != ''){
        turn = false;
        square[1].style.backgroundColor = '#ddd';
        square[2].style.backgroundColor = '#ddd';
        square[3].style.backgroundColor = '#ddd';
        showPopUp()
    }

    if(square[4].innerHTML == square[5].innerHTML && square[5].innerHTML == square[6].innerHTML && square[4].innerHTML != ''){
        turn = false;
        square[4].style.backgroundColor = '#ddd';
        square[5].style.backgroundColor = '#ddd';
        square[6].style.backgroundColor = '#ddd';
        showPopUp()
    }

    if(square[7].innerHTML == square[8].innerHTML && square[8].innerHTML == square[9].innerHTML && square[7].innerHTML != ''){
        turn = false;
        square[7].style.backgroundColor = '#ddd';
        square[8].style.backgroundColor = '#ddd';
        square[9].style.backgroundColor = '#ddd';
        showPopUp()
    }

    if(square[1].innerHTML == square[4].innerHTML && square[4].innerHTML == square[7].innerHTML && square[1].innerHTML != ''){
        turn = false;
        square[1].style.backgroundColor = '#ddd';
        square[4].style.backgroundColor = '#ddd';
        square[7].style.backgroundColor = '#ddd';
        showPopUp()
    }

    if(square[2].innerHTML == square[5].innerHTML && square[5].innerHTML == square[8].innerHTML && square[2].innerHTML != ''){
        turn = false;
        square[2].style.backgroundColor = '#ddd';
        square[5].style.backgroundColor = '#ddd';
        square[8].style.backgroundColor = '#ddd';
        showPopUp()
    }

    if(square[3].innerHTML == square[6].innerHTML && square[6].innerHTML == square[9].innerHTML && square[3].innerHTML != ''){
        turn = false;
        square[3].style.backgroundColor = '#ddd';
        square[6].style.backgroundColor = '#ddd';
        square[9].style.backgroundColor = '#ddd';
        showPopUp()
    }

    if(square[1].innerHTML == square[5].innerHTML && square[5].innerHTML == square[9].innerHTML && square[1].innerHTML != ''){
        turn = false;
        square[1].style.backgroundColor = '#ddd';
        square[5].style.backgroundColor = '#ddd';
        square[9].style.backgroundColor = '#ddd';
        showPopUp()
    }

    if(square[3].innerHTML == square[5].innerHTML && square[5].innerHTML == square[7].innerHTML && square[3].innerHTML != ''){
        turn = false;
        square[3].style.backgroundColor = '#ddd';
        square[5].style.backgroundColor = '#ddd';
        square[7].style.backgroundColor = '#ddd';
        showPopUp()
    }
}

function showPopUp(){
    winnerPopUp.style.left = '50%';
}