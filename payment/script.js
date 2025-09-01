let currentStep = 1;

// Update progress bar
function updateProgressBar() {
    document.querySelectorAll('.progress-step').forEach(step => {
        step.classList.remove('active', 'completed');
    });
    for (let i = 1; i <= 4; i++) {
        const stepElement = document.getElementById('step' + i);
        if (i < currentStep) stepElement.classList.add('completed');
        else if (i === currentStep) stepElement.classList.add('active');
    }
}

// Show the current step
function showStep(stepNumber) {
    document.querySelectorAll('.step-content').forEach(content => {
        content.classList.remove('active');
    });
    document.getElementById(['cart-step', 'info-step', 'payment-step', 'confirmation-step'][stepNumber - 1])
        .classList.add('active');
}

// Navigation
function nextStep(next) {
    currentStep = next;
    updateProgressBar();
    showStep(currentStep);
}
function prevStep(prev) {
    currentStep = prev;
    updateProgressBar();
    showStep(currentStep);
}

// Payment method selection
document.querySelectorAll('.payment-method').forEach(method => {
    method.addEventListener('click', function () {
        document.querySelectorAll('.payment-method').forEach(m => m.classList.remove('selected'));
        this.classList.add('selected');
    });
});

// Simulate payment processing
function processPayment() {
    setTimeout(() => nextStep(4), 1500);
}

// Go to order page
function goToOrderPage() {
    alert("Redirecting to order details page...");
    // window.location.href = "order-details.html";
}

// Initialize
updateProgressBar();
showStep(currentStep);

// Cart quantity controls
document.querySelectorAll('.quantity-btn').forEach(btn => {
    btn.addEventListener('click', function () {
        const input = this.parentElement.querySelector('.quantity-input');
        let value = parseInt(input.value);
        if (this.textContent === '+') input.value = value + 1;
        else if (this.textContent === '-' && value > 1) input.value = value - 1;
        updateCartSummary();
    });
});

// Remove item
document.querySelectorAll('.remove-item').forEach(btn => {
    btn.addEventListener('click', function () {
        this.closest('.cart-item').remove();
        updateCartSummary();
    });
});

// Update cart summary (placeholder)
function updateCartSummary() {
    console.log("Cart updated");
}
