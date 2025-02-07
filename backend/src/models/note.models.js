import mongoose from "mongoose";

const noteSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      minLength: 10,
      maxLength: 100,
      trim: true,
    },
    
    content: {
      type: String,
      required: [true, "Note content is required"],
      minLength: 20,
      maxLength: 2000,
      trim: true,
    },

    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

const Note = mongoose.model("Note", noteSchema);
export default Note;
