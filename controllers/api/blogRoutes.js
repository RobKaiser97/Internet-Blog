// Import the necessary modules
const router = require('express').Router();
const { Blogpost } = require('../../models');
const withAuth = require('../../utils/auth');

// Route to create a new blog post
router.post('/', withAuth, async (req, res) => {
  try {
    // Create a new blog post with the user's ID
    const newBlogpost = await Blogpost.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    // Send a response with the new blog post
    res.status(200).json(newBlogpost);
  } catch (err) {
    // Send an error response if there's an issue creating the blog post
    res.status(400).json(err);
  }
});

// Route to delete a blog post
router.delete('/:id', withAuth, async (req, res) => {
  try {
    // Delete the blog post with the specified ID and user ID
    const blogData = await Blogpost.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    // Send a response with the deleted blog post
    if (!blogData) {
      res.status(404).json({ message: 'No project found with this id!' });
      return;
    }
    res.status(200).json(blogData);
  } catch (err) {
    // Send an error response if there's an issue deleting the blog post
    res.status(500).json(err);
  }
});

// Export the router
module.exports = router;