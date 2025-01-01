// routes/webhook.js
import express from 'express';
import { handleStripeWebhook } from '../controllers/webhook.js';

const router = express.Router();

// Recibir y manejar el webhook de Stripe
router.post('/stripe', express.raw({ type: 'application/json' }), handleStripeWebhook);

export default router;
