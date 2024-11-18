import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

// Enable mongoose debug mode
mongoose.set('debug', true);

const connectMongoDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_DB_URL);
        console.log('Successfully connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
        process.exit(1); // Exit the application if MongoDB connection fails
    }
};

export default connectMongoDB;
