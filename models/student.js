import { text } from "express";
import mongoose, { Schema } from "mongoose";

const studentSchema = new mongoose.Schema({
    name:{type:String , require:true},
    fees:{type:Number , require:true},
    age:{type:Number , require:true},
    img:{type:String , require:true}
});

const studentModel = mongoose.model("student",studentSchema);

export default studentModel;

