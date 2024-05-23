import express from "express";
const router = express.Router();


import submitcontroler from "../controler/submit.js";


router.get('/',submitcontroler.getAll);
// router.post('/',QAcontroler.createDoc);
// router.get('/edit/:id',Studentcontroler.editDoc);
// router.post('/update/:id',Studentcontroler.updateDocById);
// router.post('/delet/:id',Studentcontroler.deletDocById);

export default router