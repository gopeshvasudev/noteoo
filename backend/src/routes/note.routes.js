import express from "express";

import { authenticateUser } from "../middlewares/auth.middlewares.js";
import {
  createNoteHandler,
  getNotesHandler,
  markNoteAsFavouriteHandler,
  getSingleNoteHandler
} from "../controllers/note.controllers.js";

const router = express.Router();

//Get notes
router.get("/:noteType", authenticateUser, getNotesHandler);

//Get single note
router.get("/view/:noteId", authenticateUser, getSingleNoteHandler);

//Create note
router.post("/create", authenticateUser, createNoteHandler);

//Mark note as favourite
router.post("/favourite/:noteId", authenticateUser, markNoteAsFavouriteHandler);

export default router;
