import { User } from '../models/schema/User.js';
import { createCheckoutSession } from '../services/payment.js';
import stripe from '../../config/stripe.js';


export const createPaymentSession = async (req, res) => {
  const { planId, userId } = req.body;

  try {
    const session = await createCheckoutSession(planId, userId);
    res.json({ url: session.url, sessionId: session.id});
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateUserPlan = async (req, res) => {
  const { sessionId } = req.query;
  
  try {
    const session = await stripe.checkout.sessions.retrieve(sessionId);

    if (session.payment_status === 'paid') {
      const expirationDate = new Date();
      expirationDate.setMonth(expirationDate.getMonth() + 1); 
      const userId = session.metadata.userId;
      
      await User.findByIdAndUpdate(userId, {
        plan: 'standart',
        planExpiration: expirationDate,
      });

      return res.redirect(`https://pitchfy.zapier.app/`);
    } else {
      return res.redirect(`${process.env.FRONTEND_URL}`);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
