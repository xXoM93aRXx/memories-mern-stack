import {
  getPosts,
  createPost,
  updatePost,
  deletePost,
} from "../controllers/posts.js";
import express from "express";

//Initializes the router
const router = express.Router();

//Initializes the get and post routers
router.get("/", getPosts);
router.post("/", createPost);
router.patch("/:id", updatePost);
router.delete("/:id", deletePost);
export default router;
