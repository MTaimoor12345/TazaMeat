import express from "express";
const router = express.Router();

import beefcontroler from "../controler/beef.js";

router.get('/',beefcontroler.AllDoc);
router.post('/',beefcontroler.createDoc);
router.get('/edit/:id',beefcontroler.editDoc);
router.post('/update/:id',beefcontroler.updateDocById);
router.post('/delet/:id',beefcontroler.deletDocById);

export default router