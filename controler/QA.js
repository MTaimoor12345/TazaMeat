import express from "express";
import studentModel from "../models/student.js";
import fs from 'fs/promises';
import path from 'path';

class QAcontroler {

    static getAll =(req,res)=>{
        res.render("QA");
    }

}


export default QAcontroler;