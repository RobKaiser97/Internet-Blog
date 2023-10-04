// Function to handle logout
const logout = async (event) => {
  // Check if the logout link was clicked
  if (event.target.id === 'logout-link') {
    // Prevent the default action
    event.preventDefault();

    // API call to logout
    const response = await fetch("/api/users/logout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });

    // Redirect to homepage if logout is successful
    response.ok ? document.location.replace("/") : alert("Failed to log out!");
  }
};

// Adding click event listener for logout
document.body.addEventListener("click", logout);