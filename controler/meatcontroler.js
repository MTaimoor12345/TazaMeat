import express from "express";
import studentModel from "../models/student.js";
import fs from 'fs/promises';
import path from 'path';

class meatcontroler {

    static getAll =(req,res)=>{
        res.render("index1");
    }

}


export default meatcontroler;