// src/game-registry.js
import Snake from "./views/snake/index";
import TicTacToe from "./views/tictactoe/index";
import Yatzy from "./views/yatzy/index";


// Themes are simple objects that the theme manager will apply
export const themes = {
snake: {
"--primary": '#1abc9c',
"--bg": '#0b3a2e',
"--accent": '#6ee7cb'
},
tictactoe: {
"--primary": '#e74c3c',
"--bg": '#2b0f0f',
"--accent": '#ffb3a7'
},
yatzy: {
"--primary": '#8e44ad',
"--bg": '#1a0e1b',
"--accent": '#d4a6e6'
}
};


let activeGame = null;


export function setActiveGame(slug) {
activeGame = slug;
// Apply theme automatically when activeGame changes
import('./theme-manager').then(mod => mod.applyThemeFor(activeGame));
}


export function getActiveGame() {
return activeGame;
}


export const games = {
snake: {
view: Snake.view, // should return HTML string
mount: Snake.mount, // optional: function(mainEl) { ... }
theme: themes.snake,
getRules: Snake.getRules, // optional
getLeaderboard: Snake.getLeaderboard // optional
},


tictactoe: {
view: TicTacToe.view,
mount: TicTacToe.mount,
theme: themes.tictactoe,
getRules: TicTacToe.getRules,
getLeaderboard: TicTacToe.getLeaderboard
},


yatzy: {
view: Yatzy.view,
mount: Yatzy.mount,
theme: themes.yatzy,
getRules: Yatzy.getRules,
getLeaderboard: Yatzy.getLeaderboard
}
};


export default games;