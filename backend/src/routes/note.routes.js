import express from "express";

import { authenticateUser } from "../middlewares/auth.middlewares.js";
import {
  createNoteHandler,
  getNotesHandler,
} from "../controllers/note.controllers.js";

const router = express.Router();

//Create note
router.post("/create", authenticateUser, createNoteHandler);

//Get notes
router.get("/:favouriteStatus", authenticateUser, getNotesHandler);

export default router;
