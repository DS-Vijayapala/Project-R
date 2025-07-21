import User from "../models/user.model.js"
import Product from "../models/products.model.js"
import Booking from "../models/bookings.model.js"
import { v2 as cloudinary } from 'cloudinary'

// Change Role To Owner

export const changeRoleToOwner = async (req, res) => {

    try {

        const { _id } = req.user;

        await User.findByIdAndUpdate(_id, { role: "owner" });

        res.json({

            success: true,
            message: "You can now list your cars.",

        });

    } catch (error) {

        console.log(error.message);
        res.json({

            success: false,
            message: "Failed to update role.",

        });

    }

};

// API To Add New Product

export const addNewProduct = async (req, res) => {

    try {

        const { _id } = req.user;

        // Ensure productData exists

        if (!req.body.productData) {

            return res.json({

                success: false,
                message: 'Missing product data.',

            });

        }

        let product;

        // Parse productData safely

        try {

            product = JSON.parse(req.body.productData);

        } catch (err) {

            return res.json({

                success: false,
                message: 'Invalid product data format.',

            });

        }

        const imageFile = req.file;

        if (!imageFile) {

            return res.json({
                success: false,
                message: 'No image file uploaded.',

            });

        }

        // Upload to Cloudinary

        const timestamp = Date.now();
        const safeName = req.user.name.toLowerCase().replace(/[^a-z0-9]/g, '');

        const uniqueName = `product-${safeName}-${timestamp}`;

        const imageUpload = await cloudinary.uploader.upload(imageFile.path, {

            folder: 'rentzee/products',
            public_id: uniqueName,
            format: 'webp',
            transformation: [

                { width: 1280 },
                { quality: 'auto' }

            ]

        });

        const image = imageUpload.secure_url;

        // Create new product

        await Product.create({

            ...product,
            owner: _id,
            image,

        });

        res.json({

            success: true,
            message: 'Product added successfully.',

        });

    } catch (error) {

        console.error(error.message);

        res.json({

            success: false,
            message: 'Failed to add new product.',
            error: error.message,

        });

    }

};

// API To List (GET) Owner Product List

export const getOwnerProducts = async (req, res) => {

    try {

        const { _id } = req.user;

        const products = await Product.find({ owner: _id });

        res.json({

            success: true,
            products,
            message: 'Owner products fetched successfully.',

        });

    } catch (error) {

        console.error(error.message);

        res.json({

            success: false,
            message: 'Failed to fetch owner products.',
            error: error.message,

        });

    }

};

// API To Toggle Product Availability

export const toggleProductAvailability = async (req, res) => {

    try {

        const { _id } = req.user;

        const { productId } = req.body;

        const product = await Product.findById(productId);

        if (!product) {

            return res.json({

                success: false,
                message: 'Product not found in database.',

            });

        }

        // Verify car ownership

        if (product.owner.toString() !== _id.toString()) {

            return res.json({

                success: false,
                message: 'Unauthorized Owner.'

            });

        }

        // Toggle availability

        product.isAvaliable = !product.isAvaliable;

        await product.save();

        res.json({

            success: true,
            product,
            message: `Product availability status updated successfully.`,

        });

    } catch (error) {

        console.error(error.message);

        res.json({

            success: false,
            message: 'Unable to toggle Product availability.',
            error: error.message,

        });

    }

};

// API To Delete a Product

export const deleteProduct = async (req, res) => {

    try {

        const { _id } = req.user;

        const { productId } = req.body;

        const product = await Product.findById(productId);

        if (!product) {

            return res.json({

                success: false,
                message: 'Product not found in database.',

            });

        }

        // Verify Product ownership

        if (product.owner.toString() !== _id.toString()) {

            return res.json({

                success: false,
                message: 'Unauthorized Owner.'

            });

        }

        // Soft Delete

        product.owner = process.env.DELETED_OWNER_ID;

        product.isAvaliable = false

        await product.save();

        res.json({

            success: true,
            product,
            message: `Product deleted successfully.`,

        });

    } catch (error) {

        console.error(error.message);

        res.json({

            success: false,
            message: 'Failed to delete product.',
            error: error.message,

        });

    }

};

// API To Get DashBoard Data

export const getDashBoardData = async (req, res) => {

    try {

        const { _id, role } = req.user;

        // Check if the user is an owner

        if (role !== 'owner') {

            return res.status(403).json({

                success: false,
                message: 'Access denied.'

            });

        }

        // Fetch all data in parallel for performance

        const [products, bookings] = await Promise.all([

            Product.find({ owner: _id }),
            Booking.find({ owner: _id }).populate('product').sort({ createdAt: -1 })

        ]);

        // Filter bookings in-memory instead of multiple DB queries

        const pendingBookings = bookings.filter(booking => booking.status === 'pending');

        const completedBookings = bookings.filter(booking => booking.status === 'confirmed');

        // Calculate monthly revenue from confirmed bookings

        const monthlyRevenue = completedBookings.reduce((acc, booking) => acc + booking.price, 0);

        // Prepare dashboard data

        const dashBoardData = {

            totalProducts: products.length,
            totalBookings: bookings.length,
            pendingBookings: pendingBookings.length,
            completedBookings: completedBookings.length,
            recentBookings: bookings.slice(0, 3),
            monthlyRevenue

        };

        res.json({

            success: true,
            dashBoardData,
            message: 'Dashboard data fetched successfully.'

        });

    } catch (error) {

        console.error('Error fetching dashboard data:', error.message);

        res.status(500).json({

            success: false,
            message: 'An unexpected error. Please try again later.',
            error: error.message

        });

    }

};


