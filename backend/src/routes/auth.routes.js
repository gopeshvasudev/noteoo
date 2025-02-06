import express from "express";

import {
  refreshTokenHandler,
  signinHandler,
  signupHandler,
  logoutHandler,
} from "../controllers/auth.controllers.js";
import { authenticateUser } from "../middlewares/auth.middlewares.js";

const router = express.Router();

//Sign up
router.post("/signup", signupHandler);

//Sign in
router.post("/signin", signinHandler);

//Refresh token
router.post("/refresh-token", refreshTokenHandler);

//Logout user
router.post("/logout", authenticateUser, logoutHandler);

export default router;
