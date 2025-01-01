// controllers/webhookController.js
import stripe from '../../config/stripe.js';
import { User } from '../models/schema/User.js';

// Este es el endpoint que Stripe usará para enviar eventos
export const handleStripeWebhook = async (req, res) => {
  const sig = req.headers['stripe-signature'];
  const endpointSecret = 'clave_secreta_del_webhook'; 

  let event;

  try {
    event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret);
  } catch (err) {
    console.log('Error al verificar el webhook:', err.message);
    return res.status(400).send(`Webhook error: ${err.message}`);
  }

  // Maneja el evento cuando la sesión de pago se complete
  if (event.type === 'checkout.session.completed') {
    const session = event.data.object;

    // Verifica que el pago esté exitoso
    if (session.payment_status === 'paid') {
      const userId = session.metadata.userId; // El userId que se pasa en el metadata

      // Actualiza el plan del usuario
      const expirationDate = new Date();
      expirationDate.setMonth(expirationDate.getMonth() + 1); // El plan expira en 1 mes

      await User.findByIdAndUpdate(userId, {
        plan: 'standart', // O el plan correspondiente
        planExpiration: expirationDate,
      });

      console.log(`Plan actualizado para el usuario ${userId}`);
    }
  }

  // Responde con un 200 para confirmar que recibiste el webhook
  res.status(200).send('Webhook recibido');
};
