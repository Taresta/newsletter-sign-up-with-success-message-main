document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('newsletter-form');
    const emailError = document.getElementById('email-error');
    const emailField = document.getElementById('email');

    const newsLetterCard = document.getElementById('newsletter-form-card');
    const thankYouMessageCard = document.getElementById('thankyou-message-card');
    const userEmail = document.getElementById('user-email');

    const dismissBtn = document.querySelector('.btn.dismiss');
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        if (emailField.validity.valid) {
            emailError.textContent = ''; // Clear the error message if valid
            userEmail.textContent = emailField.value; //Change the value to display the user email.
            toggleCards();
        } else {
            showError(emailField); // Display the error message
        }
    });
    function showError(field) {
        if (field.validity.valueMissing) {
            emailError.textContent = 'Please enter your email address.';
        } else if (field.validity.typeMismatch) {
            emailError.textContent = 'Please enter a valid email address.';
        }
    }

    function toggleCards() {
        newsLetterCard.classList.toggle('hidden');
        thankYouMessageCard.classList.toggle('hidden');
    }
    dismissBtn.addEventListener('click', () => {
        emailField.value = '';
        toggleCards();
    })
});
