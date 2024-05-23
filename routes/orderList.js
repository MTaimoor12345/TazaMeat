import express from "express";
const router = express.Router();

import orderList from "../controler/orderList.js";

// router.get('/',orderList.getAll);
router.get('/',orderList.AllDoc);
router.get('/edit/:id',orderList.editDoc);
router.post('/update/:id',orderList.updateDocById);
router.post('/delet/:id',orderList.deletDocById);


export default router