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
      <View style={{flexDirection:"row", justifyContent : "space-between", marginBottom : 10}}>
      <Text style={styles.title}>Past Orders</Text>
      <Image
              style={{
                width: 40,
                height: 40,
                marginTop: 2,
              }}
              source={require("../assets/bee-128.png")}
            />
      </View>
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
                Products/Packages : {item.items.map((item) => item.packageName || item.name).join(", ")}
              </Text>
            </View>
          )}
        />
      )}
    </SafeAreaView>
  );
};

export default PastOrderScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    marginTop : 15,
    
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  orderItemContainer: {
    marginBottom: 16,
    backgroundColor : "#088F8F",
    borderRadius : 15,
    paddingHorizontal : 25,
    paddingVertical : 10,
    
  },
  orderDate: {
    fontSize: 18,
    fontWeight: "bold",
    color : "white",
  },
  orderTime: {
    fontSize: 16,
    color : "white",
  },
  orderItems: {
    fontSize: 16,
    marginTop: 8,
    color : "white",
  }
});
