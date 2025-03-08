
function loadAllCSS() {
    // List all your CSS files without the .css extension
    const files = ['style', 'nav', 'home', 'bio', 'contact']; // Add more as needed
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
        .then(html => {
            const pageContainer = document.getElementById('page');
            if (pageContainer) {
                pageContainer.innerHTML = html;

                // If the loaded page is the bio page (you can check by a unique element id, e.g., if #bio exists), then load the default tab content.
                if (document.getElementById('bio')) {
                    loadTabContent('education');
                }
            }
        })
        .catch(error => {
            console.error("Error loading page:", error);
        });;
}