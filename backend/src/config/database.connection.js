import mongoose from "mongoose";

export const connectToDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);

    console.log("Database connected successfully");
  } catch (error) {
    console.log("Database connection error: " + error.message);
  }
};
