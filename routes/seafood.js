import express from "express";
const router = express.Router();

import seafoodcontroler from "../controler/seafood.js";

router.get('/',seafoodcontroler .tAllDoc);
router.post('/',seafoodcontroler .createDoc);
router.get('/edit/:id',seafoodcontroler .editDoc);
router.post('/update/:id',seafoodcontroler .updateDocById);
router.post('/delet/:id',seafoodcontroler .deletDocById);

export default router