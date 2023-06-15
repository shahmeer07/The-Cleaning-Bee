import {
  Alert,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import {
  cleanCart,
  decrementQuantity,
  incrementQuantity,
} from "../CartReducer";
import { decrementQty, incrementQty } from "../ProductReducer";
import { collection, addDoc } from "firebase/firestore";

import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../firebase";
import StripeApp from "./StripeApp";
import { StripeProvider } from "@stripe/stripe-react-native";

const CartScreen = () => {
  const cart = useSelector((state) => state.cart.cart);
  const route = useRoute();
  const [noOfDays, setNoOfDays] = useState(1);
  const total = cart
    .map((item) => item.quantity * item.price)
    .reduce((curr, prev) => curr + prev, 0);
  const [paymentMethod, setPaymentMethod] = useState("");

  const handlePaymentMethodSelection = (method) => {
    setPaymentMethod(method);
    // if (paymentMethod === "card") {
    //   navigation.navigate("StripeApp"); // Navigate to the desired screen
    // }
  };
  const navigation = useNavigation();

  const userUid = auth.currentUser.uid;
  const dispatch = useDispatch();

  const placeOrder = async () => {
    if (paymentMethod === "") {
      Alert.alert("Payment Option Required", "Please select a payment option.");
      return;
    }
    // Start of Past Orders handling
    const order = {
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString(),
      items: cart,
    };

    // Add the order to the user's pastOrders array
    try {
      const userUid = auth.currentUser.uid;
      const userDocRef = collection(db, "users", userUid, "orders");
      await addDoc(userDocRef, {
        date: new Date().toLocaleDateString(),
        time: new Date().toLocaleTimeString(),
        items: cart,
      });
    } catch (error) {
      console.error("Error adding order to pastOrders:", error);
    }
    // End of Past Orders handling
    if (paymentMethod === "card"){
      navigation.navigate("StripeApp");
    } else {
      navigation.navigate("Order")
    }
    dispatch(cleanCart());
    await setDoc(
      doc(db, "users", `${userUid}`),
      {
        orders: { ...cart },
        pickUpDetails: route.params,
        // noOfDays: noOfDays.toString(),
        paymentMethod: paymentMethod,
        toPay: total + 5,
      },
      {
        merge: true,
      }
    );
  };

  return (
    <>
      <ScrollView style={{ marginTop: 50 }}>
        {total === 0 ? (
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Text style={{ marginTop: 40 }}>Your cart is empty</Text>
          </View>
        ) : (
          <>
            <View
              style={{
                padding: 10,
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Ionicons
                onPress={() => navigation.goBack()}
                name="arrow-back"
                size={24}
                color="black"
              />
              <Text>Your Bucket</Text>
            </View>

            <Pressable
              style={{
                backgroundColor: "white",
                borderRadius: 12,
                marginLeft: 10,
                marginRight: 10,
                padding: 14,
              }}
            >
              {cart.map((item, index) => (
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginVertical: 12,
                  }}
                  key={index}
                >
                  <Text style={{ width: 100, fontSize: 16, fontWeight: "500" }}>
                    {item.name} {item.packageName}
                  </Text>

                  {/* - + button */}
                  <Pressable
                    style={{
                      flexDirection: "row",
                      paddingHorizontal: 10,
                      paddingVertical: 5,
                      alignItems: "center",
                      borderColor: "#BEBEBE",
                      borderWidth: 0.5,
                      borderRadius: 10,
                    }}
                  >
                    <Pressable
                      onPress={() => {
                        dispatch(decrementQuantity(item)); // cart
                        dispatch(decrementQty(item)); // product
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 20,
                          color: "#088F8F",
                          paddingHorizontal: 6,
                          fontWeight: "600",
                        }}
                      >
                        -
                      </Text>
                    </Pressable>

                    <Pressable>
                      <Text
                        style={{
                          fontSize: 19,
                          color: "#088F8F",
                          paddingHorizontal: 8,
                          fontWeight: "600",
                        }}
                      >
                        {item.quantity}
                      </Text>
                    </Pressable>
                    <Pressable
                      onPress={() => {
                        dispatch(incrementQuantity(item)); // cart
                        dispatch(incrementQty(item)); //product
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 20,
                          color: "#088F8F",
                          paddingHorizontal: 6,
                          fontWeight: "600",
                        }}
                      >
                        +
                      </Text>
                    </Pressable>
                  </Pressable>
                  <Text style={{ fontSize: 16, fontWeight: "500" }}>
                    ${item.price * item.quantity}
                  </Text>
                </View>
              ))}
            </Pressable>
            {/* Payment Options */}
            <View style={{ marginHorizontal: 10 }}>
              <Text style={styles.paymentOptionsTitle}>Payment Options</Text>
              <View style={styles.paymentOptionButtonContainer}>
                <Pressable
                  style={[
                    styles.paymentOptionButton,
                    paymentMethod === "cash" &&
                      styles.selectedPaymentOptionButton,
                  ]}
                  onPress={() => handlePaymentMethodSelection("cash")}
                >
                  <Text
                    style={[
                      styles.paymentOptionButtonText,
                      paymentMethod === "cash" &&
                        styles.selectedPaymentOptionButtonText,
                    ]}
                  >
                    Cash on Delivery
                  </Text>
                </Pressable>
                <Pressable
                  style={[
                    styles.paymentOptionButton,
                    paymentMethod === "card" &&
                      styles.selectedPaymentOptionButton,
                  ]}
                  onPress={() => handlePaymentMethodSelection("card")}
                >
                  <Text
                    style={[
                      styles.paymentOptionButtonText,
                      paymentMethod === "card" &&
                        styles.selectedPaymentOptionButtonText,
                    ]}
                  >
                    Card Payment
                  </Text>
                </Pressable>
              </View>
            </View>
            <View style={{ marginHorizontal: 10 }}>
              <Text style={{ fontSize: 16, fontWeight: "bold", marginTop: 30 }}>
                Billing Details
              </Text>
              <View
                style={{
                  backgroundColor: "white",
                  borderRadius: 7,
                  padding: 10,
                  marginTop: 15,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Text
                    style={{ fontSize: 18, fontWeight: "400", color: "gray" }}
                  >
                    Item Total
                  </Text>
                  <Text style={{ fontSize: 18, fontWeight: "400" }}>
                    ${total}
                  </Text>
                </View>

                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginVertical: 8,
                  }}
                >
                  <Text
                    style={{ fontSize: 18, fontWeight: "400", color: "gray" }}
                  >
                    Delivery Fee | 1.2KM
                  </Text>
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: "400",
                      color: "#088F8F",
                    }}
                  >
                    FREE
                  </Text>
                </View>

                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Text
                    style={{ fontSize: 18, fontWeight: "500", color: "gray" }}
                  >
                    Free Delivery on Your order
                  </Text>
                </View>

                <View
                  style={{
                    borderColor: "gray",
                    height: 1,
                    borderWidth: 0.5,
                    marginTop: 10,
                  }}
                />

                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginVertical: 10,
                  }}
                >
                  <Text
                    style={{ fontSize: 18, fontWeight: "500", color: "gray" }}
                  >
                    Delivery Date
                  </Text>
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: "400",
                      color: "#088F8F",
                    }}
                  >
                    {route.params.deliveryDate}
                  </Text>
                </View>
                {/* Delivery Address */}
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Text
                    style={{ fontSize: 18, fontWeight: "500", color: "gray" }}
                  >
                    Delivery Address
                  </Text>
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: "400",
                      color: "#088F8F",
                    }}
                  >
                    {route.params.address}
                  </Text>
                </View>

                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginVertical: 10,
                  }}
                >
                  <Text
                    style={{ fontSize: 18, fontWeight: "500", color: "gray" }}
                  >
                    Payment Method
                  </Text>
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: "400",
                      color: "#088F8F",
                    }}
                  >
                    {paymentMethod}
                  </Text>
                </View>

                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Text
                    style={{ fontSize: 18, fontWeight: "500", color: "gray" }}
                  >
                    No. of days for processing
                  </Text>

                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: "400",
                      color: "#088F8F",
                    }}
                  >
                    {noOfDays}
                  </Text>
                </View>

                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginVertical: 10,
                  }}
                >
                  <Text
                    style={{ fontSize: 18, fontWeight: "500", color: "gray" }}
                  >
                    selected Pick Up Time
                  </Text>

                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: "400",
                      color: "#088F8F",
                    }}
                  >
                    {route.params.selectedTime}
                  </Text>
                </View>
                <View
                  style={{
                    borderColor: "gray",
                    height: 1,
                    borderWidth: 0.5,
                    marginTop: 10,
                  }}
                />

                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginVertical: 8,
                  }}
                >
                  <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                    To Pay
                  </Text>
                  <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                    {total + 5}
                  </Text>
                </View>
              </View>
            </View>
          </>
        )}
      </ScrollView>

      {total === 0 ? null : (
        <Pressable
          style={{
            backgroundColor: "#088F8F",
            marginTop: "auto",
            padding: 10,
            marginBottom: 40,
            margin: 15,
            borderRadius: 7,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View>
            <Text style={{ fontSize: 17, fontWeight: "600", color: "white" }}>
              {cart.length} items | $ {total}
            </Text>
            <Text
              style={{
                fontSize: 15,
                fontWeight: "400",
                color: "white",
                marginVertical: 6,
              }}
            >
              +5 Platform Charges
            </Text>
          </View>

          <Pressable
            onPress={placeOrder}
            disabled={paymentMethod === ""}
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              opacity: paymentMethod === "" ? 0.5 : 1,
            }}
          >
            <Text style={{ fontSize: 17, fontWeight: "600", color: "white" }}>
              Place Order
            </Text>
          </Pressable>
        </Pressable>
      )}
    </>
  );  
};

export default CartScreen;

const styles = StyleSheet.create({
  paymentOptionsTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 30,
  },
  paymentOptionButtonContainer: {
    flexDirection: "row",
    marginTop: 10,
  },
  paymentOptionButton: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 7,
    marginRight: 10,
    borderWidth: 1,
    borderColor: "gray",
  },
  selectedPaymentOptionButton: {
    borderColor: "#088F8F",
    backgroundColor: "#088F8F",
  },
  paymentOptionButtonText: {
    fontSize: 16,
    fontWeight: "500",
    color: "gray",
  },
  selectedPaymentOptionButtonText: {
    color: "#088F8F",
    color: "white",
  },
});
