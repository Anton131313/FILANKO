const { Router } = require('express');
const showAllData = Router();

const AllDataController = require('../controllers/AllData.Controller');

showAllData.get('/', AllDataController.AllData);

module.exports = showAllData;
