/*-------------------------------- Constants --------------------------------*/
//5) Define the required constants.
const winningCombos = [
    // Rows
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    // Columns 
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    // Diagonal
    [0, 4, 8],
    [2, 4, 6]
];

const resetButton = document.querySelector('#reset');
/*---------------------------- Variables (state) ----------------------------*/
//1) Define the required variables used to track the state of the game.
let board = [
    '','','',
    '','','',
    '','','',
];
let turn = 'X';
let winner = false;
let tie = false;

/*------------------------ Cached Element References ------------------------*/
const squareEls = document.querySelectorAll('.sqr');
// console.log(squareEls)
const messageEl = document.querySelector('#message');
// console.log(messageEl)

/*-------------------------------- Functions --------------------------------*/
//3) Upon loading, the game state should be initialized, and a function should 
//   be called to render this game state.
function init() {
    // console.log("Init.")
    board = [
        '','','',
        '','','',
        '','','',
    ]
    winner = false
    tie = false
    turn = 'X'
    render()
}
init()

//4) The state of the game should be rendered to the user.
function render() {
    // console.log("Render.")
    updateBoard()
    updateMessage()
}

//6) Handle a player clicking a square with a `handleClick` function.
function handleClick(event) {
    // Select a cell in the document/a square on the board.
    // attach event to each div
    const cell = event.target
    const index = cell.id
    updateBoard(index)
    cell.textContent = turn
    checkWinner()
    checkTie()
    switchPlayer()
    render()
}

function updateBoard(index) {
    board[index] = turn
}

function updateMessage() {
    if (!winner && !tie) {
        messageEl.textContent = `It's ${turn}'s turn`
    } else if (!winner && tie) {
        messageEl.textContent = "It's a tie!";
    } else {
        messageEl.textContent = `Congrats ${turn}!`
    }
}

// placePiece() => {}
// Rolled into handleClick()

// checkWinner() => {}
function checkWinner() {
    if (board[0] !== '' && board[0] === board[1] && board[0] === board[2]) {
        winner = true
    } else if (board[3] !== '' && board[3] === board[4] && board[3] === board[5]) {
        winner = true
    } else if (board[6] !== '' && board[6] === board[7] && board[6] === board[8]) {
    winner = true
    }else if (board[0] !== '' && board[0] === board[3] && board[0] === board[6]) {
    winner = true
    }else if (board[1] !== '' && board[1] === board[4] && board[1] === board[7]) {
    winner = true
    }else if (board[2] !== '' && board[2] === board[5] && board[2] === board[8]) {
    winner = true
    }else if (board[0] !== '' && board[0] === board[4] && board[0] === board[8]) {
    winner = true
    }else if (board[6] !== '' && board[6] === board[4] && board[6] === board[2]) {
    winner = true
}}

// checkTie() => {
function checkTie() {
}

// switchPlayer() => {}
function switchPlayer() {
if (winner) {
    return
} else if (!winner && turn === 'X') {
        turn = 'O'
} else if (!winner && turn === 'O') {
        turn = 'X'
}}

//7) Create Reset functionality.
// Rolled into event listener.
// /*----------------------------- Event Listeners -----------------------------*/

squareEls.forEach(squareEl => {
    squareEl.addEventListener('click', handleClick);
  });

  resetButton.addEventListener('click', init)

// I did as much as I could understand how to do + figured submitting what I had is better than nothing at all. 