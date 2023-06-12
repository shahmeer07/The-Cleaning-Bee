import { Stripe } from "@stripe/stripe-react-native";

Stripe.setOptions({
  publishableKey:
    "pk_test_51LiDRNGnkLV9x7EnfRVJw77eaU1C30bz1N4dHsGEfiremOruIAdXkQllE3o6h43QDRLYWrmOxJQsbL98sAO3ONd100MqsKKeD1",
    secretKey : "sk_test_51LiDRNGnkLV9x7EnBU46iQXb9Zk9IkFPrHigHI5dPn29fdRmMUfHs0fUTqKKwzFQD0ttrRktlvxHsK5chyFuApqc00oDZ06JhJ",
});

export default Stripe;
