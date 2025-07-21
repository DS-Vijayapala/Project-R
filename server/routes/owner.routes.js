import express from 'express'
import { protect } from '../middleware/auth.middleware.js';
import {
    changeRoleToOwner,
    addNewProduct,
    getOwnerProducts,
    toggleProductAvailability,
    deleteProduct,
    getDashBoardData,
    updateUserImage
} from '../controllers/owner.controller.js';
import Upload from '../middleware/multer.middleware.js'


const ownerRouter = express.Router();

// Change Role To Owner

ownerRouter.post('/change-role', protect, changeRoleToOwner)

// Add New Product

ownerRouter.post('/add-product', Upload.single("image"), protect, addNewProduct)

// GET Owner Product List

ownerRouter.get('/get-products-list', protect, getOwnerProducts)

// Toggle Product Availability

ownerRouter.post('/toggle-product', protect, toggleProductAvailability)

// Toggle Product Availability

ownerRouter.post('/delete-product', protect, deleteProduct)

// Get DashBoard Data

ownerRouter.get('/dashboard-data', protect, getDashBoardData)

// Update User Image

ownerRouter.post('/update-image', Upload.single("image"), protect, updateUserImage)

export default ownerRouter