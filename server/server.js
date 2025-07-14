import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import compression from 'compression';
import 'dotenv/config';
import connectDB from './configs/db.js';
import userRouter from './routes/user.routes.js';

// ─────────────────────────────────────────────────────
// Initialize Express App

const app = express();

// ─────────────────────────────────────────────────────
// Connect DataBase

await connectDB()



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
// Add Routes

app.use('/api/user', userRouter)


// ─────────────────────────────────────────────────────
// Server Start

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));

