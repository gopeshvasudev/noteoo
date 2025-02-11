import express from "express";

import { authenticateUser } from "../middlewares/auth.middlewares.js";
import { createNoteHandler } from "../controllers/note.controllers.js";

const router = express.Router();

//Create note
router.post("/create", authenticateUser, createNoteHandler);

export default router;
