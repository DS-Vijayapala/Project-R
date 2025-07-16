import express from 'express'
import { protect } from '../middleware/auth.middleware.js';
import { changeRoleToOwner, addNewProduct } from '../controllers/owner.controller.js';
import Upload from '../middleware/multer.middleware.js'


const ownerRouter = express.Router();

// Change Role To Owner

ownerRouter.post('/change-role', protect, changeRoleToOwner)

// List New Product

ownerRouter.post('/add-product', Upload.single("image"), protect, addNewProduct)




export default ownerRouter