// script.js
const sendOTPButton = document.getElementById('sendOTP');
const mobileNumberInput = document.getElementById('mobileNumber');

sendOTPButton.addEventListener('click', () => {
    const mobileNumber = mobileNumberInput.value;

    // Validation (more robust validation needed in real app)
    if (mobileNumber.length !== 10 || isNaN(mobileNumber)) {
        alert("Please enter a valid 10-digit mobile number.");
        return;
    }

    // Store the number (In a real app, you'd store it server-side)
    localStorage.setItem('mobileNumber', mobileNumber);

    // Redirect (replace otp.html with your actual path)
    window.location.href = "otp.html";
});

