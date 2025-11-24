import './skeleton.css';
import { navigateTo } from '../../router';
import { getActiveGame } from '../../game-registry';
import { games } from '../../game-registry';


export default function Skeleton() {
// delay attaching listeners until after DOM insertion
setTimeout(() => {
document.getElementById('back-home')?.addEventListener('click', () => navigateTo('/'));
document.getElementById('game-rules')?.addEventListener('click', () => {
const active = getActiveGame();
const provider = games[active]?.getRules;
const main = document.querySelector('main');
main.innerHTML = provider ? provider() : `<div style="padding:20px">No rules available</div>`;
});


document.getElementById('leaderboard')?.addEventListener('click', () => {
const active = getActiveGame();
const provider = games[active]?.getLeaderboard;
const main = document.querySelector('main');
main.innerHTML = provider ? provider() : `<div style="padding:20px">No leaderboard available</div>`;
});
});


return `
   
    <div class="kotaina">
      <nav class="skeleton-nav">
        <button id="back-home" class="skeleton-btn">
          <img src="../../../assets/Icon-Home.svg" class="home" alt="home"/>
          <span>Home</span>
        </button>

        <div class="group-settings"> 
          <button id="game-rules" class="skeleton-btn">
            <img src="../../../assets/Icon-GameRules.svg" class="gameRules" alt="game rules"/>
            <span>Game Rules</span>
          </button>
          <button id="leaderboard" class="skeleton-btn">
            <img src="../../../assets/Icon-Leaderboard.svg" class="leaderboard" alt="leaderboard"/>
            <span>leaderboard</span>
          </button>
          <button id="audio-toggle" class="skeleton-btn">
            <img src="../../../assets/Icon-SoundOn.svg" class="audioToggle" alt="audio"/>
            <span>audio</span>
          </button>
          <button id="settings" class="skeleton-btn">
            <img src="../../../assets/Icon-Settings.svg" class="settings" alt="settings"/>
            <span>settings</span>
          </button>

        </div>
      </nav>

      <main class="skeleton-main">

      </main>

      <footer class="skeleton-footer"> Made with love by Async & Furious </footer>
      
    </div>
  `;
}