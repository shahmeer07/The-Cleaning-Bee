import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, FlatList, Image } from "react-native";
import { doc, setDoc, collection, getDocs, addDoc } from "firebase/firestore";
import { auth, db } from "../firebase";
import { SafeAreaView } from "react-native-safe-area-context";

const PastOrderScreen = () => {
  const [pastOrders, setPastOrders] = useState([]);

  useEffect(() => {
    const fetchPastOrders = async () => {
      try {
        const userUid = auth.currentUser.uid;
        const ordersCollectionRef = collection(db, "users", userUid, "orders");
        const querySnapshot = await getDocs(ordersCollectionRef);

        const pastOrdersData = [];
        querySnapshot.forEach((doc) => {
          pastOrdersData.push(doc.data());
        });

        setPastOrders(pastOrdersData);
      } catch (error) {
        console.error("Error fetching past orders:", error);
      }
    };

    fetchPastOrders();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Past Orders</Text>
      {pastOrders.length === 0 ? (
        <Text>No past orders found.</Text>
      ) : (
        <FlatList
          data={pastOrders}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.orderItemContainer}>
              <Text style={styles.orderDate}>{item.date}</Text>
              <Text style={styles.orderTime}>{item.time}</Text>
              <Text style={styles.orderItems}>
                {item.items.map((item) => item.name).join(", ")}
              </Text>
            </View>
          )}
        />
      )}
      <View>
        <Image source={require("../assets/bee-128.png")} style={styles.image} />
      </View>
    </SafeAreaView>
  );
};

export default PastOrderScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#FDEF49",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  orderItemContainer: {
    marginBottom: 16,
  },
  orderDate: {
    fontSize: 18,
    fontWeight: "bold",
  },
  orderTime: {
    fontSize: 16,
    color: "gray",
  },
  orderItems: {
    fontSize: 16,
    marginTop: 8,
  },
  image: {
    width: 128,
    height: 128,
    marginTop: 8,
    marginLeft: 100,
  },
});
