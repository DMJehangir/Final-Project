import express from 'express';
import { addVideo, deleteVideo, getVideo, updateVideo } from '../controllers/video.js';
import { verifyToken } from '../verifyToken.js';

const router = express.Router();

// Create

router.post('/', verifyToken, addVideo)

// Update

router.put('/:id', verifyToken, updateVideo)

// Delete

router.delete('/:id', verifyToken, deleteVideo)

// Get

router.get('/find/:id', getVideo)

export default router;