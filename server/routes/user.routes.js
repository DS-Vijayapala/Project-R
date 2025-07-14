import express from 'express'
import { loginUser, registerUser } from '../controllers/user.controller.js';

const userRouter = express.Router();


// User Register Route
userRouter.post('/register', registerUser)


// User Login Route
userRouter.post('/log-in', loginUser)




export default userRouter