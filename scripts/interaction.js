// Remove direct global bindings; we’ll use delegation instead

function opentab(e, tabname) {
    // Get all tab links and contents from the current document
    let tablinks = document.getElementsByClassName("tab-links");
    let tabcontents = document.getElementsByClassName("tab-contents");

    // Remove active classes from every tab link and content
    for (let link of tablinks) {
        link.classList.remove("active-link");
    }
    for (let content of tabcontents) {
        content.classList.remove("active-tab");
    }

    // Add active class to the clicked tab link and its corresponding tab content
    e.currentTarget.classList.add("active-link");
    let targetContent = document.getElementById(tabname);
    if (targetContent) {
        targetContent.classList.add("active-tab");
    }
    // Save the state to localStorage so it persists after reloads
    localStorage.setItem("activeTab", tabname);
}

// Global event delegation to catch clicks on elements with class "tab-links"
document.addEventListener("click", function(e) {
    if (e.target.classList.contains("tab-links")) {
        // Assume each tab link has a data attribute that stores its target tab id.
        // For example: <a class="tab-links" data-tab="aboutTab">About</a>
        let tabname = e.target.getAttribute("data-tab");
        if (tabname) {
            opentab(e, tabname);
        }
    }
});

function openmenu(){
    var sidemenu = document.getElementById("sidemenu");
    sidemenu.style.right = "0px";
}

function closemenu(){
    var sidemenu = document.getElementById("sidemenu");
    sidemenu.style.right = "-200px";
}

// Optionally, reapply the saved state when new content loads
function applySavedTabState() {
    let activeTab = localStorage.getItem("activeTab");
    if (activeTab) {
        // Find the tab link corresponding to saved state and simulate a click.
        // This assumes each tab-link has a data-tab attribute matching the id of its tab content.
        let tabLink = document.querySelector(`.tab-links[data-tab="${activeTab}"]`);
        if (tabLink) {
            // Create a synthetic event and call opentab manually
            let e = new Event("click");
            // Directly call opentab with the synthetic event and saved tab name
            opentab({ currentTarget: tabLink, target: tabLink }, activeTab);
        }
    }
}

// Call applySavedTabState after new content loads.
// For example, after your loadPage() has finished fetching new content:
document.addEventListener("DOMContentLoaded", function() {
    applySavedTabState();
});
// var tablinks = document.getElementsByClassName("tab-links");
// var tabcontents = document.getElementsByClassName("tab-contents");

// function opentab(tabname) {
//     for(tablink of tablinks) {
//         tablink.classList.remove("active-link");
//     }
//     for(tabcontent of tabcontents) {
//         tabcontent.classList.remove("active-tab");
//     }
//     event.currentTarget.classList.add("active-link");
//     document.getElementById(tabname).classList.add("active-tab");
// }

// function openmenu(){
//     var sidemenu = document.getElementById("sidemenu");
//     sidemenu.style.right = "0px";
// }

// function closemenu(){
//     var sidemenu = document.getElementById("sidemenu");
//     sidemenu.style.right = "-200px";
// }