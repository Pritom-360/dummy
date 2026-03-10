// js/app.js
document.addEventListener('DOMContentLoaded', () => {
    // Sidebar Toggle
    const sidebar = document.getElementById('sidebar');
    const mainWrapper = document.getElementById('main-wrapper');
    const toggleBtnDesktop = document.getElementById('sidebar-toggle');
    
    if (toggleBtnDesktop) {
        toggleBtnDesktop.addEventListener('click', () => {
            if (window.innerWidth > 768) {
                sidebar.classList.toggle('collapsed');
                mainWrapper.classList.toggle('expanded');
            } else {
                sidebar.classList.toggle('mobile-open');
            }
        });
    }

    // Set Active Link based on current page
    const currentPath = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.sidebar-menu a');
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPath || (currentPath === '' && href === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});

// Global Function to show Modals using SweetAlert2
function showAddModal(title, text) {
    Swal.fire({
        title: title,
        text: text,
        icon: 'info',
        confirmButtonColor: '#F97316',
        confirmButtonText: 'Proceed'
    });
}