const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

/*
SEND VERIFICATION CODE
*/
router.post("/send-code", authController.sendCode);

/*
VERIFY CODE & SAVE DATA
*/
router.post("/verify-code", authController.verifyCode);

/*
LOGIN
*/
router.post("/login", authController.login);

module.exports = router;
