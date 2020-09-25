var express = require('express');
var router = express.Router();
const Company = require('../controllers/Company')

/* GET users listing. */
router.post('/create', Company.create);
router.get('/show', Company.showAll);

module.exports = router;
