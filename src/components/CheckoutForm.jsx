import React, { useState } from "react";
import { useStripe, useElements, PaymentElement } from "@stripe/react-stripe-js";
import { destroyCookie } from "nookies";

const CheckoutForm = ({ paymentIntent }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [checkoutError, setCheckoutError] = useState();
  const [checkoutSuccess, setCheckoutSuccess] = useState();

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      const {
        error,
        paymentIntent: { status }
      } = await stripe.confirmCardPayment(paymentIntent.client_secret, {
        payment_method: {
          card: elements.getElement(CardElement)
        }
      });

      if (error) throw new Error(error.message);

      if (status === "succeeded") {
        setCheckoutSuccess(true);
        destroyCookie(null, "paymentIntentId");
      }
    } catch (err) {
      alert(err.message);
      setCheckoutError(err.message);
    }
  };

  if (checkoutSuccess) return <p>Payment successful!</p>;

  return (
    <form onSubmit={handleSubmit}>
      <PaymentElement />

      <button type="submit" disabled={!stripe}>
        DONATE
      </button>

      {checkoutError && <span style={{ color: "red" }}>{checkoutError}</span>}
    </form>
  );
};

export default CheckoutForm;