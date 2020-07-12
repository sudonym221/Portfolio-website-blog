//localStorage.setItem('theme', 'dark-theme.css');

document.addEventListener('DOMContentLoaded', () => {
    const themeStylesheet = document.getElementById('theme');
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
        themeStylesheet.href = storedTheme;
    }
    const themetoggle = document.getElementById('theme-toggle');

    themetoggle.addEventListener('click', () => {
        if (themeStylesheet.href.includes('light')) {
            themeStylesheet.href = '/dark-theme.css';
            themetoggle.src = '/light.svg';
            themetoggle.title = "Light mode";
        } else {
            themeStylesheet.href = '/light-theme.css';
            themetoggle.src = '/dark.svg';
            themetoggle.title = "Dark mode";
        }
        localStorage.setItem('theme', themeStylesheet.href)
    })

})