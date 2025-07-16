import User from "../models/user.models.js"
import Product from "../models/products.models.js"
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

// API To List New Product

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
