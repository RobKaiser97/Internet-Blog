const { Comment } = require("../models");

const commentData = [
  {
    comment: "Great introduction to web development!",
    user_id: 2,
    post_id: 1,
  },
  {
    comment: "I prefer frontend development, but this is an excellent comparison.",
    user_id: 3,
    post_id: 2,
  },
  {
    comment: "JavaScript is indeed a powerful language for web development.",
    user_id: 1,
    post_id: 3,
  },
  {
    comment: "Database design is a crucial skill for any developer.",
    user_id: 5,
    post_id: 4,
  },
  {
    comment: "Git and GitHub are essential tools for collaborative coding projects.",
    user_id: 4,
    post_id: 5,
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
