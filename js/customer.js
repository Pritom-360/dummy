// js/customers.js
document.addEventListener('DOMContentLoaded', () => {
    // Search filtering logic
    const searchInput = document.getElementById('searchCustomer');
    const tableRows = document.querySelectorAll('#customerTableBody tr');

    if(searchInput) {
        searchInput.addEventListener('keyup', (e) => {
            const term = e.target.value.toLowerCase();
            tableRows.forEach(row => {
                const text = row.textContent.toLowerCase();
                row.style.display = text.includes(term) ? '' : 'none';
            });
        });
    }
});