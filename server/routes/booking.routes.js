import express from 'express'
import {
    getAvailableProducts,
    createBooking,
    getUserBooking,
    getOwnerBooking,
    changeBookingStatus
} from '../controllers/booking.controller.js'
import { protect } from '../middleware/auth.middleware.js'


const bookingRouter = express.Router();

// Check Availability Of Product For Given Date
bookingRouter.post('/check-availability', getAvailableProducts)

// Add Product Booking
bookingRouter.post('/create-booking', protect, createBooking)

// List User Bookings
bookingRouter.get('/list-user-bookings', protect, getUserBooking)

// List Owner Bookings
bookingRouter.get('/list-owner-bookings', protect, getOwnerBooking)

// Change Booking Status
bookingRouter.post('/change-status', protect, changeBookingStatus)

export default bookingRouter