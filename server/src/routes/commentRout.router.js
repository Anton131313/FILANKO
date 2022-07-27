const { Router } = require('express');
const commentRout = Router();

const CommentController = require('../controllers/Comment.Controller')

commentRout.post('/', CommentController.PostNewcomment)
commentRout.get('/', CommentController.GetAllComment)

module.exports = commentRout;
