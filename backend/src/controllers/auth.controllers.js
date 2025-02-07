import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

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

    //Throwing an error according to what data is already exists email or username.
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

    //Creating a new user
    const newUser = await userModel.create({
      username,
      email,
      password: hashedPassword,
    });

    //Creating access and refresh token
    const accessToken = createAccessToken({ _id: newUser._id });
    const refreshToken = createRefreshToken({ _id: newUser._id });

    //Passing refresh token into cookie and access token in response
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
        message: `Welcome ${newUser.username} on Noteoo.`,
        accessToken,
      });
  } catch (error) {
    console.error("Signup user error: " + error.message);
    return errorHandler(res, error.statusCode, error.message);
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

    //If everything goes well then creating new access and refresh token.
    const accessToken = createAccessToken({ _id: user._id });
    const refreshToken = createRefreshToken({ _id: user._id });

    //Passing new refresh token into cookie and access token in response.
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
    return errorHandler(res, error.statusCode, error.message);
  }
};

const refreshTokenHandler = async (req, res) => {
  try {
    const { token } = req.cookies;

    //Checking if the token exists or not in the cookie.
    if (!token) {
      throw new HttpError(404, "Please login");
    }

    //Checking if the token is valid or not.
    const isValidToken = jwt.verify(token, process.env.JWT_SECRET_KEY);

    if (!isValidToken) {
      throw new HttpError("401", "Please login");
    }

    //If everything goes well then creating a new accessToken and passing it into response.
    const accessToken = createAccessToken({ _id: isValidToken._id });

    return res.status(201).json({
      success: true,
      message: "Access token created successfully",
      accessToken,
    });
  } catch (error) {
    console.log("Refresh token handler error: " + error.message);
    errorHandler(res, error.statusCode, error.message);
  }
};

const logoutHandler = (req, res) => {
  try {
    const isCookieCleared = res.clearCookie("token");

    if (isCookieCleared) {
      return res.status(200).json({
        success: true,
        message: "Logged out successfully",
      });
    }
  } catch (error) {
    console.error("Logout handler error: ", error.message);
    return errorHandler(res, error.statusCode, error.message);
  }
};

export { signupHandler, signinHandler, refreshTokenHandler, logoutHandler };
