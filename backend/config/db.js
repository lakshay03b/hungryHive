import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://lakshaybansal43f:Lakshay25@cluster0.xfbadcs.mongodb.net/food_ordering').then(()=>console.log("DB Connected"));
}