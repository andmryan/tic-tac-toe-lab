/*-------------------------------- Constants --------------------------------*/
//5) Define the required constants.
// const squareEls = 
// const messageEl = 

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


/*-------------------------------- Functions --------------------------------*/

//3) Upon loading, the game state should be initialized, and a function should 
//   be called to render this game state.
init()

//4) The state of the game should be rendered to the user.
render(
    updateBoard()
    updateMessage()
)
//6) Handle a player clicking a square with a `handleClick` function.
handleClick() => {
    // Select a cell in the document/a square on the board.
    // attach event to each div
}

// placePiece() => {}
// Get position of click -> array[position] = turn. Position is Div ID.
// Show on board sqr.element.innerText = [turn]

// checkWinner() => {}
// if board[0] === turn && board[1] === turn && board[2] === turn else if , etc, else false
// if any are true return win message

checkTie() => {
    // if board.any('') === true, not a tie. If === false, a tie.
    if (board.any('') === true) {return false} else {return true}

// switchPlayer() => {}
// if checkWinner === true message.innertext = turn wins
// if checkWinner === false && checkTie === true message.innertext = tie
// else switch turn message.innertext = if turn === x, turn === 0, else turn === x

//7) Create Reset functionality.
// Something, something, click reset button and the game clears.
/*----------------------------- Event Listeners -----------------------------*/

document.querySelector(".board").addEventListener("click", handleClick);