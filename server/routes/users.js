import express from 'express';
import { test, deleteUser, dislike, getUser, like, subscribe, unsubscribe, update } from '../controllers/user.js';
import { verifyToken } from '../verifyToken.js';

const router = express.Router()
// test fire
router.get("/test", test)
// update user
router.put("/:id", verifyToken, update)
// delete user
router.delete("/:id", verifyToken, deleteUser)
// get a user
router.get("/find/:id", getUser)
// subscribe
router.get("/sub/:id", verifyToken, subscribe)
// unsubscribe
router.get("/unsub/:id", verifyToken, unsubscribe)
// like a video
router.get("/like/:videoId", verifyToken, like)
// dislike a video
router.get("/dislike/:videoId", verifyToken, dislike)

export default router;