import { text } from "express";
import mongoose, { Schema } from "mongoose";

const muttonSchema = new mongoose.Schema({
    title:{type:String , require:true},
    price:{type:Number , require:true},
    img:{type:String , require:true}
});

const muttonModel = mongoose.model("mutton",muttonSchema);

export default muttonModel;