let theme = 'light';
const element = document.getElementsByClassName('theme')[0];
const icon = document.getElementById('theme-icon-img');

function toggleThemeMode() {
    if(theme === 'light') {
        element.classList.remove('light-theme');
        element.classList.add('dark-theme');
        icon.src = 'img/icons/sun.svg';
        theme = 'dark';
    }
    else if(theme === 'dark') {
        element.classList.remove('dark-theme');
        element.classList.add('light-theme');
        icon.src = 'img/icons/night.svg';
        theme = 'light';
    }
}