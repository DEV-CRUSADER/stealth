const router = require("express").Router();

const authController = require("../controllers/authController");

router.post("/login", authController.login);

router.post("/register", authController.register, authController.sendOTP);
router.post("/verify", authController.verifyOTP);
router.post("/resendOTP", authController.sendOTP);

router.post("/forgotPassword", authController.forgotPassword);
router.patch("/resetPassword/:token", authController.resetPassword);

module.exports = router;
