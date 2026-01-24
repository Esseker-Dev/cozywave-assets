let langContents = null;
let langBtns = null;
let langBtnMap = null;

function initLanguageElements() {
    if (langContents) return;

    langContents = document.querySelectorAll('.lang-content');
    langBtns = document.querySelectorAll('.lang-btn');

    langBtnMap = {};
    langBtns.forEach(btn => {
        const onclick = btn.getAttribute('onclick');
        if (onclick) {
            const match = onclick.match(/switchLanguage\('(\w+)'\)/);
            if (match && match[1]) {
                langBtnMap[match[1]] = btn;
            }
        }
    });
}

function switchLanguage(lang) {
    if (!['en', 'fr', 'es'].includes(lang)) return;

    // Ensure elements are cached
    if (!langContents) {
        initLanguageElements();
    }

    langContents.forEach(el => el.classList.remove('active'));
    langBtns.forEach(el => el.classList.remove('active'));

    document.getElementById('content-' + lang)?.classList.add('active');

    if (langBtnMap && langBtnMap[lang]) {
        langBtnMap[lang].classList.add('active');
    } else {
        document.querySelector(`[onclick="switchLanguage('${lang}')"]`)?.classList.add('active');
    }

    localStorage.setItem('preferredLanguage', lang);
    document.documentElement.lang = lang;
}

document.addEventListener('DOMContentLoaded', () => {
    initLanguageElements();

    const lang = localStorage.getItem('preferredLanguage');
    if (lang && ['en', 'fr', 'es'].includes(lang) && lang !== document.documentElement.lang) {
        switchLanguage(lang);
    }
});
