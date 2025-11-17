const toggleBtn = document.getElementById('theme-toggle');
const lightDarkBtn = document.getElementById('light-dark');
const pickThemeBtn = document.getElementById('theme-pick');
const themeForm = document.getElementById('theme-form')
const currentTheme = localStorage.getItem('theme');

if (currentTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
}

toggleBtn.addEventListener('click', pickTheme);
lightDarkBtn.addEventListener('click', changeLDTheme);


function pickTheme() {
    themeForm.classList.toggle('hidden');
}

function changeLDTheme() {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    document.documentElement.setAttribute('data-theme', isDark ? 'light' : 'dark');
    lightDarkBtn.textContent = isDark ? 'Light' : 'Dark';
    localStorage.setItem('theme', isDark ? 'light' : 'dark');
}