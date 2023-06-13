/* eslint-disable max-len */
// /* eslint-disable max-len */
// eslint-disable-next-line quotes
const functions = require("firebase-functions");
const stripe = require("./stripe");

exports.api = functions.https.onRequest(stripe);


// const functions = require("firebase-functions");
// const stripe = require("stripe")("sk_test_51LiDRNGnkLV9x7EnBU46iQXb9Zk9IkFPrHigHI5dPn29fdRmMUfHs0fUTqKKwzFQD0ttrRktlvxHsK5chyFuApqc00oDZ06JhJ");
// const {logger} = require("firebase-functions");

// exports.processPayment = functions.https.onRequest(async (req, res) => {
//   const {amount, currency, paymentMethodId} = req.body;

//   try {
//     const paymentIntent = await stripe.paymentIntents.create({
//       amount,
//       currency,
//       payment_method: paymentMethodId,
//       confirm: true,
//     });

//     // Logging
//     logger.info("Payment processed successfully.");

//     // Handle successful payment
//     res.status(200).send({success: true, paymentIntent});
//   } catch (error) {
//     // Handle payment error
//     res.status(500).send({error: error.message});
//   }
// });
