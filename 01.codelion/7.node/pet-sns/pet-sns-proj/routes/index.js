var express = require('express');
var router = express.Router();

const authRouter = require('./auth');
const postRouter = require('./posts');

router.use('/auth', authRouter);
router.use('/posts', postRouter);

module.exports = router;
