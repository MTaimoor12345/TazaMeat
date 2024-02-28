import express from "express";
import muttonModel from "../models/mutton.js";
import fs from 'fs/promises';
import path from 'path';


class test1 {

    static test1 =async (req,res)=>{
        try {
            const result = await muttonModel.find();
        res.send(result)
            
        } catch (error) {
            console.log(error)
        }
    }

}


export default test1;