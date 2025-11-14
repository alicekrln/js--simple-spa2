import Home from "./views/home/index";
import TicTacToe from "./views/tictactoe/index";
import Snake from "./views/snake/index";
import Yatzy from "./views/yatzy/index";
import Skeleton from "./views/skeleton";

const routes = {
    "/": Home,
    "/tictactoe": TicTacToe,
    "/snake": Snake,
    "/yatzy": Yatzy,
};

export function navigateTo(path) {
    window.history.pushState({}, "", path);
    renderRoute();
}

// export function renderRoute() {
//     const path = window.location.pathname;
//     const View = routes[path] || Home;

//     // ALWAYS RENDER THE BASE SKELETON
//     document.querySelector("#app").innerHTML = Skeleton();

//     // INSERT THE VIEW INSIDE <main> of skeleton
//     const main = document.querySelector("main");
//     main.innerHTML = View();   // <--- this is where the game UI is mounted
// }

export function renderRoute() {
    const path = window.location.pathname;
    const View = routes[path] || Home;

    if (path === "/") {
        document.querySelector("#app").innerHTML = View();
        return;
    }

    // All other pages use Skeleton
    document.querySelector("#app").innerHTML = Skeleton();
    document.querySelector("main").innerHTML = View();
}

window.addEventListener("popstate", renderRoute);