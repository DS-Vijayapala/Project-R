import User from "../models/user.model.js"
import Product from "../models/products.model.js"
import Booking from "../models/bookings.model.js"


// Function To Check Availability Of Product For Given Date

const checkAvailability = async (product, pickupDate, returnDate) => {

    const bookings = await Booking.find({

        product,
        pickupDate: { $lte: returnDate },
        returnDate: { $gte: pickupDate },
        status: { $in: ['pending', 'confirmed'] }

    });

    return bookings.length === 0;

};

