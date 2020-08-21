const express = require("express");
const router = express.Router();

const controller = require("../controllers/user");
const authToken = require("../authentication/index");

router.get("/verifytoken", authToken.verifyTokenAsUser, authToken.valid);
router.get("/verifylogin", authToken.verifyLogin);

// router.get("/show", authToken.verifyTokenAsUser, controller.getData);
router.get("/show", controller.getData);
router.post("/login", authToken.verifyLogin, controller.login);
router.get("/logout", controller.logout);

router.post("/register", controller.register);

module.exports = router;
