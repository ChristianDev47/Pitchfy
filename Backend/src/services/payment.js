import stripe from '../../config/stripe.js';

export const createCheckoutSession = async (priceId, userId) => {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price: priceId, 
          quantity: 1,
        },
      ],
      mode: 'subscription',
      success_url: `${process.env.BACKEND_URL}/payment/update-plan?sessionId={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.FRONTEND_URL}/`,
      metadata: { 
        userId, 
        priceId,
      },
    });
    return session;
  } catch (error) {
    console.log(error);
    throw new Error('Error creating Stripe checkout session: ' + error.message);
  }
};
