
import jwt from 'jsonwebtoken'


// Genarate JWT Token

export const genarateToken = (userId) => {

    const payload = userId;

    return jwt.sign(payload, process.env.JWT_SECRET)

}