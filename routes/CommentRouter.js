const Router = require('express').Router()
const controller = require('../controllers/CommentController')

// You Do
// Implement Crud Operations For Comments
Router.get('/', controller.GetAllComments)
Router.get('/:comment_id', controller.GetComment)
Router.put('/:comment_id', controller.UpdateComment)
Router.post('/:twert_id/:user_id', controller.CreateComment)
Router.delete('/:comment_id', controller.DeleteComment)
// You Do
module.exports = Router
