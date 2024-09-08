import mongoose from "mongoose";

export const connectDB = async() =>{
    await mongoose.connect('mongodb+srv://astharane28:MONGOasthaDB@cluster0.mceflvl.mongodb.net/food-del').then(() => console.log("DB connected"));
}