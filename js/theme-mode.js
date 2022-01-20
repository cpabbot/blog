let theme = 'light';
let cachedTheme = localStorage.getItem("theme");
const element = document.getElementsByClassName('theme')[0];
const icon = document.getElementById('theme-icon-img');

if(cachedTheme) theme = cachedTheme;
updateTheme();

function toggleThemeMode() {
    if(theme === 'light') {
        theme = 'dark';
        localStorage.setItem("theme", "dark");
    }
    else if(theme === 'dark') {
        theme = 'light';
        localStorage.setItem("theme", "light");
    }
    updateTheme();
}

function updateTheme() {
    if(theme === 'light') {
        element.classList.remove('dark-theme');
        element.classList.add('light-theme');
        icon.src = '/img/icons/night.svg';
    }
    else if(theme === 'dark') {
        element.style.transition = "none";
        element.classList.remove('light-theme');
        element.classList.add('dark-theme');
        icon.src = '/img/icons/sun.svg';
    }
}
