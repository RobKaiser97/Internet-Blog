// Async function to handle user login
const loginHandler = async (event) => {
  event.preventDefault();

  // Grab username and password
  const username = document.querySelector("#username-login").value.trim();
  const password = document.querySelector("#password-login").value.trim();

  // Check for empty fields
  if (!username || !password) {
    alert("Please enter your username and password");
    return;
  }

  // Make an API call for login
  const response = await fetch("/api/users/login", {
    method: "POST",
    body: JSON.stringify({ username, password }),
    headers: { "Content-Type": "application/json" },
  });

  // Redirect to homepage if login is successful
  response.ok ? document.location.replace("/") : alert("Failed to log in!");
};

// Add event listener for login form submission
document.querySelector(".login-form").addEventListener("submit", loginHandler);
