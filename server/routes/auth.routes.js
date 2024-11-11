const express = require("express");
const router = express.Router();
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
const { login, register, logout } = require("../controller/auth.controller");

router.use(cookieParser());

const authMiddleware = (req, res, next) => {
  const token = req.cookies.jwt;

  if (!token) {
    
  }
}

router.use("/login", login);
router.use("/register", register);
router.use("/logout", logout);

module.exports = router;
