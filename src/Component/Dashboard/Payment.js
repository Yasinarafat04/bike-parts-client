import React from 'react';
import ReactDOM from 'react-dom';
import {loadStripe} from '@stripe/stripe-js';
import {
  CardElement,
  Elements,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';

const CheckoutForm = ({order}) => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (elements == null) {
      return;
    }

    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });
  };

  return (
    <form className='max-w-md w-full px-10 pb-5 pt-4' onSubmit={handleSubmit}>
        <p className='pb-2'>Product Name : {order.name}</p>
        <p className='pb-7'>Amount : ${order.totalPrice}</p>
      <CardElement />
      <button className='btn btn-sm btn-primary mt-5' type="submit" disabled={!stripe || !elements}>
        Pay
      </button>
    </form>
  );
};

const stripePromise = loadStripe('pk_test_6pRNASCoBOKtIshFeQd4XMUh');

const Payment = ({order}) => (
  <Elements stripe={stripePromise}>
    <CheckoutForm order={order}/>
  </Elements>
);
export default Payment
