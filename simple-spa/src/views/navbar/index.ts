import "../../style.css";
import { navigateTo } from "../../router.js";

export default function Navbar() {
    setTimeout(() => {
        document.getElementById("home-button")?.addEventListener("click", () => navigateTo("/"))
        document.getElementById("tictactoe-button")?.addEventListener("click", () => navigateTo("/tictactoe"))
        document.getElementById("snake-button")?.addEventListener("click", () => navigateTo("/snake"))
        document.getElementById("yatzy-button")?.addEventListener("click", () => navigateTo("/yatzy"))
    });

    return `
                <div class="navbar">
                        <button id="home-button" class="nav-button">Home</button>
                        <button id="tictactoe-button" class="nav-button">Tic Tac Toe</button>
                        <button id="snake-button" class="nav-button">Snake</button>
                        <button id="yatzy-button" class="nav-button">Yatzy</button>
                </div>
        `;
}