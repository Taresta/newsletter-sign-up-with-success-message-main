document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('newsletter-form');
    const emailError = document.getElementById('email-error');
    const emailField = document.getElementById('email');
    const newsLetterCard = document.querySelector('.newsletter-form-card');
    const thankYouMessageCard = document.querySelector('.thankyou-message-card');
    const userEmail = document.getElementById('user-email');
    const dismissBtn = document.querySelector('.btn.dismiss');

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (emailField.validity.valid) {
           hideError();
            userEmail.textContent = emailField.value; //Change the value to display the user email.
            emailField.classList.remove('invalid'); //Remove the invalid class from the emailField
            toggleCards();
        } else {
            emailField.classList.add('invalid'); //Add the invalid class to the emailField
            showError(emailField); // Display the error message
        }
    }
    const handleDismiss = () => {
        emailField.value = '';
        toggleCards();
    }
    const handleInputChange = () => {
        if (emailField.classList.contains('invalid')) {
            emailField.classList.remove('invalid');
            hideError();
        }
    }
    function showError(field) {
        emailError.classList.remove('hidden'); //Show the error field
        emailError.textContent = 'Valid email required.';
    }
    function hideError() {
        emailError.classList.add('hidden'); //Hide error field
        emailError.textContent = ''; // Clear the error message if valid
    }
    function toggleCards() {
        newsLetterCard.classList.toggle('hidden');
        thankYouMessageCard.classList.toggle('hidden');
    }
    form.addEventListener('submit', handleFormSubmit);
    dismissBtn.addEventListener('click', handleDismiss);
    emailField.addEventListener('change', handleInputChange);
});

