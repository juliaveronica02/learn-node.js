var express = require('express');
var router = express.Router();
const Employe = require('../controllers/Employe')

/* GET users listing. */
router.get('/show', Employe.showAll );

module.exports = router;
