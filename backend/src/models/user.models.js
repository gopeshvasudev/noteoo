import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      minLength: 3,
      maxLength: 30,
      trim: true,
    },

    email: {
      type: String,
      unique: true,
      required: true,
      minLength: 12,
      maxLength: 50,
      trim: true,
    },

    password: {
      type: String,
      required: true,
      minLength: 8,
      maxLength: 100,
      trim: true,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
export default User;
