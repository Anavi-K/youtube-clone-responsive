document.addEventListener('DOMContentLoaded', function () {
    const toggleBtn = document.querySelector('.toggle-btn');
    const overlay = document.getElementById('overlay');
    const sidebarContainer = document.getElementById('sidebar-container');

    toggleBtn.addEventListener('click', function () {
        document.body.classList.toggle('sidebar-open');
    });

    overlay.addEventListener('click', function () {
        document.body.classList.remove('sidebar-open');
    });
});