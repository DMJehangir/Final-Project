import express, { application } from 'express';
import { deleteUser, dislike, getUser, like, subscribe, unsubscribe, update } from '../controllers/user.js';
import { verifyToken } from '../verifyToken.js';

const router = express.Router()

// update user
router.put("/:id", verifyToken, update)
// delete user
router.delete("/:id", deleteUser)
// get a user
router.get("/find/:id", getUser)
// subscribe
router.get("/sub/:id", subscribe)
// unsubscribe
router.get("/unsub/:id", unsubscribe)
// like a video
router.get("/like/:id", like)
// dislike a video
router.get("/dislike/:id", dislike)

export default router;