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

class ProjectCard extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.shadowRoot.innerHTML = `
        <style>
            :host {
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
                gap: 1rem;
                border: var(--border);
                border-radius: var(--border-radius);
                width: clamp(40rem, 50vw, 50rem);
                justify-content: center;
            } 
                
            h2 {
                    font-size: 2rem;
                    width: 100%;
            }

            picture {
                display: flex;
                flex-direction: row;
                justify-content: center;
            }
            img {
                    width: clamp(20rem, 25vw, 50rem);
                    height: clamp(20rem, 25vw, 50rem);
                    border: var(--border);
                    border-radius: var(--border-radius);
            }

            p {
                font-size: 1rem;
                width: 100%;
                padding: 0 1rem;
            }

            a {
                border: var(--border);
                border-radius: var(--border-radius);
                background-color: var(--bg-color);
                color: var(--text-color);
                padding: 1rem;
                text-decoration: none;
                margin-bottom: 1rem;
            }
        </style>
        <h2>${this.getAttribute("title")}</h2>
        <picture>
            <img src="${this.getAttribute("src")}" alt="${this.getAttribute("alt")}">
        </picture>
        <p>${this.getAttribute("description")}</p>
        <a href="${this.getAttribute("link")}">Read More</a>
        `;
    }
}

customElements.define("project-card", ProjectCard);