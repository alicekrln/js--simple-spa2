import "./style.css";

export default function Snake() {
    return `
        <div class="snake-container">
            <canvas id="snake-board" width="400" height="400"></canvas>
            <button id="start-snake">Start</button>
        </div>
    `;
}
