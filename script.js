// Sidebar toggle
const sidebar = document.getElementById('sidebar');
const openSidebarBtn = document.getElementById('openSidebar');
const closeSidebarBtn = document.getElementById('closeSidebar');

openSidebarBtn.addEventListener('click', () => {
    sidebar.classList.add('active');
});

closeSidebarBtn.addEventListener('click', () => {
    sidebar.classList.remove('active');
});

// Submenu toggle
const submenus = document.querySelectorAll('.submenu > a');

submenus.forEach(menu => {
    menu.addEventListener('click', (e) => {
        e.preventDefault();
        const submenuList = menu.nextElementSibling;
        submenuList.style.display = (submenuList.style.display === 'block') ? 'none' : 'block';
        
        const arrow = menu.querySelector('.arrow');
        if (submenuList.style.display === 'block') {
            arrow.innerHTML = '&#9660;'; // Down arrow
        } else {
            arrow.innerHTML = '&#9654;'; // Right arrow
        }
    });
});
