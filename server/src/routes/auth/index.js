import express from 'express';
import validateRequiredFields from '../../middlewares/validator.js';
import { adminLogin } from '../../controllers/auth/index.js';

const router=express.Router();

router.post('/login',
    validateRequiredFields(['email','password']),
    adminLogin
)

export default router;