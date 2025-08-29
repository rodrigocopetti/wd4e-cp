// Signup Page JS

document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('.signup-form');
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    const username = form.username.value.trim();
    const email = form.email.value.trim();
    const password = form.password.value;
    const confirmPassword = form['confirm-password'].value;

    // Simple validation
    if (password !== confirmPassword) {
      alert('Passwords do not match.');
      return;
    }
    if (username.length < 3) {
      alert('Username must be at least 3 characters.');
      return;
    }
    if (!email.match(/^\S+@\S+\.\S+$/)) {
      alert('Please enter a valid email address.');
      return;
    }
    if (password.length < 6) {
      alert('Password must be at least 6 characters.');
      return;
    }

    // Simulate successful registration
    alert('Account created successfully!');
    form.reset();
  });
});
