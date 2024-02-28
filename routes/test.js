import express from "express";
const router = express.Router();


import test from "../controler/test.js";


router.get('/',test.getAllDoc);
router.get('/1',test.getAllDoc1);
router.get('/2',test.getAllDoc2);
router.get('/3',test.getAllDoc3);


export default router