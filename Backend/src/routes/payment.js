import express from 'express';
import { createPaymentSession, updateUserPlan } from '../controllers/payment.js';
import { ensureAuth } from '../middlewares/auth.js';

const routerPayment = express.Router();

routerPayment.post('/create-checkout-session', ensureAuth, createPaymentSession);
routerPayment.get('/update-plan', ensureAuth, updateUserPlan);

export default routerPayment;
