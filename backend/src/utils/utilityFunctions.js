import jwt from "jsonwebtoken";

const errorHandler = (res, statusCode, errorMessage) => {
  return res.status(statusCode || 500).json({
    success: false,
    message: errorMessage || "Something went wrong",
  });
};

const createAccessToken = (payload) => {
  const accessToken = jwt.sign(payload, process.env.JWT_SECRET_KEY, {
    expiresIn: "10m",
  });

  return accessToken;
};

const createRefreshToken = (payload) => {
  const refreshToken = jwt.sign(payload, process.env.JWT_SECRET_KEY, {
    expiresIn: "15d",
  });

  return refreshToken;
};

export { errorHandler, createAccessToken, createRefreshToken };
