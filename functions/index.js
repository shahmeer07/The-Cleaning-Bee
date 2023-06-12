const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const functions = require("firebase-functions");
const stripe = require("stripe")(
    // eslint-disable-next-line max-len
    "sk_test_51LiDRNGnkLV9x7EnBU46iQXb9Zk9IkFPrHigHI5dPn29fdRmMUfHs0fUTqKKwzFQD0ttrRktlvxHsK5chyFuApqc00oDZ06JhJ",
);

exports.helloWorld = onRequest((request, response) => {
  logger.info("Hello logs!", {structuredData: true});
  response.send("Hello from Firebase!");
});

exports.completePaymentWithStripe = functions.https.onRequest(
    (request, response) => {
      stripe.charges
          .create({
            amount: request.body.amount,
            currency: request.body.currency,
            source: request.body.token,
          })
          .then((charge) => {
            response.send(charge);
          })
          .catch((error) => {
            console.log(error);
          });
    },
);
