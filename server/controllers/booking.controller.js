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

// API To Add Product Booking

export const createBooking = async (req, res) => {

    try {

        const { product, pickupDate, returnDate } = req.body;

        const { _id } = req.user;

        // Check product existence and availability

        const productData = await Product.findById(product);

        if (!productData || !productData.isAvaliable) {

            return res.json({

                success: false,
                message: 'Product not found.',

            });

        }

        // Check if product is available for requested dates

        const isAvailable = await checkAvailability(product, pickupDate, returnDate);

        if (!isAvailable) {

            return res.json({

                success: false,
                message: 'Product is already booked.',

            });

        }

        // Calculate total price

        const picked = new Date(pickupDate);
        const returned = new Date(returnDate);
        const noOfDays = Math.max(1, Math.ceil((returned - picked) / (1000 * 60 * 60 * 24)));
        const price = productData.pricePerDay * noOfDays;

        // Create booking

        const booking = await Booking.create({

            product,
            user: _id,
            owner: productData.owner,
            pickupDate,
            returnDate,
            price,

        });

        res.json({

            success: true,
            booking,
            message: 'Booking created successfully.',

        });

    } catch (error) {

        console.error(error.message);

        res.json({

            success: false,
            message: 'Failed to create booking. Try again later.',
            error: error.message,

        });

    }

};

// API To List User Bookings

export const getUserBooking = async (req, res) => {

    try {

        const { _id } = req.user;

        const bookings = await Booking.find({ user: _id })
            .populate("product")
            .sort({ createdAt: -1 });

        res.json({

            success: true,
            bookings,
            message: 'User bookings fetched successfully.',

        });

    } catch (error) {

        console.error(error.message);

        res.json({

            success: false,
            error: error.message,
            message: 'Failed to fetch user bookings.',

        });

    }

};


// API To List Owner Bookings

export const getOwnerBooking = async (req, res) => {

    try {

        if (req.user.role !== 'owner') {

            return res.json({

                success: false,
                message: 'Not Authorized.',

            });

        }

        const bookings = await Booking.find({ owner: req.user._id })
            .populate('product user')
            .select('-user.password')
            .sort({ createdAt: -1 });

        res.json({

            success: true,
            bookings,
            message: 'Owner bookings fetched successfully.',

        });

    } catch (error) {

        console.error(error.message);

        res.json({

            success: false,
            error: error.message,
            message: 'Failed to fetch owner bookings.',

        });

    }

};
