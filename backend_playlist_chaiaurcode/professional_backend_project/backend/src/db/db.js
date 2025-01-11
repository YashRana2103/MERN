import mongoose, { mongo } from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(
      `\nMongoDB Connected. DB HOST: ${connectionInstance.connection.host}`
    );
    // console.log(connectionInstance);
  } catch (err) {
    console.error("MongoDB connection error:\n", err);
    process.exit(1);
  }
};

export default connectDB;
