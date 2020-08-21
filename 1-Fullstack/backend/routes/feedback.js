const express = require("express");
const router = express.Router();

const controller = require('../controllers/feedback')

router.get('/show',controller.show)
router.post('/send',controller.send)

module.exports=router