const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Post, Interest, User, Comment } = require('../../models');

// Find All
router.get('/', (req, res) => { 
    Post.findAll({
        attributes: [
            'id',
            'title',
            'discord_link'
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

// Find One
router.get('/:id', (req, res) => {
    Post.findOne({
        where: {
            id: req.params.id
        },
        attributes: [
            'id',
            'title',
            'discord_link'
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
    }).then(dbPostData => {
        if(!dbPostData) {
            res.status(400).json({ message: 'No post found with this id! '});
            return;
        }
        res.json(dbPostData);
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});

// Search by Query
router.get('/', (req,res) => {
    let queryId = req.params.game_interest;
    Post.findAll({
        where: {
            game_interest: queryId
        },
        attributes: [
            'id',
            'title',
            'discord_link'
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

router.get('/login', (req, res) => {
    if (req.session.login) {
        res.redirect('/');
        return;
    }

    res.render('login');
});

module.exports = router;


