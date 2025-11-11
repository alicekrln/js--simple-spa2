import "../../style.css";
import { navigateTo } from "../../router.js";

export default function Home() {
    setTimeout(() => {
        document.getElementById('tictactoe-logo')?.addEventListener('click', () => navigateTo('/tictactoe'))
        document.getElementById('snake-logo')?.addEventListener('click', () => navigateTo('/snake'))
        document.getElementById('yatzy-logo')?.addEventListener('click', () => navigateTo('/yatzy'))
    });
    
    return `
        <div class="home">
            <span id="snake-logo" class="game-emoji" role="img" aria-label="Snake">🐍</span>
            <span id="tictactoe-logo" class="game-emoji" role="img" aria-label="Tic Tac Toe">✖️⭕</span>
            <span id="yatzy-logo" class="game-emoji" role="img" aria-label="Yatzy">🎲</span>
        </div>
        <h1>The Three Games</h1>
        <p class="footer">Click on the emoji to start the game</p>
    `;
}