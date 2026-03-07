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
PASSWORD RESET
*/
router.post("/forgot-password", authController.forgotPassword);
router.post("/reset-password", authController.resetPassword);

const { protect } = require("../middleware/authMiddleware");

/*
LOGIN
*/
router.post("/login", authController.login);

/*
GET CURRENT USER (CHECK AUTH)
*/
router.get("/me", protect, authController.getMe);

/*
LOGOUT
*/
router.post("/logout", authController.logout);

module.exports = router;
