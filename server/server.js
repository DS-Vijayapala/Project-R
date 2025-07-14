import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import compression from 'compression';
import 'dotenv/config';

// ─────────────────────────────────────────────────────

// Initialize Express App

const app = express();

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

// Server Start

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));

