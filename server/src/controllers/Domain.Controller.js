const { Account, Comment, Linked_domains } = require('../../db/models')

const GetAllDomain = async (req, res) => {
  try {
    const allDomain = await Linked_domains.findAll({
      attributes: ['id', 'name', 'name_adress'],
      raw: true
    });
    res.json(allDomain);
  } catch (error) {
    return res.sendStatus(500);
  }
}

const DeleteDomain = async (req, res) => {
  const domainId = Number(req.params.id);
  try {
    console.log(domainId);
    const delDomain = await Linked_domains.destroy({ where: { id: domainId } })
    return res.sendStatus(200);
  } catch (error) {
    return res.sendStatus(500);
  }
}

module.exports = {
  GetAllDomain,
  DeleteDomain
}
