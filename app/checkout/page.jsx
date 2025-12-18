"use client";
export const dynamic = "force-dynamic";

import React, { Suspense } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./_components/CheckoutForm";
import { useSearchParams } from "next/navigation";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

function CheckoutContent() {
  const searchParams = useSearchParams();
  const rawAmount = Number(searchParams.get("amount")) || 0;

  const options = {
    mode: "payment",
    currency: "usd",
    amount: Math.round(rawAmount * 100),
  };

  return (
    <Elements stripe={stripePromise} options={options}>
      <CheckoutForm amount={rawAmount} />
    </Elements>
  );
}

export default function CheckoutPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CheckoutContent />
    </Suspense>
  );
}
