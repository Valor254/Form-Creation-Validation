document.addEventListener('DOMContentLoaded', () => {
    // Select the form and feedback division
    const form = document.getElementById('registration-form'); // Ensures "registration-form" is used
    const feedbackDiv = document.getElementById('form-feedback'); // Ensures "form-feedback" is selected
  
    // Add event listener for form submission
    form.addEventListener('submit', function (event) {
      event.preventDefault(); // Prevent default form submission
  
      // Retrieve and trim input values
      const username = document.getElementById('username').value.trim();
      const email = document.getElementById('email').value.trim();
      const password = document.getElementById('password').value.trim();
  
      // Initialize validation status and messages
      let isValid = true; // Tracks if all inputs are valid
      const messages = []; // Stores error messages
  
      // Username validation
      if (username.length < 3) {
        isValid = false;
        messages.push('Username must be at least 3 characters long.');
      }
  
      // Email validation
      if (!email.includes('@') || !email.includes('.')) {
        isValid = false;
        messages.push('Please enter a valid email address.');
      }
  
      // Password validation
      if (password.length < 8) {
        isValid = false;
        messages.push('Password must be at least 8 characters long.');
      }
  
      // Feedback display logic
      feedbackDiv.style.display = 'block'; // Ensure feedbackDiv is visible
      if (isValid) {
        feedbackDiv.textContent = 'Registration successful!'; // Success message
        feedbackDiv.style.color = '#28a745'; // Green color for success
        form.reset(); // Reset the form on success
      } else {
        feedbackDiv.innerHTML = messages.join('<br>'); // Display error messages with line breaks
        feedbackDiv.style.color = '#dc3545'; // Red color for errors
      }
    });
  });
  