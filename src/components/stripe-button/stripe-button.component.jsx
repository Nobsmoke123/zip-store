import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY;

  //   const onToken = (token) => {
  //     console.log(token);
  //     alert("Payment Successful");
  //   };

  return (
    <StripeCheckout
      label="Pay Now"
      name="ZIP Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={(token) => console.log(token)}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
