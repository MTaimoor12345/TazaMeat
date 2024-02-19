import express from "express";
import studentModel from "../models/student.js";
import fs from 'fs/promises';
import path from 'path';


class test {

    static getAllDoc =async (req,res)=>{
        try {
            const result = await studentModel.find();
        res.send(result)
            
        } catch (error) {
            console.log(error)
        }
    }

}


export default test;