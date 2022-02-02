const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Interest, Comment } = require('../models');
const withAuth = require('../utils/auth');

// Get your posts
router.get('/,', withAuth, (req, res) => {
    console.log(req.session);
    Post.findAll({
        where: {
            user_id: req.session.user_id
        },
        attributes: [
            'id',
            'title',
            'discord_link',
            'game_title',
            'game_console',
            'game_type'
        ],
        include: [
            {
                model: Comment,
                attributes: ['comment_text', 'user_id', 'post_id'],
                include: {
                    model: User,
                    attributes: ['username']
                }
            },
            {
                model: User,
                attributes: ['username']
            }
        ]
    }).then(dbPostData => res.json(dbPostData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});


// Get your interests
// router.get('/', (req, res) => {
//     Interest.findAll({
//         where: {
//             user_id: req.session.user_id
//         },
//         attributes: [
//             'id',
//             'post_id',
//             'game_interest',
//             'game_title',
//             'game_console',
//             'game_type'
//         ],
//         include: [
//             {
//                 model: Comment
//             },
//             {
//                 model: User
//             },
//             {
//                 model: Post
//             }
//         ]
//     })
//     .then(dbPostData => res.json(dbPostData))
//     .catch(err => {
//         console.log(err);
//         res.status(500).json(err);
//     });
// });

module.exports = router;