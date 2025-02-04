import express from "express";

import { signinHandler, signupHandler } from "../controllers/auth.controllers.js";

const router = express.Router();

//Sign up
router.post("/signup", signupHandler);

//Sign in
router.post("/signin", signinHandler);

export default router;
