const { User } = require("../models");

const userData = [
  {
    username: "CodeMaster",
    password: "Coding123",
  },
  {
    username: "TechEnthusiast",
    password: "Tech456",
  },
  {
    username: "WebWizard",
    password: "WebDev789",
  },
  {
    username: "DatabasePro",
    password: "DBDesign101",
  },
  {
    username: "GitGuru",
    password: "GitFlow2022",
  },
];

const seedUsers = () =>
  User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

module.exports = seedUsers;
