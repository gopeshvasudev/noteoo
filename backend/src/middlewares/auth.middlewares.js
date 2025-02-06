import jwt from "jsonwebtoken";

import { errorHandler } from "../utils/utilityFunctions.js";
import HttpError from "../utils/errorClass.js";
import userModel from "../models/user.models.js";

const authenticateUser = async (req, res, next) => {
  try {
    //Getting the token from the header
    const authHeader = req.header("Authorization");

    //Checking if the token starts with bearer or not
    if (!authHeader || !authHeader.startsWith("Bearer")) {
      throw new HttpError(401, "Please login");
    }

    //Spliting the token from the bearer
    const token = authHeader.split(" ")[1];

    //Verifying the token and decoding the data
    const decodedData = jwt.verify(token, process.env.JWT_SECRET_KEY);

    if (!decodedData) {
      throw new HttpError(403, "Please login");
    }

    //Fetching the user from the DB using decoded data and sending it into request
    const user = await userModel.findById(decodedData._id).select("-password");

    if (!user) {
      throw new HttpError(404, "User not found! Please login.");
    }

    req.user = user;
    next();
  } catch (error) {
    console.error("Authenticate user error: " + error.message);
    return errorHandler(res, error.statusCode, error.message);
  }
};

export { authenticateUser };
