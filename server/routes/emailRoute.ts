import express from 'express';
import { getEmailLayout } from '../controllers/emailController';


const router = express.Router();

router.get('/getEmailLayout',getEmailLayout)


export default router;
