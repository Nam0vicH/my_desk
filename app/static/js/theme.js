// app/static/js/theme.js

document.addEventListener('DOMContentLoaded', () => {
    const themeSwitch = document.getElementById('theme-switch');
    const iconSun = document.getElementById('icon-sun');
    const iconMoon = document.getElementById('icon-moon');
    
    // Check saved theme or system preference
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Set initial theme
    if (savedTheme === 'light' || (!savedTheme && !systemPrefersDark)) {
        document.documentElement.setAttribute('data-theme', 'light');
        iconSun.style.display = 'none';
        iconMoon.style.display = 'block';
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        iconSun.style.display = 'block';
        iconMoon.style.display = 'none';
    }

    // Toggle theme on click
    themeSwitch.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        
        if (currentTheme === 'dark') {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
            iconSun.style.display = 'none';
            iconMoon.style.display = 'block';
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            iconSun.style.display = 'block';
            iconMoon.style.display = 'none';
        }
        // No rotation animation, just swap icons
    });
    
    // Simple tab highlighting based on current path
    const currentPath = window.location.pathname;
    const navTabs = document.querySelectorAll('.nav-tab');
    navTabs.forEach(tab => {
        if (tab.getAttribute('href') === currentPath || 
           (currentPath.startsWith('/projects') && tab.getAttribute('href') === '/projects')) {
            tab.classList.add('active');
        } else {
            tab.classList.remove('active');
        }
    });
});
