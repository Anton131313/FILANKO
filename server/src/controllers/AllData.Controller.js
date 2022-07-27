const { Account, Comment, Linked_domains } = require('../../db/models')

const AllData = async (req, res) => {
  try {
    const data = await Account.findAll({
      attributes: ['name'],
      include: [
        {
          model: Linked_domains,
          attributes: ['name', 'name_adress'],
        },
        {
          model: Comment,
          attributes: ['text'],
        },
      ],
      raw: true,
    });
    res.json(data)
  } catch (error) {
    return res.sendStatus(500);
  }
}

module.exports = {
  AllData
}
