import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  Pressable,
  ScrollView,
  Alert,
} from "react-native";
import HorizontalDatepicker from "@awrminkhodaei/react-native-horizontal-datepicker";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import moment from "moment";
import Footer from "../components/Footer";

const PickUpScreen = () => {
  const [selectedAddress, setSelectedAddress] = useState("");
  const [selectedDeliveryDate, setSelectedDeliveryDate] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const cart = useSelector((state) => state.cart.cart);
  const total = cart
    .map((item) => item.quantity * item.price)
    .reduce((curr, prev) => curr + prev, 0);

  const times = [
    {
      id: "0",
      time: "11:00 PM",
    },
    {
      id: "1",
      time: "12:00 PM",
    },
    {
      id: "2",
      time: "1:00 PM",
    },
    {
      id: "3",
      time: "2:00 PM",
    },
    {
      id: "4",
      time: "3:00 PM",
    },
    {
      id: "5",
      time: "4:00 PM",
    },
  ];

  const navigation = useNavigation();

  const proceedToCart = () => {
    if (!selectedDate || !selectedTime || !selectedAddress) {
      Alert.alert(
        "Empty or invalid",
        "Please select all the fields",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel",
          },
          { text: "OK", onPress: () => console.log("OK Pressed") },
        ],
        { cancelable: false }
      );
    } else {
      navigation.replace("Cart", {
        pickUpDate: selectedDate,
        selectedTime: selectedTime,
        deliveryDate: calculateDeliveryDate(selectedDate),
        address: selectedAddress,
      });
    }
  };

  const getDates = () => {
    const dates = [];
    const currentDate = new Date();

    for (let i = 0; i < 8; i++) {
      const date = new Date();
      date.setDate(currentDate.getDate() + i);
      dates.push(date);
    }

    return dates;
  };

  const calculateDeliveryDate = (pickUpDate) => {
    const deliveryDate = new Date(pickUpDate);
    deliveryDate.setDate(deliveryDate.getDate() + 1); // Set delivery date as the next day
    const formattedDeliveryDate = deliveryDate.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    }); // Format delivery date as "Month day, year"
    return formattedDeliveryDate;
  };

  useEffect(() => {
    // Calculate the delivery date based on the selected pick-up date
    if (selectedDate) {
      setSelectedDeliveryDate(calculateDeliveryDate(selectedDate));
    }
  }, [selectedDate]);

  return (
    <>
      <SafeAreaView style={{marginTop:50}}>
        <Text style={{ fontSize: 16, fontWeight: "500", marginHorizontal: 10 }}>
          Enter Address
        </Text>
        <TextInput
          style={{
            padding: 40,
            borderColor: "gray",
            borderWidth: 0.7,
            paddingVertical: 80,
            borderRadius: 9,
            margin: 10,
          }}
          value={selectedAddress}
          onChangeText={(address) => setSelectedAddress(address)}
        />
        <Text style={{ fontSize: 16, fontWeight: "500", marginHorizontal: 10 }}>
          Pick Up Date
        </Text>
        <HorizontalDatepicker
          mode="gregorian"
          startDate={new Date()}
          endDate={getDates()[7]}
          initialSelectedDate={selectedDate}
          onSelectedDateChange={(date) => setSelectedDate(date)}
          selectedItemWidth={170}
          unselectedItemWidth={38}
          itemHeight={38}
          itemRadius={10}
          selectedItemTextStyle={styles.selectedItemTextStyle}
          unselectedItemTextStyle={styles.selectedItemTextStyle}
          selectedItemBackgroundColor="#222831"
          unselectedItemBackgroundColor="#ececec"
          flatListContainerStyle={styles.flatListContainerStyle}
        />
        <Text style={{ fontSize: 16, fontWeight: "500", marginHorizontal: 10 }}>
          Select Time
        </Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {times.map((item, index) => (
            <Pressable
              key={index}
              onPress={() => setSelectedTime(item.time)}
              style={[
                styles.timeButton,
                selectedTime === item.time && styles.selectedTimeButton,
              ]}
            >
              <Text>{item.time}</Text>
            </Pressable>
          ))}
        </ScrollView>
        <Text style={{ fontSize: 16, fontWeight: "500", marginHorizontal: 10 }}>
          Delivery Date
        </Text>
        <View style={styles.deliveryDateContainer}>
          <View style={styles.rectangleBorder}>
            <Text style={styles.deliveryDateText}>{selectedDeliveryDate}</Text>
          </View>
        </View>
      </SafeAreaView>

      {total !== 0 && (
        <Pressable style={styles.cartButton} onPress={proceedToCart}>
          <View>
            <Text style={styles.cartButtonText}>
              {cart.length} items | $ {total}
            </Text>
            <Text style={styles.cartButtonSubtext}>+ $5 Platform Charges</Text>
          </View>

          <Text style={styles.cartButtonProceedText}>Proceed to Cart</Text>
        </Pressable>
      )}
      <Footer />
    </>
  );
};

const styles = StyleSheet.create({
  timeButton: {
    margin: 10,
    borderRadius: 7,
    padding: 15,
    borderColor: "gray",
    borderWidth: 0.7,
  },
  selectedTimeButton: {
    borderColor: "red",
  },
  deliveryDateContainer: {
    paddingHorizontal: 20,
    marginBottom: 10,
    marginTop: 10,
  },
  rectangleBorder: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#222831",
    padding: 10,
  },
  deliveryDateText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000000",
    textAlign: "center",
    textTransform: "uppercase",
  },

  cartButton: {
    backgroundColor: "#088F8F",
    marginTop: "auto",
    padding: 10,
    marginBottom: 40,
    margin: 15,
    borderRadius: 7,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  cartButtonText: {
    fontSize: 17,
    fontWeight: "600",
    color: "white",
  },
  cartButtonSubtext: {
    fontSize: 15,
    fontWeight: "400",
    color: "white",
    marginVertical: 6,
  },
  cartButtonProceedText: {
    fontSize: 17,
    fontWeight: "600",
    color: "white",
  },
});

export default PickUpScreen;
