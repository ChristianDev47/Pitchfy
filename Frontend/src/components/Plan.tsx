import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
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

const items: Item[] = [
  {
    id: 'price_1QeSBtRtW2ZrLYIATGm8xSSD',
    plan: 'starter',
    title: 'Starter Plan',
    value: '89',
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
  {
    id: 'price_1QeSDZRtW2ZrLYIAVEMiGp9O',
    plan: 'pro',
    title: 'Pro Plan',
    value: '199',
    icon: 'tabler:check',
    time: 'Month',
    description: 'For businesses',
    points: [
      '1 AI-generated article',
      'Guaranteed publication of article',
      'Priority support',
      'Advanced SEO strategies',
      'Customized outreach plan',
      'SEO-friendly formatting',
    ],
  },
  {
    id: 'price_1QfT0BRtW2ZrLYIA8Jhe9cG5',
    plan: 'premium',
    title: 'Premium Plan',
    value: '400',
    icon: 'tabler:check',
    time: 'Month',
    description: 'For advanced businesses with premium reach',
    points: [
      '1 AI-generated article',
      'Guaranteed publication of article',
      'Post on Business Insider',
      'Post on Yahoo Finance',
      'Priority support',
      'Advanced SEO strategies',
      'Customized outreach plan',
      'SEO-friendly formatting',
    ],
  }
];

const PaymentPage: React.FC = () => {
  const { plan } = useParams<{ plan: string }>(); 
  const [selectedItem, setSelectedItem] = useState<Item | undefined>(undefined);

  useEffect(() => {
    const item = items.find((item) => item.plan === plan);
    if (item) {
      setSelectedItem(item);
    } else {
      setSelectedItem(items.find((item) => item.plan === 'start'));  
    }
  }, [plan]);  

  return (
    <PaymentForm item={selectedItem} />
  );
};

export default PaymentPage;
