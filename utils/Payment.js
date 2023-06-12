import Stripe from "./stripeConfig";
import { Platform } from "react-native";

const handlePayment = async () => {
  try {
    const token = await Stripe.paymentRequestWithCardForm({
      smsAutofillDisabled: true,
      requiredBillingAddressFields: "full",
      prefilledInformation: {
        billingAddress: {
          name: "Sayali Sonawane",
          line1: "Canary Place",
          line2: "3",
          city: "Macon",
          state: "Georgia",
          country: "Estonia",
          postalCode: "31217",
          email: "sayali.sonawane@mindbowser.com",
        },
      },
    });
    // Process the obtained token
    console.log("Token:", token);
  } catch (error) {
    // Handle any errors
    console.log("Error:", error);
  }
};

export default handlePayment;
