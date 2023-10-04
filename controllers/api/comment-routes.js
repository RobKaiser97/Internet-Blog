const router = require("express").Router();
const { Comment } = require("../../models");
const withAuth = require("../../utils/auth");

router.post("/", withAuth, async (req, res) => {
  try {
    if (req.session) {
      const newComment = await Comment.create({
        comment: req.body.comment,
        post_id: req.body.post_id,
        user_id: req.session.user_id,
      });
      res.json(newComment);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});


router.delete("/:id", withAuth, async (req, res) => {
  try {
    const deleteComment = await Comment.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.json(deleteComment);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
