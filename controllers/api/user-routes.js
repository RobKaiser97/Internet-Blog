const router = require("express").Router();
const { User } = require("../../models");

router.post("/signup", async (req, res) => {
  try {
    const userData = await User.create(req.body);
    req.session.save(() => {
      (req.session.user_id = userData.id),
        (req.session.username = userData.username),
        (req.session.loggedIn = true);
      res.json(userData);
    });
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post("/login", async (req, res) => {
  try {
    const userData = await User.findOne({
      where: {
        username: req.body.username,
      },
    });
    if (!userData) {
      res.status(404).json({ message: "No user found" });
      return;
    }
    const validPassword = userData.checkPassword(req.body.password);
    if (!validPassword) {
      res.status(404).json({ message: "No user found" });
      return;
    }
    req.session.save(() => {
      (req.session.user_id = userData.id),
        (req.session.username = userData.username),
        (req.session.loggedIn = true);
      res.json(userData);
    });
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post("/logout", (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  }
});

module.exports = router;
