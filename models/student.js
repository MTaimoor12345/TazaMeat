import { text } from "express";
import mongoose, { Schema } from "mongoose";

const studentSchema = new mongoose.Schema({
    title:{type:String , require:true},
    price:{type:Number , require:true},
    img:{type:String , require:true}
});

const studentModel = mongoose.model("student",studentSchema);

export default studentModel;

