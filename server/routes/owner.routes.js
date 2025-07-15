import express from 'express'
import { protect } from '../middleware/auth.middleware.js';
import { changeRoleToOwner } from '../controllers/owner.controller.js';


const ownerRouter = express.Router();

// Change Role To Owner

ownerRouter.post('/change-role', protect, changeRoleToOwner)





export default ownerRouter