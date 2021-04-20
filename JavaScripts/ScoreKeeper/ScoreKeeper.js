document.addEventListener("DOMContentLoaded", () => {
  const resetButton = document.getElementById("resetButton");
  const player1Button = document.getElementById("player1Button");
  const player2Button = document.getElementById("player2Button");
  const scoreBoard = document.getElementById("scoreBoard");
  const customRange = document.getElementById("customRange2");
  const maxScoreDisplay = document.getElementById("maxScoreDisplay");

  var player1Score = 0;
  var player2Score = 0;
  var maxScore = 10;
  var gameOver = false;

  function updateScoreBoard() {
    console.log("Player1:" + player1Score);
    console.log("Player2:" + player2Score);

    scoreBoard.innerText = player1Score + "-" + player2Score;
    var result = checkWinner();
    if (result != null) {
      announceWinner(result);
    }
  }

  function onClickPlayer1Button() {
    event.preventDefault();
    if (gameOver != true) {
      player1Score++;
      updateScoreBoard();
    }
  }

  function onClickPlayer2Button() {
    event.preventDefault();
    if (gameOver != true) {
      player2Score++;
      updateScoreBoard();
    }
  }

  function onClickResetButton() {
    event.preventDefault();
    resetScore();
  }

  function onChangeSlider() {
    console.log(customRange.value);
    maxScore = customRange.value;
    maxScoreDisplay.innerText = "Playing to " + maxScore;
  }

  function checkWinner() {
    if (player1Score >= maxScore) {
      gameOver = true;
      return "Player1 is the Winner";
    } else if (player2Score >= maxScore) {
      gameOver = true;
      return "Player2 is the winner";
    } else return null;
  }

  function announceWinner(result) {
    console.log(result);
  }

  function resetScore() {
    player1Score = 0;
    player2Score = 0;
    gameOver = false;
    updateScoreBoard();
  }

  player1Button.addEventListener("click", onClickPlayer1Button);
  player2Button.addEventListener("click", onClickPlayer2Button);
  resetButton.addEventListener("click", onClickResetButton);
  customRange.addEventListener("input", onChangeSlider);
});
