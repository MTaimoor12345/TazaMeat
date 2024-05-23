import express from "express";
import studentModel from "../models/student.js";
import muttonModel from "../models/mutton.js";
import beefModel from "../models/beef.js";
import seafoodModel from "../models/seafood.js";

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


    static getAllDoc1 =async (req,res)=>{
        try {
            const result = await muttonModel.find();
        res.send(result)
            
        } catch (error) {
            console.log(error)
        }
    }



    static getAllDoc2 =async (req,res)=>{
        try {
            const result = await beefModel.find();
        res.send(result)
            
        } catch (error) {
            console.log(error)
        }
    }



    static getAllDoc3 =async (req,res)=>{
        try {
            const result = await seafoodModel.find();
        res.send(result)
            
        } catch (error) {
            console.log(error)
        }
    }

}


export default test;