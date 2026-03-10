// js/dashboard.js
document.addEventListener('DOMContentLoaded', () => {
    // Monthly Revenue Chart
    const revCtx = document.getElementById('revenueChart').getContext('2d');
    new Chart(revCtx, {
        type: 'line',
        data: {
            labels:['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets:[{
                label: 'Revenue ($)',
                data:[12000, 19000, 15000, 22000, 18000, 25000],
                borderColor: '#F97316',
                backgroundColor: 'rgba(249, 115, 22, 0.1)',
                borderWidth: 2,
                fill: true,
                tension: 0.4
            }]
        },
        options: { responsive: true }
    });

    // Service Distribution Chart
    const servCtx = document.getElementById('serviceChart').getContext('2d');
    new Chart(servCtx, {
        type: 'doughnut',
        data: {
            labels:['Oil Change', 'Brake Pad', 'Engine Repair', 'Tire Rotation'],
            datasets:[{
                data: [40, 25, 20, 15],
                backgroundColor:['#1F2933', '#F97316', '#10B981', '#F59E0B']
            }]
        },
        options: { responsive: true }
    });
});