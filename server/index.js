// const express = require('express');
import express from 'express';
const app = express();
const port = 3000;
const PUBLISHABLE_KEY = "pk_test_51LiDRNGnkLV9x7EnfRVJw77eaU1C30bz1N4dHsGEfiremOruIAdXkQllE3o6h43QDRLYWrmOxJQsbL98sAO3ONd100MqsKKeD1";
const SECRET_KEY = "sk_test_51LiDRNGnkLV9x7EnBU46iQXb9Zk9IkFPrHigHI5dPn29fdRmMUfHs0fUTqKKwzFQD0ttrRktlvxHsK5chyFuApqc00oDZ06JhJ";
import Stripe from 'stripe';
const stripe = Stripe(SECRET_KEY, {apiVersion : "2022-11-15"})


app.listen(port, () => {
    console.log(`Listening on port : ${port}`);
});

app.post("/create-payment-intent", async (req, res)=>{
    try {
        const paymentIntent = await stripe.paymentIntents.create({
            amount : 1000,
            currency : "usd",
            payment_method_types : ["card"],
        })

        const clientSecret = paymentIntent.client_secret;

        res.json({
            clientSecret : clientSecret,
        });
    } catch (error) {
        console.log(error.message);
        res.json({error : error.message});
    }
})

