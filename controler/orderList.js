import express from "express";
import qpModel from "../models/QP.js";
import fs from 'fs/promises';
import path from 'path';

class orderList {
   




    // static createDoc =async(req,res)=>{
    //     try {
    //         const {name,age,fees}=req.body;
    //         const doc =new beefModel({
    //             name:name,
    //             age:age,
    //             fees:fees,
    //             // img:img,
    //         });
    //         const result=await doc.save();
    //         res.redirect("/")
    //         console.log(result)
            
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    static getAll =(req,res)=>{
        res.render("orderList");
    }



    static AllDoc =async (req,res)=>{
        try {
            const result = await qpModel.find();
        res.render("orderList",{data2: result})
            
        } catch (error) {
            console.log(error)
        }
    }

    static editDoc = async (req,res)=>{
      try {
        const result = await qpModel.findById(req.params.id);
        res.render("orderEdit",{data: result})
      } catch (error) {
        console.log(error)
      }
    }
    static updateDocById =async(req,res)=>{
        try {
            const result = await qpModel.findByIdAndUpdate(req.params.id,req.body);
            

        } catch (error) {
            console.log(error)
        }
        res.redirect("/order");
    }
    static deletDocById =async(req,res)=>{
        try {
            const result = await qpModel.findByIdAndDelete(req.params.id);
            

        } catch (error) {
            console.log(error)
        }
        res.redirect("/order");
    }
}


export default orderList;