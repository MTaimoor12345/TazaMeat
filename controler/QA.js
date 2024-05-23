import express from "express";
import qpModel from "../models/QP.js";
import fs from 'fs/promises';
import path from 'path';

class QAcontroler {

    static createDoc =async(req,res)=>{
            try {
                const {Animal,Eid,CNIC,name,fname,number,Address,qpdetail1,qpdetail2,qpdetail3,qpdetail4,qpdetail5,qpdetail6,qpdetail7,quantity,totalPrice}=req.body;
                const doc =new qpModel({
                    Animal:Animal,
                    Eid:Eid,
                    CNIC:CNIC,
                    name:name,
                    fname:fname,
                    number:number,
                    Address:Address,
                    qpdetail1:qpdetail1,
                    qpdetail2:qpdetail2,
                    qpdetail3:qpdetail3,
                    qpdetail4:qpdetail4,
                    qpdetail5:qpdetail5,
                    qpdetail6:qpdetail6,
                    qpdetail7:qpdetail7,
                    quantity:quantity,
                    totalPrice:totalPrice
                  
                });
                const result=await doc.save();
                res.redirect("/submit")
                console.log(result)
                
            } catch (error) {
                console.log(error)
            }
        }



    static getAll =(req,res)=>{
        res.render("QA");
    }

}


export default QAcontroler;