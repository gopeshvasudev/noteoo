import express from "express";

import {
  refreshTokenHandler,
  signinHandler,
  signupHandler,
} from "../controllers/auth.controllers.js";

const router = express.Router();

//Sign up
router.post("/signup", signupHandler);

//Sign in
router.post("/signin", signinHandler);

//Refresh token
router.post("/refresh-token", refreshTokenHandler);

export default router;
