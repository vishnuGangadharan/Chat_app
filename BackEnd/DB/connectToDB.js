import mongoose from "mongoose";

const connectToMongoDB = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_DB);
        console.log('connect to mongoDB');
    } catch (error) {
        console.log('error while connecting mongoDB',error.message);
    }
}

export default connectToMongoDB