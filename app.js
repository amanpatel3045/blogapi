import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { userRouter } from "./routing/user-routes";
import { postRouter } from "./routing/post-routes";
import cors from "cors";

const app = express();
dotenv.config();
//Middleware
app.use(cors());
app.use(express.json());
app.use("/user", userRouter);
app.use("/posts", postRouter);
//Connection to MongoDB
mongoose
  .connect(
    `mongodb+srv://admin2:${process.env.MONGODB_PASSWORD}@cluster0.gs3j0pj.mongodb.net/?retryWrites=true&w=majority`
  )
  .then(() =>
    app.listen(5000, () => console.log("Listening to localhost Port 5000"))
  )
  .catch((err) => console.log(err));
//password=WOmOs6ZDSDWcWlpX
