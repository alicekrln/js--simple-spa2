import "./home.css"
import { navigateTo } from "../../router.js";

export default function Home() {
    setTimeout(() => {
        document.getElementById('tictactoe-logo')?.addEventListener('click', () => navigateTo('/tictactoe'))
        document.getElementById('snake-logo')?.addEventListener('click', () => navigateTo('/snake'))
        document.getElementById('yatzy-logo')?.addEventListener('click', () => navigateTo('/yatzy'))
    });
    
    return `
        <div class="container">
            <div class="game-logos">
               
                <img src="../../../assets/Logo-Snake.png" id="snake-logo" class="game-emoji snake" alt="Snake Game"/>

                <img src="../../../assets/Logo-TicTacToe.png" id="tictactoe-logo" class="game-emoji tictactoe" alt="Tic Tac Toe Game"/>

                <img src="../../../assets/Logo-Yatzy.png" id="yatzy-logo" class="game-emoji yatzy" alt="Yatzy Game"/>

            </div>
            <h1 class="project-title">Game Hub</h1>
            <footer class="click-to-start">Click on the emoji to start the game</footer>
        </div>
    `;
}