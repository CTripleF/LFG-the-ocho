const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment } = require('../models');
const withAuth = require('../utils/auth');

// Get your posts
// router.get('/,', withAuth, (req, res) => {
//     res.render('profilepage');
    // console.log(req.session);
    // Post.findOne({
    //     where: {
    //         user_id: req.session.user_id
    //     },
    //     attributes: [
    //         'id',
    //         'title',
    //         'discord_link',
    //         'game_title',
    //         'game_console',
    //         'game_type'
    //     ],
    //     include: [
    //         {
    //             model: Comment,
    //             attributes: ['comment_text', 'user_id', 'post_id'],
    //             include: {
    //                 model: User,
    //                 attributes: ['username']
    //             }
    //         },
    //         {
    //             model: User,
    //             attributes: ['username']
    //         }
    //     ]
    // }).then(dbPostData => {
    //     const posts = dbPostData.map(post => post.get({ plain: true }));
    //     res.render('profile-page', { posts, loggedIn: true });
    // }).catch(err => {
    //     console.log(err);
    //     res.status(500).json(err);
    // });
//});
router.get("/", withAuth, (req, res) => {
    Post.findAll({
      attributes: [
        "id",
        "title",
        "discord_link",
        "game_title",
        "game_console",
        "game_type",
      ],
      include: [
        {
          model: Comment,
          attributes: ["comment_text", "user_id", "post_id"],
          include: {
            model: User,
            attributes: ["username"],
          },
        },
<<<<<<< HEAD
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


=======
        {
          model: User,
          attributes: ["username"],
        },
      ],
    })
    .then(dbPostData => {
      const posts = dbPostData.map(post => post.get({ plain: true }));
  
      res.render('profile-edit', {
        posts,
        loggedIn: req.session.loggedIn
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
  });
>>>>>>> 2f31f9e29d1bd7ac41cb1867dd228d9cd06594a7
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