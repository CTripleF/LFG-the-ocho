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
// router.get("/", withAuth, (req, res) => {
//     Post.findAll({
//       where: {
//         user_id: req.session.user_id
//       },
//       attributes: [
//         "id",
//         "title",
//         "discord_link",
//         "game_title",
//         "game_console",
//         "game_type",
//       ],
//       include: [
//         {
//           model: Comment,
//           attributes: ["comment_text", "user_id", "post_id"],
//           include: {
//             model: User,
//             attributes: ["username"],
//           },
//         },
//         {
//           model: User,
//           attributes: ["username"],
//         },
//       ],
//     })
//     .then(dbPostData => {
//       const posts = dbPostData.map(post => post.get({ plain: true }));
  
//       res.render('profile-page', {
//         posts,
//         loggedIn: req.session.loggedIn
//       });
//     })
//     .catch(err => {
//       console.log(err);
//       res.status(500).json(err);
//     });
//   });

  // Edit profile
  router.put('/:id', (req, res) => {
    // expects {username: 'Lernantino', email: 'lernantino@gmail.com', password: 'password1234'}
  
    // pass in req.body instead to only update what's passed through
    User.update(req.body, {
      individualHooks: true,
      where: {
        id: req.session.id
      }
    })
      .then(dbUserData => {
        if (!dbUserData) {
          res.status(404).json({ message: 'No user found with this id' });
          return;
        }
        res.json(dbUserData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });


module.exports = router;