import express from "express";
const router = express.Router();


import test from "../controler/test2.js";


router.get('/',test.test2);
// router.post('/',Studentcontroler.createDoc);
// router.get('/edit/:id',Studentcontroler.editDoc);
// router.post('/update/:id',Studentcontroler.updateDocById);
// router.post('/delet/:id',Studentcontroler.deletDocById);

export default router