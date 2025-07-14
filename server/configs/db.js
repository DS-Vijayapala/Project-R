// src/config/db.js

import mongoose from 'mongoose';

const connectDB = async () => {

    const dbURI = `${process.env.MONGODB_URI}/Test01`;

    try {

        mongoose.connection.on('connected', () => {

            console.log('MongoDB Connected');

        });

        mongoose.connection.on('error', (err) => {

            console.error('MongoDB Connection Error:', err.message);

        });

        mongoose.connection.on('disconnected', () => {

            console.warn('MongoDB Disconnected');

        });

        process.on('SIGINT', async () => {

            await mongoose.connection.close();

            console.log('🔒 MongoDB connection closed due to app termination');

            process.exit(0);

        });

        await mongoose.connect(dbURI, {

            dbName: 'Test01',
        });

    } catch (err) {

        console.error('🚨 Initial MongoDB Connection Failed:', err.message);

        process.exit(1);

    }

};

export default connectDB;
