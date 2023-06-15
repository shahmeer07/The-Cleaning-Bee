import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  Pressable,
  ScrollView,
} from "react-native";
import Footer from "../components/Footer";

import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../CartReducer";

const LaundryPackageScreen = () => {
  const [package1Visible, setPackage1Visible] = useState(false);
  const [package2Visible, setPackage2Visible] = useState(false);
  const [package3Visible, setPackage3Visible] = useState(false);
  const beeImage = require("../assets/bee-128.png");
  const package1Name = "Fresh & Clean Package";
  const package2Name = "Deluxe Care Pakage";
  const package3Name = "Express Refresh Package";
  const cart = useSelector((state) => state.cart.cart);

  const togglePackage1 = () => {
    setPackage1Visible(!package1Visible);
    setPackage2Visible(false);
    setPackage3Visible(false);
  };

  const togglePackage2 = () => {
    setPackage1Visible(false);
    setPackage2Visible(!package2Visible);
    setPackage3Visible(false);
  };

  const togglePackage3 = () => {
    setPackage1Visible(false);
    setPackage2Visible(false);
    setPackage3Visible(!package3Visible);
  };

  const dispatch = useDispatch();

  const handleAddToCart = (packageId, price, packageName) => {
    dispatch(addToCart({ id: packageId, price, packageName }));
  };
  const handleRemoveFromCart = (packageId) => {
    dispatch(removeFromCart({ id: packageId }));
  };

  const renderPackage1Details = () => {
    if (package1Visible) {
      return (
        <View style={styles.packageDetailsContainer}>
          <Image
            source={{
              uri: "https://static.vecteezy.com/system/resources/previews/006/489/092/original/laundry-icon-illustrations-vector.jpg",
              }}
            style={styles.packageImage}
          />
          <Text style={styles.packageText}>
            Introducing our Fresh & Clean Package, your go-to solution for all
            your laundry needs. We understand the importance of having fresh,
            clean, and neatly folded clothes. With our reliable laundry
            services, we'll take care of your laundry from start to finish,
            ensuring your garments come back looking and smelling fantastic.
          </Text>
          {cart.find((item) => item.id === 1010) ? (
            <Pressable
              style={styles.removeButton}
              onPress={() => handleRemoveFromCart(1010)}
              android_ripple={{ color: "#FF9800" }}
              accessibilityLabel="Remove from Cart"
            >
              <Text style={styles.removeButtonText}>Remove</Text>
            </Pressable>
          ) : (
            <Pressable
              style={styles.addButton}
              onPress={() => handleAddToCart(1010, 100, package1Name)}
              android_ripple={{ color: "#FF9800" }}
              accessibilityLabel="Add to Cart"
            >
              <Text style={styles.addButtonText}>Add for $100</Text>
            </Pressable>
          )}
        </View>
      );
    }
    return null;
  };

  const renderPackage2Details = () => {
    if (package2Visible) {
      return (
        <View style={styles.packageDetailsContainer}>
          <Image
            source={{
              uri: "data:image/jpeg;base64,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",
            }}
            style={styles.packageImage}
          />
          <Text style={styles.packageText}>
            Indulge in the luxury of our Deluxe Care Package, designed to give
            your clothes the special treatment they deserve. We go above and
            beyond to provide exceptional care for your garments. From delicate
            fabrics to tough stains, our expert team utilizes advanced
            techniques and specialized products to ensure your clothes receive
            the utmost care and attention.
          </Text>

          {cart.find((item) => item.id === 2010) ? (
            <Pressable
              style={styles.removeButton}
              onPress={() => handleRemoveFromCart(2010)}
              android_ripple={{ color: "#FF9800" }}
              accessibilityLabel="Remove from Cart"
            >
              <Text style={styles.removeButtonText}>Remove</Text>
            </Pressable>
          ) : (
            <Pressable
              style={styles.addButton}
              onPress={() => handleAddToCart(2010, 200, package2Name)}
              android_ripple={{ color: "#FF9800" }}
              accessibilityLabel="Add to Cart"
            >
              <Text style={styles.addButtonText}>Add for $200</Text>
            </Pressable>
          )}
        </View>
      );
    }
    return null;
  };

  const renderPackage3Details = () => {
    if (package3Visible) {
      return (
        <View style={styles.packageDetailsContainer}>
          <Image
            source={{
              uri: "https://us.123rf.com/450wm/yupiramos/yupiramos2108/yupiramos210800924/172900120-poster-laundry-service.jpg?ver=6",
            }}
            style={styles.packageImage}
          />
          <Text style={styles.packageText}>
            Pressed for time? Our Express Refresh Package is here to save the
            day! We understand your busy schedule and the need for quick and
            efficient laundry services. Our Express Refresh Package offers a
            lightning-fast turnaround time, ensuring your clothes are washed,
            dried, and folded promptly. No more stress or delays. Just drop off
            your laundry, and we'll take care of the rest!
          </Text>

          {cart.find((item) => item.id === 3010) ? (
            <Pressable
              style={styles.removeButton}
              onPress={() => handleRemoveFromCart(3010)}
              android_ripple={{ color: "#FF9800" }}
              accessibilityLabel="Remove from Cart"
            >
              <Text style={styles.removeButtonText}>Remove</Text>
            </Pressable>
          ) : (
            <Pressable
              style={styles.addButton}
              onPress={() => handleAddToCart(3010, 300, package3Name)}
              android_ripple={{ color: "#FF9800" }}
              accessibilityLabel="Add to Cart"
            >
              <Text style={styles.addButtonText}>Add for $300</Text>
            </Pressable>
          )}
        </View>
      );
    }
    return null;
  };

  return (
    <View style={styles.container}>
      <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop : 80,
            marginHorizontal : 30,
          }}
        >
          <Text style={styles.title}>Laundary Packages</Text>
          <Image
            source={beeImage}
            style={{ width: 40, height: 40, marginTop: 2 }}
          />
        </View>
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <Pressable
          style={styles.packageButton}
          onPress={togglePackage1}
          android_ripple={{ color: "#FF9800" }}
          accessibilityLabel="1010"
        >
          <Text style={styles.packageButtonText}>Fresh & Clean Package</Text>
        </Pressable>

        {renderPackage1Details()}

        <Pressable
          style={styles.packageButton}
          onPress={togglePackage2}
          android_ripple={{ color: "#FF9800" }}
          accessibilityLabel="2010"
        >
          <Text style={styles.packageButtonText}>Deluxe Care Package</Text>
        </Pressable>

        {renderPackage2Details()}

        <Pressable
          style={styles.packageButton}
          onPress={togglePackage3}
          android_ripple={{ color: "#FF9800" }}
          accessibilityLabel="3010"
        >
          <Text style={styles.packageButtonText}>Express Refresh Package</Text>
        </Pressable>

        {renderPackage3Details()}
      </ScrollView>
      <Footer />
    </View>
  );
};

