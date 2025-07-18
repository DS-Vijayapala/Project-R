import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

export const protect = async (req, res, next) => {

    const token = req.headers.authorization;

    if (!token) {

        return res.json({

            success: false,
            message: "Access denied. No token provided.",

        });

    }

    try {

        const userId = jwt.decode(token, process.env.JWT_SECRET);

        if (!userId) {

            return res.json({
                success: false,
                message: "Invalid token payload. User ID missing.",

            });

        }

        req.user = await User.findById(userId).select("-password");

        next();

    } catch (error) {

        console.log(error.message);

        return res.json({
            success: false,
            message: "Invalid or expired token.",

        });

    }

};
