import express from "express";
import seafoodModel from "../models/seafood.js";
import fs from 'fs/promises';
import path from 'path';


class test3 {

    static test3 =async (req,res)=>{
        try {
            const result = await seafoodModel.find();
        res.send(result)
            
        } catch (error) {
            console.log(error)
        }
    }

}


export default test3;