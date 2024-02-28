import express from "express";
import muttonModel from "../models/mutton.js";
import fs from 'fs/promises';
import path from 'path';

class muttoncontroler {
    static createDoc = async (req, res) => {
        try {
            const { title,price } = req.body;

            // Assuming you have an 'img' field in your request containing the image file
            const imgFile = req.files.img;

            // Generate a unique filename
            const fileName = Date.now() + path.extname(imgFile.name);

            // Use import.meta.url to get the module URL and then extract the directory path
            const currentDir = path.dirname(new URL(import.meta.url).pathname);

            // Construct the correct uploadPath
            const uploadPath = path.join(currentDir,  fileName).replace(/\\/g, '');


            // Move the image to a specific folder (e.g., 'uploads') on your server
            await imgFile.mv(uploadPath);

            // Convert the image file to base64
            const imgBase64 = await fs.readFile(uploadPath, { encoding: 'base64' });

            // Create a new document with the base64 image
            const doc = new muttonModel({
                title: title,
                price: price,
                img: "data:image/jpeg;base64," + imgBase64,
            });

            // Save the document to the database
            const result = await doc.save();

            // Redirect or respond as needed
            res.redirect('/mutton');
            console.log(result);
        } catch (error) {
            console.log(error);
            // Handle error response as needed
            res.status(500).send('Internal Server Error');
        }
    };




    // static createDoc =async(req,res)=>{
    //     try {
    //         const {name,age,fees}=req.body;
    //         const doc =new muttonModel({
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





    static getAllDoc =async (req,res)=>{
        try {
            const result = await muttonModel.find();
        res.render("mutton",{data: result})
            
        } catch (error) {
            console.log(error)
        }
    }

    static editDoc = async (req,res)=>{
      try {
        const result = await muttonModel.findById(req.params.id);
        res.render("edit1",{data: result})
      } catch (error) {
        console.log(error)
      }
    }
    static updateDocById =async(req,res)=>{
        try {
            const result = await muttonModel.findByIdAndUpdate(req.params.id,req.body);
            

        } catch (error) {
            console.log(error)
        }
        res.redirect("/mutton");
    }
    static deletDocById =async(req,res)=>{
        try {
            const result = await muttonModel.findByIdAndDelete(req.params.id);
            

        } catch (error) {
            console.log(error)
        }
        res.redirect("/mutton");
    }
}



export default muttoncontroler;