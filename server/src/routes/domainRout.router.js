const { Router } = require('express');
const domainRout = Router();

const DomainController = require('../controllers/Domain.Controller')

domainRout.get('/', DomainController.GetAllDomain)
domainRout.delete('/:id', DomainController.DeleteDomain)

module.exports = domainRout;
