import { getPosts, createPost } from "../controllers/posts.js";
import express from "express";

//Initializes the router
const router = express.Router();

//Initializes the get and post routers
router.get("/", getPosts);
router.post("/", createPost);

export default router;
