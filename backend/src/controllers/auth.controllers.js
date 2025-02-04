import bcrypt from "bcryptjs";

import userModel from "../models/user.models.js";
import HttpError from "../utils/errorClass.js";
import {
  createAccessToken,
  createRefreshToken,
  errorHandler,
} from "../utils/utilityFunctions.js";
import { signupValidator } from "../utils/validation.js";

const signupHandler = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    //Validating the data
    signupValidator(req);

    //Checking the user is already exists or not.
    const user = await userModel.findOne({
      $or: [{ email }, { username }],
    });

    if (user) {
      if (user.email === email) {
        throw new HttpError(400, "Email already exists");
      } else {
        throw new HttpError(400, "Username already exists");
      }
    }

    //Hashing the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = await userModel.create({
      username,
      email,
      password: hashedPassword,
    });

    const accessToken = createAccessToken({ _id: newUser._id });
    const refreshToken = createRefreshToken({ _id: newUser._id });

    return res
      .status(201)
      .cookie("token", refreshToken, {
        maxAge: 1000 * 60 * 60 * 24 * 15,
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "Strict",
      })
      .json({
        success: true,
        message: "Welcome to Say-It Notes",
        accessToken,
      });
  } catch (error) {
    console.error("Signup user error: " + error.message);
    errorHandler(res, error.statusCode, error.message);
  }
};

const signinHandler = async (req, res) => {
  try {
    const { email, password } = req.body;

    //Checking the user is exists or not.
    const user = await userModel.findOne({ email });

    if (!user) {
      throw new HttpError(400, "Invalid credentials");
    }

    //Checking the password is correct or not.
    const isValidPassword = await bcrypt.compare(password, user.password);

    if (!isValidPassword) {
      throw new HttpError(400, "Invalid credentials");
    }

    //If everything goes well then creating a access and refresh token and setting it into cookie.
    const accessToken = createAccessToken({ _id: user._id });
    const refreshToken = createRefreshToken({ _id: user._id });

    return res
      .status(200)
      .cookie("token", refreshToken, {
        maxAge: 1000 * 60 * 60 * 24 * 15,
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "Strict",
      })
      .json({
        success: true,
        message: `Welcome back, ${user.username}!`,
        accessToken,
      });
  } catch (error) {
    console.error("Signin user error: " + error.message);
    errorHandler(res, error.statusCode, error.message);
  }
};

export { signupHandler, signinHandler };
