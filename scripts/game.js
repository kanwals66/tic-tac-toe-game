function gameReset() {
  activePlayers = 0;
  currentRound = 1;
  gameIsOver = false;
  gameOver.firstElementChild.innerHTML =
    'You won <span id="winner-name">PLAYER NAME</span>';
  gameOver.style.display = "none";
  let gameBoardIndex = 0;
  for (i = 0; i < 3; i++) {
    for (j = 0; j < 3; j++) {
      gameData[i][j] = 0;
      const gameBoardItemElement = gameBoard.children[gameBoardIndex];
      gameBoardItemElement.textContent = "";
      gameBoardItemElement.classList.remove("disabled");
      gameBoardIndex++;
    }
  }
}

function startNewGame() {
  if (players[0].Name == "" || players[1].Name == "") {
    alert("Please set custom player names for both players!");
    return;
  }
  gameReset();
  activePlayerNameElement.textContent = players[activePlayers].Name;
  gameAreaElement.style.display = "block";
}

function switchPlayer() {
  if (activePlayers === 0) {
    activePlayers = 1;
  } else {
    activePlayers = 0;
  }
  activePlayerNameElement.textContent = players[activePlayers].Name;
}
// function selectGameFeild(event) {
//   event.target.textContent = players[activePlayers].Symbol;
//   event.target.classList.add("disabled");
//   switchPlayer();
// }
function selectGameFeild(event) {
  if (event.target.tagName !== "LI" || gameIsOver) {
    return;
  }
  const selectedFeild = event.target;
  const selectedColumn = selectedFeild.dataset.col - 1;
  const selectedRow = selectedFeild.dataset.row - 1;
  if (gameData[selectedColumn][selectedRow] > 0) {
    alert("Please select an empty feild!");
    return;
  }
  selectedFeild.textContent = players[activePlayers].Symbol;
  selectedFeild.classList.add("disabled");

  gameData[selectedColumn][selectedRow] = activePlayers + 1;

  const winnerId = checkForGameOver();
  if (winnerId !== 0) {
    endGame(winnerId);
  }
  currentRound++;
  switchPlayer();
}

function checkForGameOver() {
  //checking rows for equality
  for (i = 0; i < 3; i++) {
    if (
      gameData[i][0] > 0 &&
      gameData[i][0] === gameData[i][1] &&
      gameData[i][1] === gameData[i][2]
    ) {
      return gameData[i][0];
    }
  }

  for (i = 0; i < 3; i++) {
    //cheaking columns for equality
    if (
      gameData[0][i] > 0 &&
      gameData[0][i] === gameData[1][i] &&
      gameData[1][i] === gameData[2][i]
    ) {
      return gameData[0][i];
    }
  }

  //diagnol top left to bottom right
  if (
    gameData[0][0] > 0 &&
    gameData[0][0] === gameData[1][1] &&
    gameData[1][1] === gameData[2][2]
  ) {
    return gameData[0][0];
  }
  //diagnol botton left to top right
  if (
    gameData[2][0] > 0 &&
    gameData[2][0] === gameData[1][1] &&
    gameData[1][1] === gameData[0][2]
  ) {
    return gameData[2][0];
  }

  if (currentRound === 9) {
    return -1;
  }
  return 0;
}
function endGame(winnerId) {
  gameIsOver = true;
  gameOver.style.display = "block";
  if (winnerId > 0) {
    const winnerName = players[winnerId - 1].Name;
    gameOver.firstElementChild.firstElementChild.textContent = winnerName;
  } else {
    gameOver.firstElementChild.textContent = "it's a draw";
  }
}
