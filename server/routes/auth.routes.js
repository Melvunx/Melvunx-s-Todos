const express = require("express");
const router = express.Router();
const { login, register, logout } = require("../controller/login.controller");

router.use("/login", login);
router.use("/register", register);
router.use("/logout", logout);

module.exports = router;
