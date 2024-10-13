import mongoose from 'mongoose';
import colore from 'colors';
const connectDB = async() => {
    try {
        
            const conn = await mongoose.connect(process.env.MONGO_URL);
            console.log(`Connected To Mongodb Database  ${conn.connection.host}`);

        
    }catch(error) {
        console.log(`Error in Mongodb ${error}`.bgMagenta.white);
    }
}
export default connectDB;