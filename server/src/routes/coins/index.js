import express from 'express';
import validateRequiredFields from '../../middlewares/validator.js';
import { verifyJwtToken } from '../../helpers/jwt.js';
import { getCoins } from '../../controllers/coins/index.js';

const router=express.Router();

router.get(
    '/coins',
    verifyJwtToken,
    validateRequiredFields(['vs_currency','page','per_page']),
    getCoins
)

export default router;