// Company login form submission
document.getElementById('login-form').addEventListener('submit', event => {
  event.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  // Simulate login to server
  console.log(`Login attempt with username "${username}" and password "${password}"`);
});

// Company registration form submission
document.getElementById('registration-form').addEventListener('submit', event => {
  event.preventDefault();
  const companyName = document.getElementById('companyName').value;
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  // Simulate registration to server
  console.log(`Registration attempt with company name "${companyName}", username "${username}", and password "${password}"`);
});

// Company dashboard
document.getElementById('post-new-internship').addEventListener('click', () => {
  document.getElementById('post-internship-form').style.display = 'block';
});

document.getElementById('post-internship-form').addEventListener('submit', event => {
  event.preventDefault();
  const internshipTitle = document.getElementById('internshipTitle').value;
  const internshipDescription = document.getElementById('internshipDescription').value;
  // Simulate posting internship to server
  console.log(`Internship posted with title "${internshipTitle}" and description "${internshipDescription}"`);
});
