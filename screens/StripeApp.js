import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Alert,
  Platform,
} from "react-native";
import React, { useState, useEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import {
  initStripe,
  Stripe,
  CardField,
  useConfirmPayment,
} from "@stripe/stripe-react-native";

// const API_URL = "https://localhost:3000";
const API_URL =
  "https://f24d-2400-adc1-410-8c00-4daa-a836-1aed-3c03.ngrok-free.app";

const StripeApp = () => {
  const [email, setEmail] = useState();
  const [cardDetails, setCardDetails] = useState();
  const { confirmPayment, loading } = useConfirmPayment();

  const navigation = useNavigation();
  const route = useRoute();
  const totalAmount = route.params?.totalAmount || 0;

  useEffect(() => {
    initStripe({
      publishableKey:
        "pk_test_51LiDRNGnkLV9x7EnfRVJw77eaU1C30bz1N4dHsGEfiremOruIAdXkQllE3o6h43QDRLYWrmOxJQsbL98sAO3ONd100MqsKKeD1",
    });
  }, []);

  const fetchPaymentIntentClientSecret = async () => {
    const response = await fetch(`${API_URL}/create-payment-intent`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        amount: totalAmount,
      }),
    });
    console.log("Total Amount : ", totalAmount);
    const { clientSecret, error } = await response.json();
    return { clientSecret, error };
  };

  const handlePayPress = async () => {
    // 1. Gather the customer's billing information e.g email
    if (!cardDetails?.complete || !email) {
      Alert.alert("Please enter complete car details and email!");
      return;
    }
    const billingDetails = {
      email: email,
    };
    // 2. Fetch the intent client secret from the backend
    try {
      const { clientSecret, error } = await fetchPaymentIntentClientSecret();
      // fetchPaymentIntentClientSecret();
      // 3. Confirm the payment
      if (error) {
        console.log("Unable to process payment");
      } else {
        const { paymentIntent, error } = await confirmPayment(clientSecret, {
          // type : "Card",
          paymentMethodType: "Card",
          billingDetails: billingDetails,
        });
        if (error) {
          alert(`Payment Confirmation Error ${error.message}`);
        } else if (paymentIntent) {
          alert("Payment Successful");
          console.log("Payment Successful", paymentIntent);
        }
      }
    } catch (error) {
      console.log(error);
    }

    navigation.navigate("Order");
  };
  return (
    <View style={styles.container}>
      <Text
        style={{
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 80,
          fontSize: 24,
          fontWeight: "bold",
        }}
      >
        Enter Card Details
      </Text>
      <TextInput
        autoCapitalize="none"
        placeholder="E-mail"
        keyboardType="email-address"
        onChange={(value) => setEmail(value.nativeEvent.text)}
        style={styles.input}
      />
      <CardField
        postalCodeEnabled={true}
        placeholder={{
          number: "4242 4242 4242 4242",
        }}
        cardStyle={styles.card}
        style={styles.cardContainer}
        onCardChange={(cardDetails) => {
          setCardDetails(cardDetails);
        }}
      />
      <Button
        onPress={handlePayPress}
        title="Confirm Payment"
        disabled={loading}
      />
    </View>
  );
};

export default StripeApp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    // margin : 20,
  },
  input: {
    backgroundColor: "#efefef",
    borderColor: "#000000",
    borderRadius: 8,
    fontSize: 20,
    height: 50,
    width: 300,
    padding: 10,
  },
  card: {
    backgroundColor: "#efefef",
  },
  cardContainer: {
    height: 60,
    width: 300,
    marginVertical: 30,
    padding: 20,
    flexDirection: "row",
    ...Platform.select({
      android: {
        elevation: 5, // Adjust the value as needed
      },
      ios: {
        shadowColor: "#52006A",
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.5,
        shadowRadius: 4,
      },
    }),
  },
  cardContainer: {
    height: 60,
    width: 300,
    marginVertical: 30,
    padding: 20,
    flexDirection: "row",
  },
});
