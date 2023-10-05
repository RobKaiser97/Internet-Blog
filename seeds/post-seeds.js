const { Post } = require("../models");

const postData = [
  {
    title: "The Art of Fly Fishing",
    content: "Fly fishing is a graceful art, requiring finesse and expertise. Here are some tips to get started.",
    user_id: 1,
  },
  {
    title: "Top 5 Lures for Bass Fishing",
    content: "When it comes to bass fishing, choosing the right lure is critical. Let's break down the top 5 lures you must have.",
    user_id: 2,
  },
  {
    title: "Secrets of Deep Sea Fishing",
    content: "Venture into the great blue yonder and uncover the secrets of successful deep-sea fishing.",
    user_id: 3,
  },
  {
    title: "Choosing the Right Fishing Rod",
    content: "A guide to selecting the right fishing rod for beginners. Your rod is an extension of your arm!",
    user_id: 4,
  },
  {
    title: "Freshwater vs Saltwater Fishing",
    content: "Can't decide between freshwater and saltwater fishing? Let's dive into the pros and cons of both.",
    user_id: 5,
  }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
