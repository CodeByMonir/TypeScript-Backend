import mongoose from "mongoose"
import config from "./index.js"


export const connectDB = async () => {
    try {
        mongoose.connect(config.dataBase);
        console.log("Connected MongoDB Successfully!");
    } catch (error) {
        console.log("Failed to Connect MongoDB!");
    }
}