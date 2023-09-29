const Blogpost = require('./Blogpost');
const User = require('./User');
const Comment = require('./Comment');

Blogpost.hasMany(Comment, {
  foreignKey: 'post_id',
  onDelete: 'CASCADE'
});

Blogpost.belongsTo(User, {
  foreignKey: 'user_id'
});

User.hasMany(Blogpost, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

User.hasMany(Comment, {
  foreignKey: 'user_id'
});

Comment.belongsTo(User, {
  foreignKey: 'user_id'
});

Comment.belongsTo(Blogpost, {
  foreignKey: 'post_id'
});

module.exports = { Blogpost, User, Comment };
