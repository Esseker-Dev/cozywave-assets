function switchLanguage(lang) {
    if (!['en', 'fr', 'es'].includes(lang)) return;

    document.querySelectorAll('.lang-content').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('.lang-btn').forEach(el => el.classList.remove('active'));

    document.getElementById('content-' + lang)?.classList.add('active');
    document.getElementById('lang-btn-' + lang)?.classList.add('active');

    localStorage.setItem('preferredLanguage', lang);
    document.documentElement.lang = lang;
}

document.addEventListener('DOMContentLoaded', () => {
    const lang = localStorage.getItem('preferredLanguage');
    if (lang && ['en', 'fr', 'es'].includes(lang) && lang !== document.documentElement.lang) {
        switchLanguage(lang);
    }
});
