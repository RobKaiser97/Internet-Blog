// Import the necessary modules
const router = require('express').Router();
const { Blogpost, User, Comment } = require('../models');
const withAuth = require('../utils/auth');

// Route to get the homepage
router.get('/', async (req, res) => {
  try {
    // Get all blog posts and JOIN with user data
    const blogData = await Blogpost.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    // Serialize data so the template can read it
    const blogs = blogData.map((blog) => blog.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('homepage', {
      blogs,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    // Send an error response if there's an issue getting the homepage
    res.status(500).json(err);
  }
});

// Route to get the dashboard
router.get('/dashboard', withAuth, async (req, res) => {
  try {
    // Get all blog posts created by the logged-in user
    const blogData = await Blogpost.findAll({
      where: { user_id: req.session.user_id },
    });

    // Serialize data so the template can read it
    const blogs = blogData.map((blog) => blog.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('dashboard', {
      blogs,
      logged_in: true
    });
  } catch (err) {
    // Send an error response if there's an issue getting the dashboard
    res.render('login');
  }
});

// Route to get a specific blog post
router.get('/blog/:id', async (req, res) => {
  try {
    // Find the blog post with the specified ID and JOIN with user data and comments
    const blogData = await Blogpost.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['username'],
        },
        {
          model: Comment,
          include: [
            {
              model: User,
              attributes: ['username'],
            },
          ],
        },
      ],
    });

    // Serialize data so the template can read it
    const blog = blogData.get({ plain: true });

    // Pass serialized data and session flag into template
    res.render('blog', {
      ...blog,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    // Send an error response if there's an issue getting the blog post
    res.status(500).json(err);
  }
});