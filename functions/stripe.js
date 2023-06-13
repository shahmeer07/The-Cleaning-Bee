/* eslint-disable linebreak-style */
/* eslint-disable max-len */
const stripe = require("stripe")("sk_test_51LiDRNGnkLV9x7EnBU46iQXb9Zk9IkFPrHigHI5dPn29fdRmMUfHs0fUTqKKwzFQD0ttrRktlvxHsK5chyFuApqc00oDZ06JhJ");

const express = require("express");
const app = express();

app.use(express.json());

app.post("/create-payment-intent", async (req, res) => {
  try {
    const {amount, currency, paymentMethod} = req.body;

    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency,
      payment_method: paymentMethod,
      confirm: true,
    });

    res.status(200).json({clientSecret: paymentIntent.client_secret});
  } catch (error) {
    res.status(500).json({error: error.message});
  }
});

module.exports = app;
