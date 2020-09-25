var express = require('express');
var router = express.Router();
const User = require('../controllers/User')

/* GET users listing. */
router.post('/create', User.create);
router.get('/show', User.showAll);

module.exports = router;
