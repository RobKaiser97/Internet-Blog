const router = require("express").Router();
const { Post, User, Comment } = require("../models");

router.get("/", async (req, res) => {
  try {
    const posts = await Post.findAll({
      include: [User],
    });
    const postData = posts.map((post) => post.toJSON());

    // Set loggedIn based on whether user is authenticated
    let loggedIn = req.session.user_id ? true : false;

    res.render("homepage", {
      postData,
      loggedIn: req.session.loggedIn,
      user_id: req.session.user_id,
    });
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/post/:id", async (req, res) => {
  try {
    const onePost = await Post.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: {
            exclude: "password",
          },
        },
        {
          model: Comment,
          include: [
            {
              model: User,
              attributes: {
                exclude: "password",
              },
            },
          ],
        },
      ],
    });
    const post = onePost.get({ plain: true });
    return res.render("single-post", {
      post,
      loggedIn: req.session.loggedIn,
      user_id: req.session.user_id
    });
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/login", (req, res) => {
  res.render("login");
});

module.exports = router;
