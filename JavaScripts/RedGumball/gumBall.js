document.addEventListener("DOMContentLoaded", () => {
  const grid = document.querySelector(".grid");
  const doodler = document.createElement("div");
  const gameOverMsg = document.createElement("h1");
  const scoreMsg = document.createElement("h2");
  const startBtn = document.createElement("div");

  let doodlerLeftSpace = 50;
  let doodlerBottomSpace = 220;
  let numberOfPlatforms = 4;
  let isGameOver = false;
  let platforms = [];
  let upTimerId;
  let downTimerId;
  let isJump = true;
  let startPoint = 150;
  let isgoingLeft = false;
  let isgoingRight = false;
  let leftTimerId;
  let RightTimerId;
  let score = 0;

  function createDoodler() {
    grid.appendChild(doodler);
    //dont include the dot while passiong the class name just class name is good
    doodler.classList.add("doodler");
    doodlerLeftSpace = platforms[0].left;
    doodler.style.left = doodlerLeftSpace + "px";
    doodler.style.bottom = doodlerBottomSpace + "px";
  }

  function buildPlatform(platformBottomSpace) {
    let platform = document.createElement("div");
    platform.classList.add("platform");
    platform.style.bottom = platformBottomSpace + "px";
    platform.left = Math.random() * 320;
    platform.style.left = platform.left + "px";
    platform.bottom = platformBottomSpace;
    return platform;
  }

  function buildPlatForms() {
    let platformGap = 600 / numberOfPlatforms;

    for (i = 0; i < numberOfPlatforms; i++) {
      let platformBottomSpace = 100 + i * platformGap; //verify this line of code
      let createPlatformResult = buildPlatform(platformBottomSpace);
      grid.appendChild(createPlatformResult);
      platforms.push(createPlatformResult);
    }
  }

  function movePlatforms() {
    if (doodlerBottomSpace > 200) {
      //change it and check once the project is completed
      platforms.forEach(function(singleplatform) {
        singleplatform.bottom -= 25;
        singleplatform.style.bottom = singleplatform.bottom + "px";
        if (singleplatform.bottom < 10) {
          let firstPlatform = platforms[0];
          grid.removeChild(firstPlatform);
          platforms.shift();
          let createPlatformResult = buildPlatform(600);
          grid.appendChild(createPlatformResult);
          platforms.push(createPlatformResult);
          score += 1;
        }
      });
    }
  }

  function jump() {
    clearInterval(downTimerId);
    clearInterval(leftTimerId);
    clearInterval(RightTimerId);
    isJump = true;
    upTimerId = setInterval(() => {
      doodlerBottomSpace += 5;
      doodler.style.bottom = doodlerBottomSpace + "px";
      if (doodlerBottomSpace > startPoint + 200) {
        fall();
        isJump = false;
      }
    }, 20);
  }

  function fall() {
    isJump = false;
    clearInterval(upTimerId);
    downTimerId = setInterval(() => {
      doodlerBottomSpace -= 5;
      doodler.style.bottom = doodlerBottomSpace + "Px";
      if (doodlerBottomSpace <= 0) {
        gameOver();
      }
      platforms.forEach(singlePlatform => {
        if (
          doodlerBottomSpace >= singlePlatform.bottom &&
          doodlerBottomSpace <= singlePlatform.bottom + 10 &&
          doodlerLeftSpace + 60 >= singlePlatform.left &&
          doodlerLeftSpace <= singlePlatform.left + 80 &&
          isJump == false
        ) {
          console.log("landed");
          startPoint = doodlerBottomSpace;
          jump();
          isJump = true;
        }
      });
    }, 20);
  }

  function control(e) {
    doodler.style.bottom = doodlerBottomSpace + "px";
    if (e.key === "ArrowLeft") {
      moveLeft();
    } else if (e.key === "ArrowRight") {
      moveRight();
    } else if (e.key === "ArrowUp") {
      moveStraight();
    }
  }

  function moveLeft() {
    if (isgoingRight) {
      clearInterval(RightTimerId);
      isgoingRight = false;
    }
    isgoingLeft = true;
    leftTimerId = setInterval(() => {
      if (doodlerLeftSpace >= 0) {
        doodlerLeftSpace -= 5;
        doodler.style.left = doodlerLeftSpace + "px";
      } else {
        moveRight();
      }
    }, 20);
  }

  function moveRight() {
    if (isgoingLeft) {
      clearInterval(leftTimerId);
      isgoingLeft = false;
    }
    isgoingRight = true;
    RightTimerId = setInterval(() => {
      if (doodlerLeftSpace < 340) {
        doodlerLeftSpace += 5;
        doodler.style.left = doodlerLeftSpace + "px";
      } else {
        moveLeft();
      }
    }, 20);
  }

  function moveStraight() {
    isgoingLeft = false;
    isgoingRight = false;
    clearInterval(leftTimerId);
    clearInterval(RightTimerId);
  }

  function gameOver() {
    isGameOver = true;
    console.log("gameover!");
    clearInterval(upTimerId);
    clearInterval(downTimerId);
    clearInterval(leftTimerId);
    clearInterval(RightTimerId);
    console.log(score);
    while (grid.firstChild) {
      grid.removeChild(grid.firstChild);
    }
    displayGameOverMessage();
  }

  function displayGameOverMessage() {
    gameOverMsg.classList.add("gameOver");
    gameOverMsg.innerHTML = "Game Over !";
    grid.appendChild(gameOverMsg);
    scoreMsg.classList.add("score");
    scoreMsg.innerHTML = "Score: " + score;
    grid.appendChild(scoreMsg);
  }

  function start() {
    if (!isGameOver) {
      buildPlatForms();
      createDoodler();
      setInterval(movePlatforms, 300);
      jump(startPoint);
      document.addEventListener("keyup", control);
    }
  }

  //Start The Flow
  startBtn.innerText = "Start !";
  startBtn.classList.add("startButton");
  grid.appendChild(startBtn);
  startBtn.addEventListener("click", () => {
    start();
    grid.removeChild(startBtn);
  });
});
