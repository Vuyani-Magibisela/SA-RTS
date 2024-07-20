// scripts.js

document.addEventListener('DOMContentLoaded', () => {
    // Collapsible sessions for mobile
    const sessions = document.querySelectorAll('.session');
    sessions.forEach(session => {
        session.addEventListener('click', () => {
            session.classList.toggle('active');
        });
    });

    // Search/filter functionality
    const searchInput = document.getElementById('search');
    searchInput.addEventListener('input', (e) => {
        const term = e.target.value.toLowerCase();
        sessions.forEach(session => {
            const title = session.querySelector('h3').textContent.toLowerCase();
            if (title.includes(term)) {
                session.style.display = 'block';
            } else {
                session.style.display = 'none';
            }
        });
    });

    // Save to 'My Schedule' functionality
    const saveButtons = document.querySelectorAll('.save-session');
    saveButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent triggering collapsible session
            const session = e.target.closest('.session');
            session.classList.toggle('saved');
            if (session.classList.contains('saved')) {
                button.textContent = 'Saved';
            } else {
                button.textContent = 'Save to My Schedule';
            }
        });
    });

    // Highlight current/upcoming sessions
    // This is a placeholder. You would implement logic to check the current time and compare with session times.

    // Toggle navigation menu
    const menuIcon = document.getElementById('menu-icon');
    const navMenu = document.getElementById('nav-menu');
    menuIcon.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
});