export default LaundryPackageScreen;

const windowWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    // paddingTop: 100,
    paddingBottom: 10,
    color: "#000000",
  },
  container: {
    flex: 1,
  },
  scrollViewContainer: {
    flexGrow: 1,
    alignItems: "center",
    paddingTop: 30,
    paddingBottom: 10,
  },
  packageButton: {
    width: windowWidth * 0.8,
    height: 50,
    borderRadius: 10,
    backgroundColor: "#088F8F",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    marginTop: 10,
  },
  packageButtonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  packageDetailsContainer: {
    width: windowWidth * 0.8,
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "white",
  },
  packageImage: {
    // width: 400,
    height: 250,
    aspectRatio: 1,
    borderRadius: 10,
  },
  packageText: {
    marginTop: 10,
    fontSize: 14,
    lineHeight: 20,
    textAlign: "justify",
    color: "#088F8F",
    padding: 10,
  },
  addButton: {
    width: windowWidth * 0.6,
    height: 40,
    borderRadius: 8,
    backgroundColor: "#FF9800",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  addButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  removeButton: {
    width: windowWidth * 0.6,
    height: 40,
    borderRadius: 8,
    backgroundColor: "#FFF",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  removeButtonText: {
    color: "#FF9800",
    fontSize: 16,
    fontWeight: "bold",
  },
});
