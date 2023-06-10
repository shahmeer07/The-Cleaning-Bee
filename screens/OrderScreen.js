import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React from "react";
import LottieView from "lottie-react-native";
import Footer from "../components/Footer";
import { useSelector } from "react-redux";
import { useNavigation, useRoute } from "@react-navigation/native";

const OrderScreen = () => {
  const cart = useSelector((state) => state.cart.cart);
  const total = cart
    .map((item) => item.quantity * item.price)
    .reduce((curr, prev) => curr + prev, 0);
  const route = useRoute();
  pickUpDetails: route.params;
  return (
    <SafeAreaView>
      <LottieView
        source={require("../assets/thumbs.json")}
        style={{
          height: 360,
          width: 300,
          alignSelf: "center",
          marginTop: 40,
          justifyContent: "center",
        }}
        autoPlay
        loop={false}
        speed={0.7}
      />

      <Text
        style={{
          marginTop: 40,
          fontSize: 19,
          fontWeight: "600",
          textAlign: "center",
        }}
      >
        Your order has been placed
      </Text>

      <LottieView
        source={require("../assets/sparkle.json")}
        style={{
          height: 300,
          position: "absolute",
          top: 100,
          width: 300,
          alignSelf: "center",
        }}
        autoPlay
        loop={false}
        speed={0.7}
      />

      <Footer />
    </SafeAreaView>
  );
};

export default OrderScreen;

const styles = StyleSheet.create({});
