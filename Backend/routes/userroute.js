import express from 'express';
import {fetch,create,update,deleteuser,fetchpar} from '../controller/usercontroller.js';

const router=express.Router();
router.get('/fetch',fetch);
router.post('/create',create);
router.put('/update/:id',update);
router.delete('/delete/:id',deleteuser);
router.get('/fetchpar/:id',fetchpar);
export default router;