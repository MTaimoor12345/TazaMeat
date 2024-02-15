import express from "express";
const router = express.Router();


import meatcontroler from "../controler/meatcontroler.js";


router.get('/',meatcontroler.getAll);
// router.post('/',Studentcontroler.createDoc);
// router.get('/edit/:id',Studentcontroler.editDoc);
// router.post('/update/:id',Studentcontroler.updateDocById);
// router.post('/delet/:id',Studentcontroler.deletDocById);

export default router