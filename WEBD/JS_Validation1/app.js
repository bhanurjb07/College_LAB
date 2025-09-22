function validateForm() {
    // Clear previous error messages
    document.getElementById('nameError').textContent = '';
    document.getElementById('passwordError').textContent = '';

    // Get form values
    const name = document.getElementById('name').value.trim();
    const password = document.getElementById('password').value;

    let isValid = true;

    // 1. Name validation
    // Name should contain only alphabets and be at least 6 characters long.
    const nameRegex = /^[A-Za-z\s]+$/;
    if (name.length < 6) {
        document.getElementById('nameError').textContent = 'Name must be at least 6 characters long.';
        isValid = false;
    } else if (!nameRegex.test(name)) {
        document.getElementById('nameError').textContent = 'Name must contain only alphabets and spaces.';
        isValid = false;
    }

    // 2. Password validation
    // Password should not be less than 6 characters long.
    if (password.length < 6) {
        document.getElementById('passwordError').textContent = 'Password must be at least 6 characters long.';
        isValid = false;
    }

    // Return true if the form is valid, false otherwise.
    // Returning false prevents the form from being submitted.
    return isValid;
}