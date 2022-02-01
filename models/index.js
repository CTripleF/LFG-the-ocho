// import models

const Post = require('./Post');
const User = require('./User');
// const Interest = require('./Interest');
const Comment = require('./Comment');


User.hasMany(Post, {
    foreignKey: 'user_id'
});

Post.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});


// User.belongsToMany(Post, {
//     through: Interest,
//     as: 'game_interest',

//     foreignKey: 'user_id',
//     onDelete: 'SET NULL'
// });

Comment.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});

Comment.belongsTo(Post, {
    foreignKey: 'post_id',
    onDelete: 'SET NULL'
});

// Interest.belongsTo(Post, {
//   foreignKey: 'post_id',
//   onDelete: 'SET NULL'
// });

User.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});

Post.hasMany(Comment, {
    foreignKey: 'post_id'
});

User.hasMany(Interest, {
    foreignKey: 'user_id'
})
module.exports = { User, Post, Interest, Comment };