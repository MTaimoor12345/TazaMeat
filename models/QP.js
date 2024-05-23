import { text } from "express";
import mongoose, { Schema } from "mongoose";

const qpSchema = new mongoose.Schema({
    Animal:{type:String , require:true},
    Eid:{type:String , require:true},
    CNIC:{type:String , require:true},
    name:{type:String , require:true},
    fname:{type:String , require:true},
    number:{type:Number , require:true},
    Address:{type:String , require:true},
    qpdetail1:{type:String , require:true},
    qpdetail2:{type:String , require:false},
    qpdetail3:{type:String , require:false},
    qpdetail4:{type:String , require:false},
    qpdetail5:{type:String , require:false},
    qpdetail6:{type:String , require:false},
    qpdetail7:{type:String , require:false},
    quantity:{type:Number , require:true},
    totalPrice:{type:Number , require:true},
});

const qpModel = mongoose.model("qp",qpSchema);

export default qpModel;