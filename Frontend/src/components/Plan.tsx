import React from 'react';
import PaymentForm from './payment/PaymentForm';

interface Item {
  id: string;
  plan: string;
  title: string;
  value: string;
  icon: string;
  time: string;
  description: string;
  points: string[];
}

const params = { plan: 'starter' };
const { plan } = params;

const items: Item[] = [
  {
    id: 'price_1Qcxx5BXKBZiMZ3La5HCRslC',
    plan: 'starter',
    title: 'Starter Plan',
    value: '89.00',
    icon: 'tabler:check',
    time: 'Month',
    description: 'From Basic use',
    points: [
      '1 AI-generated article',
      'Basic journalist outreach',
      'Email support',
      'SEO-friendly formatting',
    ],
  },
];

const item = items.find((item) => item.plan === plan);

const PaymentPage: React.FC = () => {
  return (
    <PaymentForm item={item} />
  );
};

export default PaymentPage;
