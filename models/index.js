const Comment = require("./Comment");
const Post = require("./Post");
const User = require("./User");

Post.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Post.hasMany(Comment, {
  foreignKey: "post_id",
});

Comment.belongsTo(Post, {
  foreignKey: "post_id",
});

User.hasMany(Post, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Comment.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

module.exports = { Comment, Post, User };
