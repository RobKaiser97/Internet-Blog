// Import the necessary modules
const router = require('express').Router();
const { User } = require('../../models');

// Route to create a new user
router.post('/signup', async (req, res) => {
  try {
    // Create a new user with the provided data
    const userData = await User.create(req.body);

    // Save the user's session and send a response with the user data
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.username = userData.username;
      req.session.logged_in = true;

      res.status(200).json(userData);
    });
  } catch (err) {
    // Send an error response if there's an issue creating the user
    res.status(400).json(err);
  }
});

// Route to log in a user
router.post('/login', async (req, res) => {
  try {
    // Find the user with the provided username
    const userData = await User.findOne({ where: { username: req.body.username } });

    // Send an error response if the user doesn't exist
    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect username or password, please try again' });
      return;
    }

    // Check if the provided password matches the user's password
    const validPassword = await userData.checkPassword(req.body.password);

    // Send an error response if the password is incorrect
    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect username or password, please try again' });
      return;
    }

    // Save the user's session and send a response with the user data
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.status(200).json({ user: userData, message: 'You are now logged in!' });
    });
  } catch (err) {
    // Send an error response if there's an issue logging in the user
    res.status(400).json(err);
  }
});