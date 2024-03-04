import express from "express";
const router = express.Router();


import QAcontroler from "../controler/QA.js";


router.get('/',QAcontroler.getAll);
// router.post('/',Studentcontroler.createDoc);
// router.get('/edit/:id',Studentcontroler.editDoc);
// router.post('/update/:id',Studentcontroler.updateDocById);
// router.post('/delet/:id',Studentcontroler.deletDocById);

export default router