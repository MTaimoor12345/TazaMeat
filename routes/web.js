import express from "express";
const router = express.Router();

import Studentcontroler from "../controler/StudentControler.js";

router.get('/',Studentcontroler.getAllDoc);
router.post('/',Studentcontroler.createDoc);
router.get('/edit/:id',Studentcontroler.editDoc);
router.post('/update/:id',Studentcontroler.updateDocById);
router.post('/delet/:id',Studentcontroler.deletDocById);

export default router