const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const moonIcon = themeToggle.querySelector('.moonSvg');
const sunIcon = themeToggle.querySelector('.sunSvg');

themeToggle.addEventListener('click', () => {
  // Toggle dark mode on body
  body.classList.toggle('dark');

  // Toggle visibility of moon and sun icons
  moonIcon.style.display = body.classList.contains('dark') ? 'none' : 'block';
  sunIcon.style.display = body.classList.contains('dark') ? 'block' : 'none';

  // Save user's preference in localStorage
  const isDarkMode = body.classList.contains('dark');
  localStorage.setItem('dark', isDarkMode.toString());
});

// Check user's preference from localStorage
const savedDarkMode = localStorage.getItem('dark');
if (savedDarkMode === 'true' || savedDarkMode === 'false') {
  body.classList.toggle('dark', savedDarkMode === 'true');
  moonIcon.style.display = savedDarkMode === 'true' ? 'none' : 'block';
  sunIcon.style.display = savedDarkMode === 'true' ? 'block' : 'none';
}

// Function to handle form submission
async function handleFormSubmit(event) {
    event.preventDefault();

    // Get form data using FormData
    const formData = new FormData(event.target);

    // Extract email and password from form data
    const email = formData.get('email');
    const password = formData.get('password');

    // Check for duplicate email in local storage
    const storedData = JSON.parse(localStorage.getItem('registeredUsers')) || [];
    const isDuplicate = storedData.some(user => user.email === email);

    if (isDuplicate) {
        alert('Email already registered. Please use a different email.');
        return;
    }

    // Fetch user's IP address
    const response = await fetch('https://ipv4.icanhazip.com/');
    const ip = await response.text();

    // Get current date and time
    const currentDate = new Date().toLocaleString();

    // Store data in local storage along with IP address and registration date
    storedData.push({ email, password, ip, registrationDate: currentDate });
    localStorage.setItem('registeredUsers', JSON.stringify(storedData));

    // Optionally, you can redirect or perform any other actions after successful registration
    alert('Registration successful!');

    // Reset the form
    event.target.reset();
}

// Add event listener to the form
document.getElementById('signupForm').addEventListener('submit', handleFormSubmit);

// Function to handle login form submission
function handleLoginFormSubmit(event) {
    event.preventDefault();

    // Get form data using FormData
    const formData = new FormData(event.target);

    // Extract email and password from form data
    const email = formData.get('email');
    const password = formData.get('password');

    // Check if the user exists in local storage
    const storedData = JSON.parse(localStorage.getItem('registeredUsers')) || [];
    const user = storedData.find(user => user.email === email && user.password === password);

    if (user) {
        // Redirect to table.html with user data
        const userData = JSON.stringify(user);
        localStorage.setItem('currentUser', userData);
        window.location.href = 'table.html';
    } else {
        alert('Invalid email or password. Please try again.');
    }

    // Reset the form
    event.target.reset();
}

// Add event listener to the login form
document.getElementById('loginForm').addEventListener('submit', handleLoginFormSubmit);
