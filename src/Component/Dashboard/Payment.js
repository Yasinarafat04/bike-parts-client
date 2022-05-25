import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { loadStripe } from '@stripe/stripe-js';
import useDate from '../Shared/useDate'
import {
  CardElement,
  Elements,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';

const CheckoutForm = ({ order, clientSecret }) => {
  const date = useDate()
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState(false)
  const [cardSuccess, setCardSuccess] = useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (elements == null) {
      return;
    }
    const card = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card
    });

    setCardError(error?.message || false)
    setCardSuccess(false)
    const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: card,
        billing_details: {
          name: order.name,
          email: order.email
        }
      }
    })
    if (intentError) {
      setCardError(intentError?.message)
    }
    else {
      setCardError(false)
      setCardSuccess('Payment SuccessFul')

      const payment = {
        orderName: order.name,
        transactionId: paymentIntent.id,
        email: order.email,
        date: date
      }
      fetch(`http://localhost:5100/order/${order._id}`, {
        method: "put",
        headers: {
          'content-type': 'application/json',
          auth: localStorage.getItem('accessToken')
        },
        body: JSON.stringify({payment, position: "paid"})
      })

    }
  };

  return (
    <form className='max-w-md w-full px-10 pb-5 pt-4' onSubmit={handleSubmit}>
      <p className='pb-2'>Product Name : {order.name}</p>
      <p className='pb-7'>Amount : ${order.totalPrice}</p>
      <CardElement />
      <button className='btn btn-sm btn-primary mt-5' type="submit" disabled={!stripe}>
        Pay
      </button>
      {cardError && <p className="text-red-500">{cardError}</p>}
      {cardSuccess && <p className='text-green-500'>{cardSuccess}</p>}
    </form>
  );
};

const stripePromise = loadStripe('pk_test_51L0rFmLYwJHp3nTSJ5HzZEvN1aLGTsMmb95tFAezY3NleoCmxB2nygn6sDkk9ZbZcsiunYDLGfy9JOxuJbP6YheJ00jclK5Odl');

const Payment = ({ order, clientSecret }) => (
  <Elements stripe={stripePromise}>
    <CheckoutForm order={order} clientSecret={clientSecret} />
  </Elements>
);
export default Payment
