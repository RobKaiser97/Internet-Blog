const { User } = require("../models");

const userData = [
  {
    username: "FishMaster3000",
    password: "BigFish2023",
  },
  {
    username: "LureLover",
    password: "Catch22",
  },
  {
    username: "RiverRunner",
    password: "StreamDream",
  },
  {
    username: "TackleBoxTom",
    password: "FishyPassword",
  },
  {
    username: "BaitAndSwitch",
    password: "WormLife",
  }
];

const seedUsers = () =>
  User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

module.exports = seedUsers;
