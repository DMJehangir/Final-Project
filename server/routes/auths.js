import express, { application } from 'express';
import { signin, signup } from '../controllers/auth.js';

const router = express.Router()

// Create user
router.post('/signup', signup)
// Login
router.post('/signin', signin)
// verification
router.post('/google',)


export default router;