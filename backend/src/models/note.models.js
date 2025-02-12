import mongoose from "mongoose";

const noteSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      minLength: [2, "Title length must be atleast 2"],
      maxLength: [200, "Title length must be below 200"],
      trim: true,
    },

    content: {
      type: String,
      required: [true, "Note content is required"],
      minLength: [20, "Content length must be atleast 20"],
      maxLength: [5000, "Content length must be below 5000"],
      trim: true,
    },

    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "Author is required"],
    },

    isFavourite: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

noteSchema.index({ author: 1 });

const Note = mongoose.model("Note", noteSchema);
export default Note;
