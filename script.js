const toggleBtn = document.getElementById('theme-toggle');
const lightDarkBtn = document.getElementById('light-dark');
const themeForm = document.getElementById('theme-form');
const pickThemeBtn = document.getElementById('theme-pick');
const currentTheme = localStorage.getItem('theme');

if (currentTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
}

toggleBtn.addEventListener('click', pickTheme);
lightDarkBtn.addEventListener('click', changeLDTheme);
pickThemeBtn.addEventListener('click', customTheme);
document.addEventListener('click', hideForm);

function hideForm(event) {
    if (!themeForm.contains(event.target) && event.target !== toggleBtn) {
        themeForm.classList.add('hidden');
    }
}

function pickTheme() {
    themeForm.classList.toggle('hidden');
}

function changeLDTheme() {
    /* Remove any custom theme attributes, before applying LD mode */
    document.documentElement.classList.remove("custom-theme");

    /* Check for light and dark settings */
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    document.documentElement.setAttribute('data-theme', isDark ? 'light' : 'dark');
    lightDarkBtn.textContent = isDark ? 'Dark' : 'Light';
    localStorage.setItem('theme', isDark ? 'light' : 'dark');
}

function customTheme() {
    /* Get user custom theme elements */
    let backgroundColor = themeForm.elements["background-color"].value;
    let textColor = themeForm.elements["text-color"].value;
    let textFont = themeForm.elements["text-font"].value;

    /* Set these attributes */
    document.documentElement.style.setProperty("--custom-bg-color", backgroundColor);
    document.documentElement.style.setProperty("--custom-text-color", textColor);
    document.documentElement.style.setProperty("--custom-text-font", textFont);

    /* Apply the custom theme styling */
    document.documentElement.classList.add("custom-theme");

    const custom = {
        bg: backgroundColor,
        text: textColor,
        font: textFont
    };
    localStorage.setItem('theme', JSON.stringify(custom));
    themeForm.classList.add('hidden');
}