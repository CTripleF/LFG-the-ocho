const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Post, User, Comment, Interest } = require('../../models');
const withAuth = require('../../utils/auth');

// get all interests
router.get('/', (req, res) => {
    Interest.findAll({
        attributes: [
            'id',
            'post_id',
            'game_interest'
        ],
        include: [
            {
                model: Comment
            },
            {
                model: User
            },
            {
                model: Post
            }
        ]
    })
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
})

// get by id
// may need to include attributes for models
router.get('/:id', (req, res) => {
    Interest.findOne({
        where: {
            id: req.params.id
        },
        attributes: [
            'id',
            'post_id',
            'game_interest'
        ],
        include: [
            {
                model: Comment
            },
            {
                model: User
            },
            {
                model: Post
            }
        ]
    })
    .then(dbPostData => {
        if (!dbPostData) {
            res.status(404).json({ message: 'No interest found with this id' });
            return;
        }
        res.json(dbPostData);
    })
        .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
})

module.exports = router;