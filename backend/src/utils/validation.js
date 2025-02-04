import validator from "validator";
import HttpError from "./errorClass.js";

export const signupValidator = (req) => {
  const { username, email, password } = req.body;

  // Username validation
  if (!username || validator.isEmpty(username)) {
    throw new HttpError(400, "Username is required");
  }

  if (!validator.isLength(username, { min: 3, max: 30 })) {
    throw new HttpError(
      400,
      "Username length must be between 3 to 30 characters"
    );
  }

  if (!validator.isAlphanumeric(username)) {
    throw new HttpError(400, "Username can only contain letters and numbers");
  }

  // Email validation
  if (!email || validator.isEmpty(email)) {
    throw new HttpError(400, "Email is required");
  }

  if (!validator.isEmail(email)) {
    throw new HttpError(400, "Please enter a valid email");
  }

  // Password validation
  if (!password || validator.isEmpty(password)) {
    throw new HttpError(400, "Password is required");
  }

  if (!validator.isLength(password, { min: 8 })) {
    throw new HttpError(400, "Password must be at least 8 characters long");
  }

  if (
    !validator.isStrongPassword(password, {
      minLength: 8,
      minLowercase: 1,
      minNumbers: 1,
      minSymbols: 1,
      minUppercase: 1,
    })
  ) {
    throw new HttpError(
      400,
      "Password must contain at least 1 lowercase and uppercase letter, 1 number, and 1 symbol"
    );
  }
};
