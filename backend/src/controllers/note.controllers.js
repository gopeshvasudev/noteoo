import { errorHandler } from "../utils/utilityFunctions.js";
import { createNoteValidator } from "../utils/validation.js";
import noteModel from "../models/note.models.js";
import HttpError from "../utils/errorClass.js";

const createNoteHandler = async (req, res) => {
  try {
    const { title, content } = req.body;
    const { _id: userId } = req.user;

    //Validating the data
    createNoteValidator(req);

    const note = await noteModel.create({
      title,
      content,
      author: userId,
    });

    if (!note) {
      throw new HttpError(
        500,
        "Something went wrong while creating a note! Please try again later."
      );
    }

    return res.status(201).json({
      success: true,
      message: "Note created successfully",
    });
  } catch (error) {
    return errorHandler(res, error.statusCode, error.message);
  }
};

const getNotesHandler = async (req, res) => {
  try {
    const { noteType } = req.params;
    const { _id: userId } = req.user;

    if (!["favourite", "all"].includes(noteType)) {
      throw new HttpError(400, `Invalid status type: ${noteType}`);
    }

    let notes = [];

    if (noteType === "all") {
      notes = await noteModel.find({
        author: userId,
      });
    } else {
      notes = await noteModel.find({
        author: userId,
        isFavourite: true,
      });
    }

    return res.status(200).json({
      success: true,
      message: "Notes fetched successfully",
      notes,
    });
  } catch (error) {
    return errorHandler(res, error.statusCode, error.message);
  }
};

export { createNoteHandler, getNotesHandler };
