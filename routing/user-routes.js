import { Router } from "express";
import { getAllUsers, getUserById, login, signup } from "../controllers/user-controllers";



export const userRouter=Router();

userRouter.get("/",getAllUsers);

userRouter.get("/:id",getUserById);

userRouter.post("/signup",signup);

userRouter.post("/login",login);

// exports  userRouter;
