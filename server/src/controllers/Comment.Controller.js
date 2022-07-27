const { Account, Comment, Linked_domains } = require('../../db/models')

const PostNewcomment = async (req, res) => {
  try {
    const newComment = await Comment.create({
      text: req.body.text,
      account_id: 1
    })
  } catch (error) {
    return res.sendStatus(500);
  }
}

const GetAllComment = async (req, res) => {
  try {
    const allComment = await Comment.findAll({
      attributes: ['id','text'],
      raw: true
    });
    res.json(allComment);
  } catch (error) {
    return res.sendStatus(500);
  }
}

module.exports = {
  PostNewcomment,
  GetAllComment
}


/* 
    text: DataTypes.TEXT,
    account_id: DataTypes.INTEGER
*/
