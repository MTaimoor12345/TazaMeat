import { text } from "express";
import mongoose, { Schema } from "mongoose";

const seafoodSchema = new mongoose.Schema({
    title:{type:String , require:true},
    price:{type:Number , require:true},
    img:{type:String , require:true}
});

const seafoodModel = mongoose.model("seafood",seafoodSchema);

export default seafoodModel;