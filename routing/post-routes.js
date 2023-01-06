import { Router } from "express";
import { addPost, deletePost, getAllPost, getPostById, updatePost } from "../controllers/post-controller";


export const postRouter=Router();


postRouter.get("/",getAllPost);
postRouter.get("/:id",getPostById);
postRouter.post("/",addPost);
//update the record inside the database
postRouter.put("/:id",updatePost);
postRouter.delete("/:id",deletePost);

// export default postRouter;