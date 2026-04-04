/* ============================================
   主题切换模块 - theme.js
   支持: dark (深色冥想), light (柔光白), nature (自然绿)
   ============================================ */
const ThemeManager = (() => {
    const THEMES = ['dark', 'light', 'nature'];
    const ICONS = { dark: '🌙', light: '☀️', nature: '🌿' };
    const STORAGE_KEY = 'sa_theme';
    let current = 'dark';

    function init() {
        const saved = localStorage.getItem(STORAGE_KEY);
        current = THEMES.includes(saved) ? saved : 'dark';
        applyTheme(current);
        setupToggle();
    }

    function applyTheme(theme) {
        current = theme;
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem(STORAGE_KEY, theme);
        // Update icon
        const iconEl = document.querySelector('#theme-toggle .theme-icon');
        if (iconEl) iconEl.textContent = ICONS[theme];
    }

    function next() {
        const idx = THEMES.indexOf(current);
        const nextTheme = THEMES[(idx + 1) % THEMES.length];
        applyTheme(nextTheme);
    }

    function setupToggle() {
        const btn = document.getElementById('theme-toggle');
        if (btn) btn.addEventListener('click', next);
    }

    function getTheme() { return current; }

    return { init, applyTheme, getTheme, next };
})();
