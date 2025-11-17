// Initialise Storage
import { storage } from  "./snake-storage.js";


// Workaround for tageting the HTML elements
let startGameBtn, board, scoreEl, highScoreText, infoText, playerName;

export function initSnakeGame(container) {
  // Query elements INSIDE the SPA HTML
  board = container.querySelector("#game-board");
  startGameBtn = container.querySelector("#start-game");
  scoreEl = container.querySelector("#score");
  highScoreText = container.querySelector("#high-score");
  infoText = container.querySelector(".info-text");
  playerName = container.querySelector("#player-name");

  // Event listeners
  document.addEventListener("keydown", handleKeyPress);
  startGameBtn.addEventListener("click", startGameByClick);

  // Update UI with initial high score
  updateHighScoreOnTheUI();
  updateScoreOnTheUI();
}


// ---------------------------------------
// Game Variables / Game State
// ---------------------------------------

let gridSize = 20;
let snake = [{ x: 10, y: 10 }];
let food = generateFood();
let direction = "right";
let gameInterval;
let gameSpeedDelay = 200;
let gameStarted = false;
let highScore = 0;



// ---------------------------------------
// DRAW
// ---------------------------------------

function draw() {
  board.innerHTML = "";
  drawSnake();
  drawFood();
  updateScoreOnTheUI();
}

function drawSnake() {
  snake.forEach((segment) => {
    const snakeElement = createElement("div", "snake");
    setPosition(snakeElement, segment);
    board.appendChild(snakeElement);
  });
}

function drawFood() {
  if (!gameStarted) return;
  if (gameStarted) {
    const foodElement = createElement("div", "food");
    setPosition(foodElement, food);
    board.appendChild(foodElement);
  }
}

// ---------------------------------------
// HELPER FUNCTIONS
// ---------------------------------------

//Create a snake or food
function createElement(tag, className) {
  const element = document.createElement(tag);
  element.className = className;
  return element;
}

//Set the positon of the snake or food
function setPosition(element, position) {
  element.style.gridColumn = position.x;
  element.style.gridRow = position.y;
}

// GENERATE FOOD
function generateFood() {
  const x = Math.floor(Math.random() * gridSize + 1);
  const y = Math.floor(Math.random() * gridSize + 1);
  return { x, y };
}


// ---------------------------------------
// MOVEMENT
// ---------------------------------------

function moveTheSnake() {
  const head = { ...snake[0] };
  switch (direction) {
    case "right":
      head.x++;
      break;
    case "left":
      head.x--;
      break;
    case "up":
      head.y--;
      break;
    case "down":
      head.y++;
      break;
  }

  snake.unshift(head);

  if (head.x === food.x && head.y === food.y) {
    food = generateFood();
    increaseSpeed();
    clearInterval(gameInterval); //clear the previous SetInterval
    gameInterval = setInterval(() => {
      moveTheSnake();
      checkCollision();
      draw();
    }, gameSpeedDelay);
  } else {
    snake.pop();
  }
}

// Increase Speed
function increaseSpeed() {
  console.log(gameSpeedDelay);
  if (gameSpeedDelay > 150) {
    gameSpeedDelay -= 5;
  } else if (gameSpeedDelay > 100) {
    gameSpeedDelay -= 3;
  } else if (gameSpeedDelay > 50) {
    gameSpeedDelay -= 2;
  } else if (gameSpeedDelay > 25) {
    gameSpeedDelay -= 1;
  }
}

// ---------------------------------------
// GAME START / STOP
// ---------------------------------------

function startGame() {
  const { bestPlayer, bestScore } = storage.getHighestScoringPlayer();
  infoText.textContent = `Game on! Can you beat the highest score ${bestScore} by ${bestPlayer}`;
  gameStarted = true; //Keeep track of a runnning game.
  gameInterval = setInterval(() => {
    moveTheSnake();
    checkCollision();
    draw();
  }, gameSpeedDelay);
}

function stopGame() {
  clearInterval(gameInterval);
  gameStarted = false;
}

// Handle Button Click
function startGameByClick() {
  if (!gameStarted) startGame();
}


// ---------------------------------------
// KEYBOARD
// ---------------------------------------
//Keypress Event Listener
function handleKeyPress(event) {
  if (
    (!gameStarted && event.code === "Space") ||
    (!gameStarted && event.key === " ")
  ) {
    startGame();
  } else {
    switch (event.key) {
      case "ArrowUp":
        direction = "up";
        break;
      case "ArrowDown":
        direction = "down";
        break;
      case "ArrowLeft":
        direction = "left";
        break;
      case "ArrowRight":
        direction = "right";
        break;
    }
  }
}



// ---------------------------------------
// COLLISION
// ---------------------------------------

function checkCollision() {
  const head = snake[0];
  if (head.x < 1 || head.x > gridSize || head.y < 1 || head.y > gridSize) {
    resetGame();
  }
  for (let i = 1; i < snake.length; i++) {
    if (head.x === snake[i].x && head.y === snake[i].y) {
      resetGame();
    }
  }
}

function resetGame() {
  const currentScore = snake.length - 1;
  const name = playerName.textContent.trim() ||"Unknown Player";

  // Save this player's score
  storage.savePlayerScore(name, currentScore);

  // Get global highest score
  const { bestPlayer, bestScore } = storage.getHighestScoringPlayer();

  // Show message
  infoText.textContent = `Game Over! Highest score is ${bestScore} by ${bestPlayer}.`;

  updateHighScoreOnTheUI();
  stopGame();

  // Reset data for next play
  snake = [{ x: 10, y: 10 }];
  food = generateFood();
  direction = "right";
  gameSpeedDelay = 200;
  updateScoreOnTheUI();
}


// ---------------------------------------
// SCORE UI
// ---------------------------------------

//Score
function updateScoreOnTheUI() {
  const currentScore = snake.length - 1;
  scoreEl.textContent = `Score: ${currentScore.toString().padStart(3, "0")}`;
}

//High Score
function updateHighScoreOnTheUI() {
  const { bestScore } = storage.getHighestScoringPlayer();
  highScoreText.textContent = `Best Score: ${bestScore
    .toString()
    .padStart(3, "0")}`;
}
