// Function to handle login form submission
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Here you can check the credentials against stored data or perform any other authentication process
    // For simplicity, let's assume authentication is successful
    alert('Login successful. Redirecting to homepage.');
    window.location.href = 'index.html'; // Redirect to homepage
});

// Function to handle signup form submission
document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Here you can store the user information in local storage or perform any other data storage process
    // For simplicity, let's just show an alert
    alert('Sign up successful. You can now login.');
});

// Function to handle forgot password form submission
document.getElementById('forgotPasswordForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;

    // Here you can implement the forgot password functionality, such as sending a reset link to the user's email
    // For simplicity, let's just show an alert
    alert('Password reset link sent to ' + email);
});