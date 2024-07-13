const router = require("express").Router();

const authRoute = require("./auth");
const userRoute = require("./user");

router.use("/auth/v1", authRoute);
router.use("/user/v1", userRoute);

module.exports = router;