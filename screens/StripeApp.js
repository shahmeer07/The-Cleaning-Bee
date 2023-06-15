import { StyleSheet, Text, View, TextInput, Button, Alert } from "react-native";
import React, { useState } from "react";
import {useNavigation} from '@react-navigation/native';
import {Stripe, CardField, useConfirmPayment} from '@stripe/stripe-react-native';

// const API_URL = "https://localhost:3000";
const API_URL = "https://bec4-2400-adc1-410-8c00-ed35-402d-55af-7424.ngrok-free.app"

const StripeApp = () => {
  const [email, setEmail] = useState();
  const [cardDetails, setCardDetails] = useState();
  const {confirmPayment, loading} = useConfirmPayment();

  const navigation = useNavigation();

  const fetchPaymentIntentClientSecret = async () =>{
    const response = await fetch(`${API_URL}/create-payment-intent`, {
        method : "POST",
        headers : {
            "Content-Type" : "application/json"
        }
    });
    const {clientSecret, error} = await response.json();
    return {clientSecret, error};
  }

  const handlePayPress = async() =>{
    // 1. Gather the customer's billing information e.g email
    if (!cardDetails?.complete || !email) {
        Alert.alert("Please enter complete car details and email!");
        return;
    }
    const billingDetails = {
        email : email,
    }
    // 2. Fetch the intent client secret from the backend
    try {
        const {clientSecret, error} = await fetchPaymentIntentClientSecret();
        fetchPaymentIntentClientSecret();
        // 3. Confirm the payment
        if (error) { 
            console.log("Unable to process payment");
        } else {
            const {paymentIntent, error} = await confirmPayment(clientSecret, {
                // type : "Card",
                paymentMethodType : "Card",
                billingDetails : billingDetails,
            });
            if (error) {
                alert(`Payment Confirmation Error ${error.message}`);
            } else if (paymentIntent) {
                alert("Payment Successful"); 
                console.log("Payment Successful", paymentIntent);
            }
        }
    } catch (error) {
        console.log(error)
    }
    
    navigation.navigate("Order")
  }
  return (
    <View style={styles.container}>
      <TextInput
        autoCapitalize="none"
        placeholder="E-mail"
        keyboardType="email-address"
        onChange={(value) => setEmail(value.nativeEvent.text)}
        style={styles.input}
      />
      <CardField
      postalCodeEnabled = {true}
      placeholder = {{
        number : "4242 4242 4242 4242",
      }}
      cardStyle={styles.card}
      style={styles.cardContainer}
      onCardChange={cardDetails => {
        setCardDetails(cardDetails);
      }}
      />
      <Button onPress={handlePayPress} title="Pay" disabled={loading}/>
    </View>
  );
};

export default StripeApp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent : "center",
    // margin : 20,
  },
  input: {
    backgroundColor: "#efefef",
    borderColor: "#000000",
    borderRadius: 8,
    fontSize: 20,
    height: 50,
    width : 300,
    padding: 10,
  },
  card : {
    backgroundColor : "#efefef",
  },
  cardContainer : {
    height : 50,
    width : 400,
    marginVertical : 30,
  }
});
