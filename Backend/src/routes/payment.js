import express from 'express';
import { createPaymentSession, updateUserPlan } from '../controllers/payment.js';

const routerPayment = express.Router();

routerPayment.post('/create-checkout-session', createPaymentSession);
routerPayment.get('/update-plan', updateUserPlan);

export default routerPayment;
