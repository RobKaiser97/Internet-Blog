const { User } = require("../models");

const userData = [
  {
    username: "rainbow",
    password: "password",
  },
  {
    username: "techguru",
    password: "password",
  },
  {
    username: "johnny",
    password: "password",
  },
  {
    username: "coolcat",
    password: "password",
  },
  {
    username: "musicfanatic",
    password: "password",
  },
];

const seedUsers = () =>
  User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

module.exports = seedUsers;
