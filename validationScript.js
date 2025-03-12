// JavaScript code for form validation

// Select form elements
const form = document.getElementById('myForm');
const inputField = document.getElementById('inputField');

form.addEventListener('submit', function(event) {
    // Retrieve the input field value
    const inputValue = inputField.value;

    // Regular expression pattern for alphanumeric input
    const alphanumericRegex = /^[a-zA-Z0-9]+$/;

    // Check if the input value matches the pattern
    if (alphanumericRegex.test(inputValue)) {
        // Valid input: display confirmation and submit the form
        alert('Form submitted successfully!');
        form.submit();  // Submit the form when valid
    } else {
        // Invalid input: display error message
        alert('Error: Input must be alphanumeric.');
        event.preventDefault();  // Prevent form submission
    }
});
