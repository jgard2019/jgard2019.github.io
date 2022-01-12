let currentShooterIndex = 289;
let gameInterval;
let width = 20;
let gameGrid = document.querySelector(".grid");
let aliensRemoved = [];
const gameStatus = document.querySelector(".topText");

for (let i = 0; i < 300; i++) {
  let square = document.createElement("div");
  gameGrid.appendChild(square);
}

const gridSquares = Array.from(document.querySelectorAll(".grid div"));

const invaders = [
  20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 40, 41, 42, 43, 44, 45, 46, 47, 48,
  49, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69,
];

function drawInvaders() {
  for (let i = 0; i < invaders.length; i++) {
    if (!aliensRemoved.includes(i)) {
      gridSquares[invaders[i]].classList.add("invader");
    }
  }
  if (aliensRemoved.length >= invaders.length) {
    gameStatus.innerHTML = "YOU WIN";
    clearInterval(gameInterval);
  }
}

function removeInvaders() {
  for (let i = 0; i < invaders.length; i++) {
    gridSquares[invaders[i]].classList.remove("invader");
  }
}

//more lives later? save as function
function drawShooter() {
  gridSquares[currentShooterIndex].classList.add("shooter");
}

drawInvaders();
drawShooter();

function moveShooter(j) {
  gridSquares[currentShooterIndex].classList.remove("shooter");
  if (currentShooterIndex > 280 && j.key == "ArrowLeft") {
    currentShooterIndex -= 1;
  }

  if (currentShooterIndex < 299 && j.key == "ArrowRight") {
    currentShooterIndex += 1;
  }
  gridSquares[currentShooterIndex].classList.add("shooter");
}

document.addEventListener("keydown", moveShooter);

function moveInvaders() {
  if (!invaders.includes(280)) {
    removeInvaders();
    for (let i = 0; i < invaders.length; i++) {
      invaders[i] += 1;
    }
    drawInvaders();

    if (
      gridSquares[currentShooterIndex].classList.contains("invader", "shooter")
    ) {
      gameStatus.innerHTML = "GAME OVER";
    } else if (gridSquares[280].classList.contains("invader")) {
      gameStatus.innerHTML = "GAME OVER";
    }
  } else {
    clearInterval(gameInterval);
  }
}

gameInterval = setInterval(moveInvaders, 500);

function shootLaser(s) {
  if (s.key == " ") {
    let laserId;
    let currentLaserIndex = currentShooterIndex;

    function moveLaser() {
      gridSquares[currentLaserIndex].classList.remove("laser");
      if (currentLaserIndex >= width) {
        currentLaserIndex -= width;
      }
      gridSquares[currentLaserIndex].classList.add("laser");

      if (currentLaserIndex <= width) {
        gridSquares[currentLaserIndex].classList.remove("laser");
      }
      if (gridSquares[currentLaserIndex].classList.contains("invader")) {
        const removeAlien = invaders.indexOf(currentLaserIndex);
        gridSquares[currentLaserIndex].classList.remove("laser");

        aliensRemoved.push(removeAlien);

        //you need to find a way to delete duplicates in aliensRemoved[]
        //or prevent duplicates


        console.log(aliensRemoved);
        clearInterval(laserId);
      }
    }
    laserId = setInterval(moveLaser, 20);
  }
}

document.addEventListener("keydown", shootLaser);
