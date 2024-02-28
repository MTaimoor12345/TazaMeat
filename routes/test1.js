import express from "express";
const router = express.Router();


import test from "../controler/test1.js";


router.get('/',test.test1);
// router.post('/',Studentcontroler.createDoc);
// router.get('/edit/:id',Studentcontroler.editDoc);
// router.post('/update/:id',Studentcontroler.updateDocById);
// router.post('/delet/:id',Studentcontroler.deletDocById);

export default router