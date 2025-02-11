import express from "express";
import { config } from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

import { connectToDatabase } from "./config/database.connection.js";
import authRouter from "./routes/auth.routes.js";
import noteRouter from "./routes/note.routes.js";
config();

const app = express();
const PORT = process.env.PORT || 5000;

//Middlewares
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: process.env.ORIGIN,
    credentials: true,
    methods: "GET, POST, PATCH",
  })
);

//Routes
app.use("/api/v1/auth/", authRouter);
app.use("/api/v1/note", noteRouter);

app.listen(PORT, () => {
  connectToDatabase();
  console.log(`Server is running at port: ${PORT}`);
});
