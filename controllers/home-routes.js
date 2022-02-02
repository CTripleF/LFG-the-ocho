const router = require("express").Router();
const sequelize = require("../config/connection");
const { Post, User, Comment } = require("../models");

//find a post
// router.get('/post/:id', (req, res) => {
//   Post.findOne({
//     where: {
//       id: req.params.id
//     },
//     attributes: [
//       "id",
//       "title",
//       "discord_link",
//       "game_title",
//       "game_console",
//       "game_type",
//     ],
//     include: [
//       {
//         model: Comment,
//         attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
//         include: {
//           model: User,
//           attributes: ['username']
//         }
//       },
//       {
//         model: User,
//         attributes: ['username']
//       }
//     ]
//   })
//     .then(dbPostData => {
//       if (!dbPostData) {
//         res.status(404).json({ message: 'No post found with this id' });
//         return;
//       }

//       // serialize the data
//       const post = dbPostData.get({ plain: true });

//       // pass data to template
//       res.render('single-post', { post });
//     })
//     .catch(err => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });
// Find All


// // Search by Query
// router.get('/', (req,res) => {
//     let gameQuery = req.params.interest_id;
//     Post.findAll({
//         where: {
//             game_type: queryId
//         },
//         attributes: [
//             'id',
//             'title',
//             'discord_link',
//             'game_title',
//             'game_console',
//             'game_type'
//         ],
//         include: [
//             {
//                 model: Comment,
//                 attributes: ['comment_text', 'user_id', 'post_id'],
//                 include: {
//                     model: User,
//                     attributes: ['username']
//                 }
//             },
//             {
//                 model: User,
//                 attributes: ['username']
//             }
//         ]
//     }).then(dbPostData => res.json(dbPostData))
//       .catch(err => {
//           console.log(err);
//           res.status(500).json(err);
//       });
// });
router.get('/', (req, res) => {
  res.render('homepage',);
});

router.get('/login', (req, res) => {
    if (req.session.login) {
        res.redirect('/');
        return;
    }

    res.render('login');
});

router.get('/create-account', (req, res) => {
  res.render('create-account');
})

module.exports = router;
