import express from 'express'
import { getUserData, loginUser, registerUser } from '../controllers/user.controller.js';
import { protect } from '../middleware/auth.middleware.js';

const userRouter = express.Router();


// User Register Route
userRouter.post('/register', registerUser)


// User Login Route
userRouter.post('/log-in', loginUser)

// Get User Data
userRouter.get('/user-data', protect, getUserData)




export default userRouter