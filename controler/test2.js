import express from "express";
import beefModel from "../models/beef.js";
import fs from 'fs/promises';
import path from 'path';


class test2 {

    static test2 =async (req,res)=>{
        try {
            const result = await beefModel.find();
        res.send(result)
            
        } catch (error) {
            console.log(error)
        }
    }

}


export default test2;