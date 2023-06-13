import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import {useStripe} from '@stripe/stripe-react-native';
import axios from 'axios';

const PaymentForm = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expMonth, setExpMonth] = useState('');
  const [expYear, setExpYear] = useState('');
  const [cvc, setCvc] = useState('');

  const {stripe} = useStripe();

  const handlePayment = async () => {
    try {
      const response = await axios.post(
        'http://localhost:5001/the-cleaning-bee/us-central1/api/create-payment-intent',
        {
          amount: 1000, // Amount in cents
          currency: 'usd',
          paymentMethod: 'pm_card_visa', // Use an actual payment method ID or create one using Stripe Elements
        }
      );

      const { clientSecret } = response.data;

      // Use the clientSecret to confirm the payment on the client-side
      const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: {
            number: cardNumber,
            exp_month: parseInt(expMonth),
            exp_year: parseInt(expYear),
            cvc: cvc,
          },
        },
      });

      if (error) {
        console.log('Payment failed:', error.message);
      } else {
        console.log('Payment succeeded:', paymentIntent);
        // Handle successful payment
      }
    } catch (error) {
      console.log('Error:', error);
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Card Number"
        value={cardNumber}
        onChangeText={setCardNumber}
      />
      <TextInput
        placeholder="Expiration Month"
        value={expMonth}
        onChangeText={setExpMonth}
      />
      <TextInput
        placeholder="Expiration Year"
        value={expYear}
        onChangeText={setExpYear}
      />
      <TextInput
        placeholder="CVC"
        value={cvc}
        onChangeText={setCvc}
      />
      <Button title="Pay" onPress={handlePayment} />
    </View>
  );
};

export default PaymentForm;
