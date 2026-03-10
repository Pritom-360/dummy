// js/reports.js
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Monthly Revenue Chart (Bar)
    const revCtx = document.getElementById('monthlyRevenueChart');
    if(revCtx) {
        new Chart(revCtx.getContext('2d'), {
            type: 'bar',
            data: {
                labels:['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                datasets:[{
                    label: 'Gross Revenue ($)',
                    data:[12000, 19000, 15000, 22000, 18000, 25000, 21000, 24000, 26000, 23000, 27000, 31000],
                    backgroundColor: '#1F2933',
                    borderRadius: 4
                }]
            },
            options: { responsive: true, maintainAspectRatio: false }
        });
    }

    // 2. Worker Performance (Polar Area or Bar)
    const workerCtx = document.getElementById('workerPerformanceChart');
    if(workerCtx) {
        new Chart(workerCtx.getContext('2d'), {
            type: 'bar',
            data: {
                labels: ['Mike J.', 'David S.', 'Sarah C.', 'Tom B.'],
                datasets: [{
                    label: 'Jobs Completed',
                    data:[45, 38, 52, 29],
                    backgroundColor: '#F97316',
                    borderRadius: 4
                }]
            },
            options: { responsive: true }
        });
    }

    // 3. Inventory Usage (Pie/Doughnut)
    const invCtx = document.getElementById('inventoryUsageChart');
    if(invCtx) {
        new Chart(invCtx.getContext('2d'), {
            type: 'pie',
            data: {
                labels:['Synthetic Oil', 'Oil Filters', 'Brake Pads', 'Spark Plugs', 'Wiper Blades'],
                datasets: [{
                    data:[300, 300, 150, 200, 80],
                    backgroundColor:['#1F2933', '#F97316', '#10B981', '#F59E0B', '#EF4444']
                }]
            },
            options: { responsive: true }
        });
    }
});