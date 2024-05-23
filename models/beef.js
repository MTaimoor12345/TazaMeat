import { text } from "express";
import mongoose, { Schema } from "mongoose";

const beefSchema = new mongoose.Schema({
    title:{type:String , require:true},
    price:{type:Number , require:true},
    img:{type:String , require:true}
});

const beefModel = mongoose.model("beef",beefSchema);

export default beefModel;