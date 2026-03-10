// js/workorders.js
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchWorkOrder');
    const statusFilter = document.getElementById('statusFilter');
    const tableRows = document.querySelectorAll('#workOrderTableBody tr');

    function filterTable() {
        const term = searchInput.value.toLowerCase();
        const status = statusFilter.value;

        tableRows.forEach(row => {
            const text = row.textContent.toLowerCase();
            const rowStatus = row.getAttribute('data-status');
            
            const matchesSearch = text.includes(term);
            const matchesStatus = (status === 'all' || rowStatus === status);

            if (matchesSearch && matchesStatus) {
                row.style.display = '';
            } else {
                row.style.display = 'none';
            }
        });
    }

    if(searchInput) searchInput.addEventListener('keyup', filterTable);
    if(statusFilter) statusFilter.addEventListener('change', filterTable);
});