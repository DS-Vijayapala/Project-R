import User from "../models/user.models.js"


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

        const { _id } = req.user

        let product = JSON.parse(req.body.productData)

        const imageFile = req.file;





    } catch (error) {

        console.log(error.message);
        res.json({

            success: false,
            message: "Failed to Add New Product.",
            error: error.message

        });

    }

}
