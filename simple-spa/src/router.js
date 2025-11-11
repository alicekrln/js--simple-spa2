import Home from "./views/home/index";
import TicTacToe from "./views/tictactoe/index";
import Snake from "./views/snake/index";
import Yatzy from "./views/yatzy/index";

const routes = {
    "/": Home,
    "/tictactoe": TicTacToe,
    "/snake": Snake,
    "/yatzy": Yatzy,
};

export function navigateTo(path) {
    window.history.pushState({}, '', path)
    renderRoute()
};

export function renderRoute() {
    const path = window.location.pathname;
    const view = routes[path] || Home;
    document.querySelector("#app").innerHTML = view();
};

window.addEventListener("popstate", renderRoute);