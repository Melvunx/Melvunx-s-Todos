import cookieParser from "cookie-parser";
import { Request, Response, Router } from "express";
const router = Router();
router.use(cookieParser());

import {
  loginUser,
  logoutUser,
  registerNewUser,
} from "../controller/auth.controller";

const authMiddleware = (req: Request, res: Response) => {};

router.use("/login", loginUser);
router.use("/register", registerNewUser);
router.use("/logout", logoutUser);

export default router;
