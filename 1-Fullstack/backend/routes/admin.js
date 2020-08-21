const express = require("express");
const router = express.Router();

const controller = require("../controllers/admin");
const authToken = require("../authentication/index");

router.get("/verifytoken", authToken.verifyTokenAsAdmin, authToken.valid);
router.get("/", authToken.verifyTokenAsAdmin, controller.show);

// router.get("/show", authToken.verifyTokenAsUser, controller.getData);
router.get("/show", controller.getData);
router.post("/login", authToken.verifyLogin, controller.login);
router.get("/logout", controller.logout);
router.post("/register", controller.register);
router.put("/edit/:id", controller.updateDataById);
router.delete("/delete-account/:id", controller.deleteAccount);

module.exports = router;
