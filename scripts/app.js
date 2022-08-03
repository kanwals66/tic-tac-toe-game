const gameData = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];

let editedPlayer = 0;
let activePlayers = 0;
let currentRound = 1;
let gameIsOver=false;
const players = [
  {
    Name: "",
    Symbol: "X",
  },
  {
    Name: "",
    Symbol: "O",
  },
];
const configOverlay = document.getElementById("config-overlay");
const backdropElement = document.getElementById("backdrop");
const formSubmission = document.querySelector("form");
const displayErrormsg = document.getElementById("error-msg");
const gameAreaElement = document.getElementById("active-game");
const activePlayerNameElement = document.getElementById("active-player-name");
const gameOver = document.getElementById("game-over");

const editplayer1btnelement = document.getElementById("edit-player1-btn");
const editplayer2btnelement = document.getElementById("edit-player2-btn");
const cancelConfigBtnElement = document.getElementById("cancel-config-btn");
const startNewGameBtn = document.getElementById("start-game-btn");
// const gameFeildElements=document.querySelectorAll('#game-board li')
const gameBoard = document.getElementById("game-board");

editplayer1btnelement.addEventListener("click", openPlayerConfiguration);
editplayer2btnelement.addEventListener("click", openPlayerConfiguration);
cancelConfigBtnElement.addEventListener("click", closeConfigBtn);
backdropElement.addEventListener("click", closeConfigBtn);
formSubmission.addEventListener("submit", userFormSubmission);
startNewGameBtn.addEventListener("click", startNewGame);

// for (const gameFeildElement of gameFeildElements) {
//   gameFeildElement.addEventListener("click", selectGameFeild);
// }
gameBoard.addEventListener("click", selectGameFeild);
