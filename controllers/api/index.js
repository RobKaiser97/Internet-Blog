// Import the necessary modules
const router = require('express').Router();
const userRoutes = require('./userRoutes');
const blogRoutes = require('./blogRoutes');

// Use the userRoutes and blogRoutes for their respective endpoints
router.use('/users', userRoutes);
router.use('/projects', blogRoutes); //projects needs to be changed at to correct endpoint eventually

// Export the router
module.exports = router