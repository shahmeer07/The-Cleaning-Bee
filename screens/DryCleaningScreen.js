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
const DryCleaningScreen = () => {
  const [package1Visible, setPackage1Visible] = useState(false);
  const [package2Visible, setPackage2Visible] = useState(false);
  const [package3Visible, setPackage3Visible] = useState(false);
  const beeImage = require("../assets/bee-128.png");
  const package1Name = "Classic care Package";
  const package2Name = "Premium Clean Package";
  const package3Name = "Quick Refresh Package";
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
              uri: "https://pngimg.com/d/iron_PNG15558.png",
            }}
            style={styles.packageImage}
          />
          <Text style={styles.packageText}>
            Introducing our Classic Care Package, where timeless elegance meets
            exceptional dry cleaning services. We understand the value of your
            cherished garments and the need for meticulous care. Our dedicated
            team of experts will handle your suits, dresses, and formal wear
            with the utmost attention to detail. Experience the Classic Care
            difference as we restore your clothes to their pristine condition,
            ensuring they look their best. Choose our Classic Care Package and
            entrust your wardrobe to our expertise.
          </Text>
          {cart.find((item) => item.id === 1100) ? (
            <Pressable
              style={styles.removeButton}
              onPress={() => handleRemoveFromCart(1100)}
              android_ripple={{ color: "#FF9800" }}
              accessibilityLabel="Remove from Cart"
            >
              <Text style={styles.removeButtonText}>Remove</Text>
            </Pressable>
          ) : (
            <Pressable
              style={styles.addButton}
              onPress={() => handleAddToCart(1100, 20, package1Name)}
              android_ripple={{ color: "#FF9800" }}
              accessibilityLabel="Add to Cart"
            >
              <Text style={styles.addButtonText}>Add for $20</Text>
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
              uri: "https://cdn-icons-png.flaticon.com/128/9753/9753675.png",
            }}
            style={styles.packageImage}
          />
          <Text style={styles.packageText}>
            Indulge in the luxury of our Premium Clean Package, designed to
            cater to the finest fabrics and delicate garments. We believe that
            exceptional clothing deserves extraordinary care. Our team of
            specialists is trained to handle luxury fabrics, intricate designs,
            and high-end clothing with precision. With our advanced cleaning
            techniques and meticulous attention to detail, we ensure your
            garments receive the premium treatment they deserve. Elevate your
            wardrobe with our unparalleled Premium Clean Package and experience
            dry cleaning at its finest.
          </Text>
          {cart.find((item) => item.id === 2100) ? (
            <Pressable
              style={styles.removeButton}
              onPress={() => handleRemoveFromCart(2100)}
              android_ripple={{ color: "#FF9800" }}
              accessibilityLabel="Remove from Cart"
            >
              <Text style={styles.removeButtonText}>Remove</Text>
            </Pressable>
          ) : (
            <Pressable
              style={styles.addButton}
              onPress={() => handleAddToCart(2100, 40, package2Name)}
              android_ripple={{ color: "#FF9800" }}
              accessibilityLabel="Add to Cart"
            >
              <Text style={styles.addButtonText}>Add for $40</Text>
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
              uri: "https://cdn-icons-png.flaticon.com/128/9753/9753675.png",
            }}
            style={styles.packageImage}
          />
          <Text style={styles.packageText}>
            Pressed for time? Our Quick Refresh Package is here to offer
            convenience without compromising quality. We understand the demands
            of a busy lifestyle. With our efficient dry cleaning services, we
            provide a quick turnaround time, ensuring your clothes are ready for
            any occasion in no time. Drop off your garments with us, and our
            swift processes will have them looking fresh, clean, and ready to
            wear. Experience the ease of our Quick Refresh Package and reclaim
            your time without compromising on cleanliness.
          </Text>
          {cart.find((item) => item.id === 3100) ? (
            <Pressable
              style={styles.removeButton}
              onPress={() => handleRemoveFromCart(3100)}
              android_ripple={{ color: "#FF9800" }}
              accessibilityLabel="Remove from Cart"
            >
              <Text style={styles.removeButtonText}>Remove</Text>
            </Pressable>
          ) : (
            <Pressable
              style={styles.addButton}
              onPress={() => handleAddToCart(3100, 60, package3Name)}
              android_ripple={{ color: "#FF9800" }}
              accessibilityLabel="Add to Cart"
            >
              <Text style={styles.addButtonText}>Add for $60</Text>
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
          <Text style={styles.title}>Dry Cleaning Packages</Text>
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
          accessibilityLabel="1100"
        >
          <Text style={styles.packageButtonText}>Classic Care Package</Text>
        </Pressable>

        {renderPackage1Details()}

        <Pressable
          style={styles.packageButton}
          onPress={togglePackage2}
          android_ripple={{ color: "#FF9800" }}
          accessibilityLabel="2100"
        >
          <Text style={styles.packageButtonText}>Premium Clean Package</Text>
        </Pressable>

        {renderPackage2Details()}

        <Pressable
          style={styles.packageButton}
          onPress={togglePackage3}
          android_ripple={{ color: "#FF9800" }}
          accessibilityLabel="3100"
        >
          <Text style={styles.packageButtonText}>Quick Refresh Package</Text>
        </Pressable>

        {renderPackage3Details()}
      </ScrollView>
      <Footer />
    </View>
  );
};

export default DryCleaningScreen;

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
