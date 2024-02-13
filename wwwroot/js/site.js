// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.
// Write your JavaScript code.
var sidebarToggle = document.getElementById('sidebar-toggle');
var mediaQuery = window.matchMedia('(min-width: 768px)');
function handleSidebarToggle(mediaQuery) {
    if (mediaQuery.matches) {
        sidebarToggle.checked = true;
    }
    else {
        sidebarToggle.checked = false;
    }
}
// Initial check on page load
handleSidebarToggle(mediaQuery);
// Listen for screen resize
mediaQuery.addEventListener('change', handleSidebarToggle);
//# sourceMappingURL=site.js.map