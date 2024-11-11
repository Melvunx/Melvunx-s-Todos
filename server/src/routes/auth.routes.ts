import { Router } from "express";
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
const router = Router();
router.use(cookieParser());

import {
  loginUser,
  logoutUser,
  registerNewUser,
} from "../controller/auth.controller";

// const authMiddleware = (req, res, next) => {
//   const token = req.cookies.jwt;

//   if (!token) {
//   }
// };

router.use("/login", loginUser);
router.use("/register", registerNewUser);
router.use("/logout", logoutUser);

export default router;
