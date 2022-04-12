const { Comment, User, Twert } = require('../models')

// Work Here
const GetAllComments = async (req, res) => {
    try {
      const comment = await Comment.findAll()
      res.send(comment)
    } catch (error) {
      throw error
    }
  }

const GetComment = async (req, res) => {
    try {
      const comment = await Comment.findByPk(req.params.comment_id)
      res.send(comment)
    } catch (error) {
      throw error
    }
  }
  
  const CreateComment = async (req, res) => {
    try {
      let twertId = parseInt(req.params.twert_id)
      let ownerId = parseInt(req.params.user_id)
      let commentBody = {
        twertId,
        ownerId,
        ...req.body
      }
  
      let comment = await Comment.create(commentBody)
      res.send(comment)
    } catch (error) {
      throw error
    }
  }
  
  const UpdateComment = async (req, res) => {
    try {
      let commentId = parseInt(req.params.comment_id)
  
      let updatedComment = await Comment.update(req.body, {
        where: { id: commentId},
        returning: true
      })
  
      res.send(updatedComment)
    } catch (error) {
      throw error
    }
  }
  
  const DeleteComment = async (req, res) => {
    try {
      let commentId = parseInt(req.params.comment_id)
  
      await Comment.destroy({ where: { id: commentId}})
      res.send({ message: `Deleted comment with id: ${commentId}`})
    } catch (error) {
      throw error
    }
  }
// Work Here

// Dont forget to export your functions
module.exports = {
    GetAllComments,
    GetComment,
    CreateComment,
    UpdateComment,
    DeleteComment

}
