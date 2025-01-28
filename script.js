document.addEventListener('DOMContentLoaded', () => {
    // Form and feedback division selection
    const form = document.getElementById('registrationForm');
    const feedbackDiv = document.getElementById('form-feedback');
  
    // Registration form submission
    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent default form submission
  
      // Input retrieval and trimming
      const username = document.getElementById('regUsername').value.trim();
      const email = document.getElementById('regEmail').value.trim();
      const password = document.getElementById('regPassword').value.trim();
      const confirmPassword = document.getElementById('regConfirmPassword').value.trim();
  
      // Initialize validation variables
      let isValid = true;
      const messages = [];
  
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
  
      // Confirm password validation
      if (password !== confirmPassword) {
        isValid = false;
        messages.push('Passwords do not match.');
      }
  
      // Display feedback
      feedbackDiv.style.display = 'block';
      if (isValid) {
        feedbackDiv.textContent = 'Registration successful!';
        feedbackDiv.style.color = '#28a745'; // Green
        form.reset(); // Clear form inputs
      } else {
        feedbackDiv.innerHTML = messages.join('<br>'); // Display error messages
        feedbackDiv.style.color = '#dc3545'; // Red
      }
    });
  });
  