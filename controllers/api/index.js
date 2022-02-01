const router = require('express').Router();

const userRoutes = require('./user-routes');
const postRoutes = require('./post-routes');
const commentRoutes = require('./comment-routes');
const interestRoutes = require('./interest-routes');


router.use('/users', userRoutes);
// router.use('/posts', postRoutes);
router.use('/comments', commentRoutes);
router.use('/interest', interestRoutes);

module.exports = router;