import mongoose from 'mongoose';

mongoose.set('strictQuery', true);

export const connectDB = async () => {
    const url = `mongodb://localhost:27017/monsters`;
    try {
        const connection = await mongoose.connect(url, {
            useNewUrlParser: true, // Recommended for MongoDB driver
            useUnifiedTopology: true,
        });
        console.log('Database connected');
    } catch (e) {
        console.log("Failed to connect to database", e);
    }
};
