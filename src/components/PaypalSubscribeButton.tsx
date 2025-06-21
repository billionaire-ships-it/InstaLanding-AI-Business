'use client';

import { useEffect } from 'react';

type Tier = 'starter' | 'pro' | 'empire';

interface PayPalSubscribeButtonProps {
  tier: Tier;
}

const tierMap: Record<Tier, { planId: string; containerId: string; label: string }> = {
  starter: {
    planId: process.env.NEXT_PUBLIC_PAYPAL_SUBSCRIPTION_ID_STARTER_TIER!,
    containerId: 'paypal-button-container-starter',
    label: 'Starter Plan',
  },
  pro: {
    planId: process.env.NEXT_PUBLIC_PAYPAL_SUBSCRIPTION_ID_PRO_TIER!,
    containerId: 'paypal-button-container-pro',
    label: 'Pro Plan',
  },
  empire: {
    planId: process.env.NEXT_PUBLIC_PAYPAL_SUBSCRIPTION_ID_EMPIRE_TIER!,
    containerId: 'paypal-button-container-empire',
    label: 'Empire Plan',
  },
};

export default function PayPalSubscribeButton({ tier }: PayPalSubscribeButtonProps) {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.paypal.com/sdk/js?client-id=YOUR_PAYPAL_CLIENT_ID&vault=true&intent=subscription';
    script.async = true;
    script.onload = () => renderButton();
    document.body.appendChild(script);

    const renderButton = () => {
      const tierData = tierMap[tier];
      if (!tierData || !window.paypal) {
        console.error('❌ PayPal not ready or invalid tier');
        return;
      }

      window.paypal.Buttons({
        style: {
          shape: 'rect',
          color: 'gold',
          layout: 'vertical',
          label: 'subscribe',
        },
        createSubscription(data: any, actions: any) {
          return actions.subscription.create({
            plan_id: tierData.planId,
          });
        },
        onApprove(data: any) {
          alert(`${tierData.label} Subscribed! Subscription ID: ${data.subscriptionID}`);
          // TODO: POST subscription ID to your API route for verification
        },
        onError(err: any) {
          console.error(`❌ PayPal error:`, err);
          alert('Something went wrong. Please try again.');
        },
      }).render(`#${tierData.containerId}`);
    };
  }, [tier]);

  return <div id={tierMap[tier].containerId}></div>;
}
