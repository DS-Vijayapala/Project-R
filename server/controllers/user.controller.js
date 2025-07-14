import User from '../models/user.models.js'
import bcrypt from 'bcrypt'
import { genarateToken } from '../utils/genarateToken.js'



// Register New User

export const registerUser = async (req, res) => {

    try {

        const { name, email, password } = req.body;

        if (!name || !email || !password) {

            return res.json({
                success: false,
                message: 'Please fill in your name, email, and password to continue.',

            });

        }

        if (password.length < 8) {

            return res.json({

                success: false,
                message: 'Your password must be at least 8 characters long.',

            });

        }

        const userExists = await User.findOne({ email });

        if (userExists) {

            return res.json({

                success: false,
                message: 'This email is already registered. Please login or use a different email.',

            });

        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await User.create({

            name,
            email,
            password: hashedPassword,

        });

        const token = genarateToken(user._id.toString());

        res.json({

            success: true,
            token,
            message: `Welcome ${user.name}, your account has been created successfully!`,

        });

    } catch (error) {

        console.error(error.message);

        res.json({
            success: false,
            message: 'Something went wrong while creating your account. Please try again.',
        });

    }

};

