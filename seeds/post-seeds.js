const { Post } = require("../models");

const postData = [
  {
    title: "Getting Started with Web Development",
    content: "Learn the fundamentals of web development and kickstart your coding journey.",
    user_id: 1,
  },
  {
    title: "Frontend vs. Backend Development",
    content: "Explore the key differences between frontend and backend development in the world of programming.",
    user_id: 2,
  },
  {
    title: "The Power of JavaScript",
    content: "Discover the versatility and importance of JavaScript in modern web development.",
    user_id: 3,
  },
  {
    title: "Introduction to Database Design",
    content: "Learn the basics of designing effective databases for your software projects.",
    user_id: 4,
  },
  {
    title: "Version Control with Git",
    content: "Master the art of version control using Git and GitHub for collaborative coding.",
    user_id: 5,
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
