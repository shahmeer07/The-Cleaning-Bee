import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Alert,
  Pressable,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Feather } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import * as Location from "expo-location";
import Carousel from "../components/Carousel";
import Services from "../components/Services";
import FrequentItems from "../components/FrequentItems";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../ProductReducer";
import { useNavigation } from "@react-navigation/native";
import { collection, getDoc, getDocs } from "firebase/firestore";
import { db } from "../firebase";
const Homescreen = () => {
  const cart = useSelector((state) => state.cart.cart);
  const [items, setItems] = useState([]);
  const total = cart
    .map((item) => item.quantity * item.price)
    .reduce((curr, prev) => curr + prev, 0);
  const navigation = useNavigation();
  console.log(cart);

  const [displayCurrentAddress, setdisplayCurrentAddress] = useState(
    "we are loading your location"
  );
  const [locationServicesEnabled, setlocationServicesEnabled] = useState(false);
  useEffect(() => {
    checkIfLocationEnabled();
    getCurrentLocation();
  }, []);
  const checkIfLocationEnabled = async () => {
    let enabled = await Location.hasServicesEnabledAsync();
    if (!enabled) {
      Alert.alert(
        "Your Location isn't turned ON",
        "Please make sure you have enabled your location",
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
      setlocationServicesEnabled(enabled);
    }
  };
  const getCurrentLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();

    if (status !== "granted") {
      Alert.alert(
        "Permission was denied! ",
        "Enable location or desyncronisation immenent",
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
    }
    const { coords } = await Location.getCurrentPositionAsync();
    console.log(coords);
    if (coords) {
      const { latitude, longitude } = coords;

      let response = await Location.reverseGeocodeAsync({
        latitude,
        longitude,
      });

      for (let item of response) {
        let address = `${item.name} ${item.city} ${item.country} `;
        setdisplayCurrentAddress(address);
      }
      console.log(response);
    }
  };
  const product = useSelector((state) => state.product.product);
  const dispatch = useDispatch();
  useEffect(() => {
    if (product.length > 0) return;
    const fetchProducts = async () => {
      const colRef = collection(db, "types");
      const docsSnap = await getDocs(colRef);
      docsSnap.forEach((doc) => {
        items.push(doc.data());
      });
      items?.map((service) => dispatch(getProducts(service)));
      // Fitems.map((service) => dispatch(getProducts(service)));
    };
    fetchProducts();
  }, []);
  console.log(product);
  const Fitems = [
    {
      id: "0",
      image: "https://cdn-icons-png.flaticon.com/512/1748/1748926.png",
      name: "Mop",
      quantity: 0,
      price: 10,
    },
    {
      id: "1",
      image: "https://cdn-icons-png.flaticon.com/512/1059/1059246.png",
      name: "Broom",
      quantity: 0,
      price: 10,
    },
    {
      id: "2",
      image: "https://cdn-icons-png.flaticon.com/512/3365/3365197.png",
      name: "Floor \nCleaner",
      quantity: 0,
      price: 10,
    },
    {
      id: "3",
      image:
        "https://cdn.iconscout.com/icon/premium/png-256-thumb/wiper-11-708920.png",
      name: "Wiper",
      quantity: 0,
      price: 10,
    },
    {
      id: "4",
      image: "https://cdn-icons-png.flaticon.com/512/1216/1216355.png",
      name: "Window \nCleaners",
      quantity: 0,
      price: 10,
    },
    {
      id: "5",
      image: "https://cdn-icons-png.flaticon.com/512/1059/1059226.png",
      name: "Vacuum",
      quantity: 0,
      price: 10,
    },
    {
      id: "6",
      image: "https://cdn-icons-png.flaticon.com/512/3238/3238669.png",
      name: "Detergent",
      quantity: 0,
      price: 10,
    },
  ];

  return (
    <>
      <ScrollView style={{ backgroundColor: "#F0F0F0", marginTop: 38 }}>
        {/* Location and Profile */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <MaterialIcons name="location-on" size={30} color="#fd5c63" />
          <View>
            <Text style={{ fontSize: 18, fontWeight: "600" }}>Home</Text>
            <Text style={{ fontSize: 12 }}>{displayCurrentAddress}</Text>
          </View>
          <Pressable style={{ marginLeft: "auto", marginRight: 7 }}>
            <Image
              style={{
                width: 40,
                height: 40,
                borderRadius: 20,
              }}
              source={{
                uri: "https://lh3.googleusercontent.com/a/AGNmyxZhb2ameVe-9hD3M4DrYA6o_5Vun2_RsQrvKAEv=s96-c-rg-br100",
              }}
            />
          </Pressable>
        </View>
        {/* Search Bar */}
        <View
          style={{
            padding: 10,
            margin: 10,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            borderWidth: 0.8,
            borderColor: "#C0C0C0",
            borderRadius: 7,
          }}
        >
          <TextInput placeholder="Search here :D" />
          <Feather name="search" size={24} color="#fd5c63" />
        </View>
        {/* Carousel from components */}
        <Carousel />
        {/* Services from components */}
        <Services />
        {/* rendering all the frequently bought products */}
        {product.map((item, index) => (
          <FrequentItems item={item} key={index} />
        ))}
      </ScrollView>
      {total === 0 ? null : (
        <Pressable
          style={{
            backgroundColor: "#088F8F",
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
              extra charges might apply
            </Text>
          </View>

          <Pressable onPress={() => navigation.navigate("PickUp")}>
            <Text style={{ fontSize: 17, fontWeight: "600", color: "white" }}>
              Proceed to pickup
            </Text>
          </Pressable>
        </Pressable>
      )}
    </>
  );
};

export default Homescreen;

const styles = StyleSheet.create({});
