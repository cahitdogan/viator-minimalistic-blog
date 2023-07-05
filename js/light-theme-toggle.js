let keyValue = 0;
let storageKeyValue = localStorage.getItem('storageKeyValue');

    if (storageKeyValue == '1') {
        switchTheme();
    }

function switchTheme() {
    if (keyValue == 0) {

        const headElement = document.getElementsByTagName('HEAD')[0];
        
        const linkElement = document.createElement('link');
        
            linkElement.rel = 'stylesheet';
            linkElement.href = '/css/light-mode.css';
            linkElement.id = 'light-mode-link'
        
            headElement.insertBefore(linkElement, headElement.children[4]);
        
        keyValue = 1;
        localStorage.setItem('storageKeyValue', '1');

    } else if (keyValue == 1) {

        const headElement = document.getElementsByTagName('HEAD')[0];
        const linkElement = document.getElementById('light-mode-link');

            headElement.removeChild(linkElement);
            
        keyValue = 0;
        localStorage.setItem('storageKeyValue', '0');
    }
}