let board = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let gameOver = false;

function makeMove(index) {
    let cells = document.querySelectorAll(".cell");

    if (cells[index].innerHTML == '') {
        cells[index].innerHTML = currentPlayer;
    }

    if (currentPlayer == 'X') {
        currentPlayer = 'O';
    } else {
        currentPlayer = 'X';
    }


    if (cells[0].innerHTML == cells[1].innerHTML && cells[1].innerHTML == cells[2].innerHTML && cells[0].innerHTML != '') gameOver = true;
    if (cells[3].innerHTML == cells[4].innerHTML && cells[4].innerHTML == cells[5].innerHTML && cells[3].innerHTML != '') gameOver = true;
    if (cells[6].innerHTML == cells[7].innerHTML && cells[6].innerHTML == cells[8].innerHTML && cells[6].innerHTML != '') gameOver = true;

    if (cells[0].innerHTML == cells[3].innerHTML && cells[3].innerHTML == cells[6].innerHTML && cells[0].innerHTML != '') gameOver = true;
    if (cells[1].innerHTML == cells[4].innerHTML && cells[4].innerHTML == cells[7].innerHTML && cells[1].innerHTML != '') gameOver = true;
    if (cells[2].innerHTML == cells[5].innerHTML && cells[5].innerHTML == cells[8].innerHTML && cells[2].innerHTML != '') gameOver = true;

    if (cells[0].innerHTML == cells[4].innerHTML && cells[4].innerHTML == cells[8].innerHTML && cells[0].innerHTML != '') gameOver = true;
    if (cells[2].innerHTML == cells[4].innerHTML && cells[4].innerHTML == cells[6].innerHTML && cells[2].innerHTML != '') gameOver = true;

    if (gameOver) {
        if (currentPlayer == 'X') {
            currentPlayer = 'O';
        } else {
            currentPlayer = 'X';
        }
        document.querySelector("h1").innerHTML = currentPlayer + " won!";
    }
}

function resetGame() {
    let cells = document.querySelectorAll(".cell");
    for (let cell of cells) {
        cell.innerHTML = '';
    }
    gameOver = false;
    document.querySelector("h1").innerHTML = "Tic Tac Toe";
    currentPlayer = 'X';
}
