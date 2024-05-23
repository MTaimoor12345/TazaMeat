import express from "express";
import qpModel from "../models/QP.js";
import fs from 'fs/promises';
import path from 'path';

class submitcontroler {

  



    static getAll =(req,res)=>{
        res.render("submit");
    }

}


export default submitcontroler;