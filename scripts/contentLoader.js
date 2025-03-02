
function loadAllCSS() {
    // List all your CSS files without the .css extension
    const files = ['style', 'nav', 'home', 'about', 'contact']; // Add more as needed
    const head = document.querySelector('head');
    
    files.forEach(file => {
        let link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'css/' + file + '.css';
        head.appendChild(link);
    });
}

function loadNav() {
    fetch('../components/nav.html')
        .then(response => response.text())
        .then(data => {
            document.querySelector('nav').innerHTML = data;
        });
}

function loadPage(page) {
    fetch("../pages/" + page + ".html")
        .then(response => response.text())
        .then(data => {
            document.getElementById('page').innerHTML = data;
            applySavedTabState();
        });
}