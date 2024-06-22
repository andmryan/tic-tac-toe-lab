/*-------------------------------- Constants --------------------------------*/
//5) Define the required constants.
// const squareEls
// const messageEl
// if winner === true, winner message
// else if winner === false && tie == true, tie message
// else turn messsage

const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

/*---------------------------- Variables (state) ----------------------------*/
//1) Define the required variables used to track the state of the game.

let board = [
    '', '', '',
    '', '', '',
    '', '', '',
];
let turn = 'X';
let winner = false;
let tie = false;

/*------------------------ Cached Element References ------------------------*/

//2) Store cached element references.
// I don't know what this means.

/*-------------------------------- Functions --------------------------------*/

//3) Upon loading, the game state should be initialized, and a function should 
//   be called to render this game state.
init()

//4) The state of the game should be rendered to the user.
render(
    updateBoard()

)

//6) Handle a player clicking a square with a `handleClick` function.
// handleClick() => {}

// placePiece() => {}
// checkWinner() => {}
// checkTie() => {}
// switchPlayer() => {}

//7) Create Reset functionality.
// Something, something, click reset button and the game clears.
/*----------------------------- Event Listeners -----------------------------*/

// I did as much as I could. I'm really struggling to take what I know and use it. I don't know why. I at least wanted to submit what I had.