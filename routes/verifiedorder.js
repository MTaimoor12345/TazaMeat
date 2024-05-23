import express from "express";
const router = express.Router();

import verifiedordercontroler from "../controler/verifiedorder.js";

router.get('/',verifiedordercontroler.getAll);
router.post('/verifiedorder/:id', verifiedordercontroler.createDoc);
// router.get('/edit/:id',verifiedordercontroler.editDoc);
// router.post('/update/:id',verifiedordercontroler.updateDocById);
// router.post('/delet/:id',verifiedordercontroler.deletDocById);


export default router