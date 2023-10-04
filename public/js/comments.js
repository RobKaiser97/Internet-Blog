// Async function to handle comments
const commentHandler = async (event) => {
  // Prevent default behavior of the button click
  event.preventDefault();

  // Grab comment content and post ID
  const content = document.querySelector("#comment-content").value.trim();
  const post_id = event.target.getAttribute("data-id");

  // Check if the comment box is empty
  if (!content) {
    alert("Please enter a new post");
    return;
  }

  // Make an API call to create a new comment
  const response = await fetch("/api/comments", {
    method: "POST",
    body: JSON.stringify({ comment: content, post_id: post_id }),
    headers: { "Content-Type": "application/json" },
  });

  // If API call is successful, redirect to the post
  if (response.ok) {
    document.location.replace(`/post/${post_id}`);
  } else {
    alert("Failed to comment!");
  }
};

// Add event listener for comment submission
document.querySelector("#submit-comment").addEventListener("click", commentHandler);
