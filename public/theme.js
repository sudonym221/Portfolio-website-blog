// //localStorage.setItem('theme', 'dark-theme.css');

// document.addEventListener('DOMContentLoaded', () => {
//     const themeStylesheet = document.getElementById('theme');
//     const storedTheme = localStorage.getItem('theme');
//     if (storedTheme) {
//         themeStylesheet.href = storedTheme;
//     }
//     const themetoggle = document.getElementById('theme-toggle');

//     themetoggle.addEventListener('click', () => {
//         if (themeStylesheet.href.includes('light')) {
//             themeStylesheet.href = '/dark-theme.css';
//             themetoggle.src = '/light.svg';
//             themetoggle.title = "Light mode";
//         } else {
//             themeStylesheet.href = '/light-theme.css';
//             themetoggle.src = '/dark.svg';
//             themetoggle.title = "Dark mode";
//         }
//         localStorage.setItem('theme', themeStylesheet.href)
//     })

// })

const btn = document.querySelector("#theme-toggle");
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

const currentTheme = localStorage.getItem("theme");
if (currentTheme == "dark") {
    document.body.classList.toggle("dark-theme");
} else if (currentTheme == "light") {
    document.body.classList.toggle("light-theme");
}

btn.addEventListener("click", function () {
    if (prefersDarkScheme.matches) {
        document.body.classList.toggle("light-theme");
        var theme = document.body.classList.contains("light-theme") ?
            "light" :
            "dark";
    } else {
        document.body.classList.toggle("dark-theme");
        var theme = document.body.classList.contains("dark-theme") ?
            "dark" :
            "light";
    }
    localStorage.setItem("theme", theme);
});