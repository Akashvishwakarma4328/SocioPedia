import express from "express";

import { getFeedPosts, getUserPosts, likePost } from "../Controllers/posts.js"

import { verifyToken } from "../middleware/auth.js";
const router = express.Router();


// Read 

router.get("/", verifyToken, getFeedPosts);
router.get("/:userId/posts", verifyToken, getUserPosts);


// update  

router.patch(":id/like", verifyToken, likePost);

export default router;