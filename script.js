document.getElementById('paymentForm').addEventListener('submit', function(event)

{
    event.preventDefault();

    // Get form values
    const cardName = document.getElementById('cardName').value;
    const cardNumber = document.getElementById('cardNumber').value;
    const expMonth = document.getElementById('expMonth').value;
    const expYear = document.getElementById('expYear').value;
    const cvv = document.getElementById('cvv').value;

    // Basic validation
    if (!cardName || !cardNumber || !expMonth || !expYear || !cvv) {
        showMessage('Please fill in all fields', 'error');
        return;
    }
	
    if (!validateCardNumber(cardNumber)) {
        showMessage('Invalid card number', 'error');
        return;
    }

    showMessage('Payment submitted successfully', 'success');
});

function validateCardNumber(number) {
    // Simple regex for validating card number (Luhn algorithm is recommended for real-world use)
    return /^\d{16}$/.test(number);
}

function showMessage(message, type) {
    const messageDiv = document.getElementById('message');
    messageDiv.textContent = message;
    messageDiv.className = type;
}
