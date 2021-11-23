const X_CLASS = 'x'
const CIRCLE_CLASS = 'circle'
const WINNING_COMBINATIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]
const cellElements = document.querySelectorAll('[data-cell]')
const board = document.getElementById('board')
const winningMessageElement = document.getElementById('winningMesssage')
const restartButton = document.getElementById('restartButton')
const winningMessageTextElement = document.querySelector('[data-winning-message-text]')

let circleTurn

startGame()

restartButton.addEventListener('click', startGame)

// const myFunct=() =>{
//     document.getElementById('alert1').value = "";
//     document.getElementById('alert2').value = "";
//     document.getElementById('text').value = "";
// }


function startGame() {
    circleTurn = false
    cellElements.forEach(cell => {
        cell.classList.remove(X_CLASS)
        cell.classList.remove(CIRCLE_CLASS)
        cell.removeEventListener('click', handleClick)
        cell.addEventListener('click', handleClick, { once: true })
    })
    setBoardHoverClass()
    winningMessageElement.classList.remove('show')
}

function handleClick(e) {
    const cell = e.target
    const currentClass = circleTurn ? CIRCLE_CLASS : X_CLASS
    placeMark(cell, currentClass)
    if (checkWin(currentClass)) {
        endGame(false)
    } else if (isDraw()) {
        endGame(true)    
    } 
    else {
        swapTurns()
        setBoardHoverClass()
    }
}

function endGame(draw) {
    if (draw) {
        winningMessageTextElement.innerText = "Draw!"
    } 
    else {
       winningMessageTextElement.innerText = `${circleTurn ? "O" : "X"} Win!`
    }
     winningMessageElement.classList.add('show')
}

function isDraw() {
     return [...cellElements].every(cell => {
         return cell.classList.contains(X_CLASS) ||
         cell.classList.contains(CIRCLE_CLASS)
     })
}

function placeMark(cell, currentClass) {
    cell.classList.add(currentClass)
}

function swapTurns() {
     circleTurn = !circleTurn
}

function setBoardHoverClass() {
    board.classList.remove(X_CLASS)
    board.classList.remove(CIRCLE_CLASS)
 if (circleTurn) {
     board.classList.add(CIRCLE_CLASS)
 }
 else {
     board.classList.add(X_CLASS)
 }
}

function checkWin(currentClass) {
   return WINNING_COMBINATIONS.some(combination => {
       return combination.every(index => {
           return cellElements[index].classList.contains(currentClass)
       })
   })
}

const myFunction =() => {
     var Player1 =   ip1.value;
     var Player2 =   ip2.value;
     var  play2 =   alert1.innerText;
     var play1 =  alert2.innerText;

     if (Player1 == "" && Player2 == "") {
         alert1.innerText = 'PLease fill in your names!';
            !startGame();
     }
     else {
        alert1.innerText = document.getElementById('ip1').value + '  are "X"';
        alert2.innerText = document.getElementById('ip2').value + '  are "O"';
        startGame();
     }
}
