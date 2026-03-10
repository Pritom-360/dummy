// js/customer-app.js
document.addEventListener('DOMContentLoaded', () => {
    // Sidebar Toggle
    const sidebar = document.getElementById('sidebar');
    const toggleBtn = document.getElementById('sidebar-toggle');
    if (toggleBtn) {
        toggleBtn.addEventListener('click', () => {
            sidebar.classList.toggle('mobile-open');
        });
    }

    // Floating Chat Toggle
    const chatBtn = document.getElementById('aiChatBtn');
    const chatWindow = document.getElementById('chatWindow');
    const closeChat = document.getElementById('closeChat');
    
    if (chatBtn && chatWindow) {
        chatBtn.addEventListener('click', () => {
            chatWindow.style.display = chatWindow.style.display === 'block' ? 'none' : 'block';
        });
        closeChat.addEventListener('click', () => {
            chatWindow.style.display = 'none';
        });
    }
});

// Mock Payment Gateway function using SweetAlert2
function initiatePayment(method, amount, invoiceId) {
    let color = method === 'bKash' ? '#E2136E' : method === 'Nagad' ? '#F7931E' : '#1F2933';
    
    Swal.fire({
        title: `Pay via ${method}`,
        text: `Proceed to pay ${amount} for Invoice ${invoiceId}?`,
        icon: 'info',
        showCancelButton: true,
        confirmButtonColor: color,
        confirmButtonText: `Proceed to ${method}`
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire('Success!', 'Payment recorded successfully.', 'success');
            // Update UI dynamically in a real app
        }
    });
}