import express from "express";
const router = express.Router();

import muttoncontroler from "../controler/mutton.js";

router.get('/',muttoncontroler.getAllDoc);
router.post('/',muttoncontroler.createDoc);
router.get('/edit/:id',muttoncontroler.editDoc);
router.post('/update/:id',muttoncontroler.updateDocById);
router.post('/delet/:id',muttoncontroler.deletDocById);


export default router