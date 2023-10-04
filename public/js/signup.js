// Function to handle user signup
const signupFormHandler = async (event) => {
  event.preventDefault();
  const username = document.querySelector("#username-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();

  // Check for empty fields
  if (!username || !password) return alert("Please enter your username and password");

  // API call for signup
  const response = await fetch("/api/users/signup", {
    method: "POST",
    body: JSON.stringify({ username, password }),
    headers: { "Content-Type": "application/json" },
  });

  // Redirect or show error
  response.ok ? document.location.replace("/") : alert("Failed to sign up!");
};

// Adding submit event listener for signup form
document.querySelector(".signup-form").addEventListener("submit", signupFormHandler);
