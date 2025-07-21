import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import compression from 'compression';
import 'dotenv/config';
import connectDB from './configs/db.js';
import userRouter from './routes/user.routes.js';
import ownerRouter from './routes/owner.routes.js';
import connectCloudinary from './configs/cloudinary.js'
import bookingRouter from './routes/booking.routes.js';

// ─────────────────────────────────────────────────────
// Initialize Express App

const app = express();

// ─────────────────────────────────────────────────────
// Connect DataBase And Cloudinary

await connectDB()
await connectCloudinary()

// ─────────────────────────────────────────────────────
// Middleware

app.use(cors());
app.use(helmet());
app.use(morgan('dev'));
app.use(compression());
app.use(express.json());

// ─────────────────────────────────────────────────────
// Health Check Route

app.get('/', (req, res) => {

    res.status(200).json({ message: 'Rentzee Server is Running' });

});

// ─────────────────────────────────────────────────────
// Add API Routes

app.use('/api/user', userRouter)
app.use('/api/owner', ownerRouter)
app.use('/api/booking-data', bookingRouter)


// ─────────────────────────────────────────────────────
// Server Start

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));

