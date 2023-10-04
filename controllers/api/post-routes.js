const router = require("express").Router();
const { Post } = require("../../models");
const withAuth = require("../../utils/auth");

router.post("/", async (req, res) => {
  try {
    if (!req.body.content) {
      return res.status(400).json({ message: "Content is required." });
    }

    const newPost = await Post.create({
      title: req.body.title,
      content: req.body.content,
      user_id: req.session.user_id,
    });
    res.redirect('/dashboard');
  } catch (error) {
    res.status(500).json(error);
  }
});

router.put("/:id", withAuth, async (req, res) => {
  try {
    console.log(req.body, req.params.id);
    const updatePost = await Post.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.json(updatePost);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.delete("/:id", withAuth, async (req, res) => {
  try {
    const deletePost = await Post.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.json(deletePost);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
