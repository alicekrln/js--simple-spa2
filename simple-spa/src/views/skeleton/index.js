
import "./skeleton.css"
import { navigateTo } from "../../router.js";





export default function Skeleton() {
  
  setTimeout(() => {
    document.getElementById('back-home')?.addEventListener('click', () => navigateTo('/'))
  });

  return `
   
    <div class="game">
      <nav>
        <button id="back-home">
          <img src="../../../assets/Icon-Home.svg" class="home" alt="home"/>
          <span>Home</span>
        </button>

        <div> 
          <button id="game-rules">
            <img src="../../../assets/Icon-GameRules.svg" class="gameRules" alt="game rules"/>
            <span>Game Rules</span>
          </button>
          <button id="leaderboard">
            <img src="../../../assets/Icon-Leaderboard.svg" class="leaderboard" alt="leaderboard"/>
            <span>leaderboard</span>
          </button>
          <button id="audio-toggle">
            <img src="../../../assets/Icon-SoundOn.svg" class="audioToggle" alt="audio"/>
            <span>audio</span>
          </button>
          <button id="settings">
            <img src="../../../assets/Icon-Settings.svg" class="settings" alt="settings"/>
            <span>settings</span>
          </button>

        </div>
      </nav>

      <main>

      </main>

      <footer> Made with love by Async & Furious </footer>
      
    </div>
  `
};