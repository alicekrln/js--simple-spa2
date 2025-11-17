import "./style.css";
import { initSnakeGame } from "./snake-game.js";


export function view() {
  return `
  
  <div class="wrapa">

    <div class="game-board-wrapa">
      <div id="game-board"></div>
    </div>


    <div class="rhs">
      <h1 id="player-name" contenteditable="plaintext-only">Player-NewPlayersName</h1>

      <div class="score-wrapa">
        <h2>Scores</h2>
        <div class="score-and-highscore">
          <h3 id="score"><span>Score: </span>000</h3>
          <h3 id="high-score"><span>High Score: </span>000</h3>
        </div>
      </div>

      <div class="info instruction-text">
        <svg class="info-icon" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M18 30H22V18H18V30ZM20 14C20.5667 14 21.042 13.808 21.426 13.424C21.81 13.04 22.0013 12.5653 22 12C21.9987 11.4347 21.8067 10.96 21.424 10.576C21.0413 10.192 20.5667 10 20 10C19.4333 10 18.9587 10.192 18.576 10.576C18.1933 10.96 18.0013 11.4347 18 12C17.9987 12.5653 18.1907 13.0407 18.576 13.426C18.9613 13.8113 19.436 14.0027 20 14ZM20 40C17.2333 40 14.6333 39.4747 12.2 38.424C9.76667 37.3733 7.65 35.9487 5.85 34.15C4.05 32.3513 2.62534 30.2347 1.576 27.8C0.526669 25.3653 0.00133586 22.7653 2.53164e-06 20C-0.0013308 17.2347 0.524003 14.6347 1.576 12.2C2.628 9.76533 4.05267 7.64867 5.85 5.85C7.64734 4.05133 9.764 2.62667 12.2 1.576C14.636 0.525334 17.236 0 20 0C22.764 0 25.364 0.525334 27.8 1.576C30.236 2.62667 32.3527 4.05133 34.15 5.85C35.9473 7.64867 37.3727 9.76533 38.426 12.2C39.4793 14.6347 40.004 17.2347 40 20C39.996 22.7653 39.4707 25.3653 38.424 27.8C37.3773 30.2347 35.9527 32.3513 34.15 34.15C32.3473 35.9487 30.2307 37.374 27.8 38.426C25.3693 39.478 22.7693 40.0027 20 40Z"
            fill="#BEF4EB" />
        </svg>

        <p class="info-text">Start the game using the Space key or using the button below. Use the Keyboard arrows to direct your snake. A random name is given to you, you can change it by clicking the player text.</p>
      </div>
      <div class="button-wrapa">
        <button id="start-game">Start Game</button>
      </div>
    </div>

  </div>

  
`;
}

export function mount(mainEl) {
  setTimeout(() => {
    initSnakeGame(mainEl);
  });
}

// export function getRules() {
//   return `
// <div style="padding:20px; color: #fff">
// <h3>Snake Rules</h3>
// <ol>
// <li>Use arrow keys to move the snake.</li>
// <li>Eat food to grow and score points.</li>
// <li>Don't run into walls or yourself.</li>
// </ol>
// </div>
// `;
// }

// export function getLeaderboard() {
//   // Simple example: read from localStorage
//   const raw = localStorage.getItem("snake-scores");
//   const scores = raw ? JSON.parse(raw) : [];
//   return `
// <div style="padding:20px; color:#fff">
// <h3>Snake Leaderboard</h3>
// <ol>
// ${scores.map((s) => `<li>${s.name}: ${s.score}</li>`).join("")}
// </ol>
// </div>
// `;
// }

// Minimal demo snake logic (very small) - replace with your full game
// function startTheSnakeGame(canvas) {
//   if (!canvas) return;
//   const ctx = canvas.getContext("2d");
//   let x = 10,
//     y = 10;
//   let vx = 1,
//     vy = 0;
//   let score = 0;

//   function step() {
//     x += vx * 10;
//     y += vy * 10;
//     ctx.fillStyle = "#041";
//     ctx.fillRect(0, 0, canvas.width, canvas.height);
//     ctx.fillStyle = "#6ee7cb";
//     ctx.fillRect(x, y, 10, 10);
//     document.getElementById("snake-score").textContent = `Score: ${score}`;
//   }

//   const id = setInterval(step, 150);
//   setTimeout(() => clearInterval(id), 5000); // demo runs 5s
// }


export default {
  view,
  mount,
  // getRules,
  // getLeaderboard,
};
