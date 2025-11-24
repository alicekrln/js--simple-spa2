// src/theme-manager.js
import { games } from './game-registry';


export function applyTheme(themeObj) {
if (!themeObj) return;
const root = document.documentElement;
Object.entries(themeObj).forEach(([k, v]) => root.style.setProperty(k, v));
}


export function applyThemeFor(slug) {
const meta = games[slug];
if (!meta) return;
applyTheme(meta.theme || {});
}