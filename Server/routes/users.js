import express from "express";

import {
    getUser,
    getUserFrirnds,
    addRemoveFriend,
} from "../Controllers/users.js"

import { verifyToken } from "../middleware/auth.js"

const router = express.Router();

// read 

router.get("/:id", verifyToken, getUser);

router.get(":/id/friends", verifyToken, getUserFrirnds);

// update

router.patch("/:id/:friends", verifyToken, addRemoveFriend);

export default router;