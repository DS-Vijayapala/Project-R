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

// API To Check Availability Of Products For The Given Date And Location

export const getAvailableProducts = async (req, res) => {

    try {

        const { location, pickupDate, returnDate } = req.body;

        if (!location || !pickupDate || !returnDate) {

            return res.json({
                success: false,
                message: 'Location, pickupDate, and returnDate are required.',
            });

        }
        // If Donsent work this watch 06.49.21 In Video

        const products = await Product.find({ location, isAvaliable: true });

        const availableProducts = [];

        for (const product of products) {

            const isAvailable = await checkAvailability(product._id, pickupDate, returnDate);

            if (isAvailable) {

                availableProducts.push(product);

            }

        }

        res.json({

            success: true,
            products: availableProducts,
            message: 'Available products fetched successfully.',

        });

    } catch (error) {

        console.error(error.message);

        res.json({

            success: false,
            message: 'Failed to fetch available products.',
            error: error.message,

        });

    }

};