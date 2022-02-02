const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Post, User, Comment } = require('../../models');
const withAuth = require('../../utils/auth');

// Find All
router.get('/', (req, res) => { 
    Post.findAll({
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
            attributes: ['id','comment_text', 'user_id', 'post_id'],
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
    let gameQuery = req.params.game_type;
    Post.findAll({
        where: {
            game_type: gameQuery
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


// Create
router.post('/', withAuth, (req, res) => {
    Post.create({
        title: req.body.title,
        discord_link: req.body.discord_link,
        game_title: req.body.game_title,
        game_console: req.body.game_console,
        game_type: req.body.game_type,
        user_id: req.session.user_id,
        
    }).then(dbPostData => res.json(dbPostData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// Edit
router.put('/:id', withAuth, (req, res) => {
    Post.update({
        title: req.body.title
    },
    {
        where: {
        id: req.params.id
    }
    }).then(dbPostData => {
        if(!dbPostData) {
            res.status(404).json({ message: 'No post found with this id.'});
            return;
        }
        res.json(dbPostData);
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// Delete
router.delete('/:id', withAuth, (req, res) => {
    console.log('id', req.params.id);
    Post.destroy({
        where: {
            id: req.params.id
        }
    }).then(dbPostData => {
        if(!dbPostData) {
            res.status(400).status.json({ message: 'No post found with this id'});
            return;
        }
        res.json(dbPostData);
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});

module.exports = router;