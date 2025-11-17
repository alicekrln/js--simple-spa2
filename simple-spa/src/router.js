// src/router.js
import Home from "./views/home/index";
import Skeleton from "./views/skeleton";
import { games, setActiveGame } from "./game-registry";


export function navigateTo(path) {
window.history.pushState({}, "", path);
renderRoute();
}


export function renderRoute() {
const path = window.location.pathname;


// Home is special: full page
if (path === "/") {
document.querySelector("#app").innerHTML = Home();
attachHomeListeners();
return;
}


// path like /snake, /tictactoe, /yatzy
const slug = path.replace(/^\//, "") || "";
const GameMeta = games[slug];


// Always render skeleton
document.querySelector("#app").innerHTML = Skeleton();


// If we have a registered game, mark it active and mount its view
if (GameMeta) {
setActiveGame(slug);
const main = document.querySelector("main");
main.innerHTML = GameMeta.view();


// Call optional mount lifecycle for the game (attach handlers, start logic)
GameMeta.mount?.(main);
} else {
// If not found, show a simple not-found message
document.querySelector("main").innerHTML = `<div style="padding:24px;color:#fff">Game not found</div>`;
}
}


window.addEventListener("popstate", renderRoute);


// Quick helper: Home click listeners (example) - adjust per your home code
function attachHomeListeners() {
setTimeout(() => {
document.getElementById('snake-logo')?.addEventListener('click', () => navigateTo('/snake'))
document.getElementById('tictactoe-logo')?.addEventListener('click', () => navigateTo('/tictactoe'))
document.getElementById('yatzy-logo')?.addEventListener('click', () => navigateTo('/yatzy'))
});
}