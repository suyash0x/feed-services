const express = require("express");
const router = express.Router();
const handleLogin = require("../controllers/login");
const handleRegister = require("../controllers/register");

router.route("/login").post(handleLogin);
router.route("/register").post(handleRegister);

module.exports = router;
