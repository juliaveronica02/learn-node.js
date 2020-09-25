var express = require('express');
var router = express.Router();
const Jobdesk = require('../controllers/Jobdesk')

/* GET users listing. */
router.post('/create', Jobdesk.create);
router.get('/show', Jobdesk.showAll);

module.exports = router;
