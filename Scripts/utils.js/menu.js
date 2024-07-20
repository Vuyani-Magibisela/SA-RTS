// Toggle navigation menu
document.addEventListener('DOMContentLoaded', () => {
        // Toggle navigation menu
        const menuIcon = document.getElementById('menu-icon');
        const navMenu = document.getElementById('nav-menu');
        menuIcon.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            navMenu.style.width = "250px";
        });

    });
    