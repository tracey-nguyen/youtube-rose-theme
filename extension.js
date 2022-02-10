chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.message === 'page_updated') {
        const root = document.getElementsByTagName('ytd-app')[0];
        root.style.backgroundColor = '#f9ebe9';
        document.documentElement.style.setProperty('--yt-spec-brand-background-primary', '#efcac3');
        document.documentElement.style.setProperty('--yt-spec-brand-background-solid', '#efcac3');
        document.documentElement.style.setProperty('--yt-searchbox-background', '#f9ebe9');
        document.documentElement.style.setProperty('--yt-searchbox-text-color', '#2a2626');
        document.documentElement.style.setProperty('--ytd-searchbox-legacy-button-color', '#cca498');
        document.documentElement.style.setProperty('--ytd-searchbox-legacy-button-hover-color', '#b39288');
        document.documentElement.style.setProperty('--yt-spec-brand-icon-active', '#f9ebe9');
        document.documentElement.style.setProperty('--yt-spec-brand-icon-inactive', '#876b61');
        document.documentElement.style.setProperty('--yt-spec-selected-nav-text', '#876b61');
        document.documentElement.style.setProperty('--yt-spec-text-primary', '#2a2626');
        document.documentElement.style.setProperty('--yt-swatch-icon-color', '#876b61');
        document.documentElement.style.setProperty('--yt-spec-call-to-action', '#876b61');
        document.documentElement.style.setProperty('--yt-spec-brand-subscribe-button-background', '#876b61');
        for (let i = 0; i < document.getElementsByClassName('yt-icon-button').length; i++) {
          document.getElementsByClassName('yt-icon-button')[i].style.color = '#876b61'
        }
        onPageChange();
        setInterval(onPageChange, 10000);
    }
});

function onPageChange() {
    const toggle = document.getElementsByClassName('ytp-autonav-toggle-button')[0]
    if (toggle.getAttribute('aria-checked') === 'true') {
      toggle.click();
    }
}
onPageChange();
