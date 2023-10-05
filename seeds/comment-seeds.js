const { Comment } = require("../models");

const commentData = [
  {
    comment: "Fly fishing has always fascinated me. Thanks for the tips!",
    user_id: 2,
    post_id: 1,
  },
  {
    comment: "I swear by the Wacky Worm for bass fishing!",
    user_id: 3,
    post_id: 2,
  },
  {
    comment: "Deep-sea fishing is not for the faint of heart. Great post!",
    user_id: 1,
    post_id: 3,
  },
  {
    comment: "I totally agree. Your fishing rod choice can make or break your experience.",
    user_id: 5,
    post_id: 4,
  },
  {
    comment: "Saltwater fishing is definitely more challenging, but the rewards are worth it!",
    user_id: 4,
    post_id: 5,
  }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
