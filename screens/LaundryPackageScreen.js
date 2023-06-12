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
              uri: "https://cdn-icons-png.flaticon.com/128/2975/2975175.png",
            }}
            style={styles.packageImage}
          />
          <Text style={styles.packageText}>
            Introducing our Fresh & Clean Package, your go-to solution for all
            your laundry needs. We understand the importance of having fresh,
            clean, and neatly folded clothes. With our reliable laundry
            services, we'll take care of your laundry from start to finish,
            ensuring your garments come back looking and smelling fantastic.
            Experience the joy of effortlessly maintaining a wardrobe filled
            with crisp, clean clothes. Choose our Fresh & Clean Package and let
            us handle your laundry worries.
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
              uri: "https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/36389/detergent-clipart-md.png",
            }}
            style={styles.packageImage}
          />
          <Text style={styles.packageText}>
            Indulge in the luxury of our Deluxe Care Package, designed to give
            your clothes the special treatment they deserve. We go above and
            beyond to provide exceptional care for your garments. From delicate
            fabrics to tough stains, our expert team utilizes advanced
            techniques and specialized products to ensure your clothes receive
            the utmost care and attention. With our Deluxe Care Package, your
            clothes will be treated like royalty. Pamper yourself and your
            wardrobe with our unparalleled laundry services.
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
              uri: "https://png.pngtree.com/png-clipart/20230124/ourmid/pngtree-illustration-of-a-laundry-washing-machine-png-image_6568228.png",
            }}
            style={styles.packageImage}
          />
          <Text style={styles.packageText}>
            Pressed for time? Our Express Refresh Package is here to save the
            day! We understand your busy schedule and the need for quick and
            efficient laundry services. Our Express Refresh Package offers a
            lightning-fast turnaround time, ensuring your clothes are washed,
            dried, and folded promptly. No more stress or delays. Just drop off
            your laundry, and we'll take care of the rest, so you can get back
            to your day with refreshed and perfectly clean clothes. Say goodbye
            to laundry woes with our convenient Express Refresh Package.
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
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <Text style={styles.title}>Laundry Packages</Text>
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
        <Image source={beeImage} style={{ padding: 50, marginTop: 50 }} />
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
    paddingTop: 100,
    paddingBottom: 10,
    color: "#000000",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
    backgroundColor: "#42A5F5",
  },
  scrollViewContainer: {
    flexGrow: 1,
    alignItems: "center",
    paddingTop: 100,
    paddingBottom: 10,
  },
  packageButton: {
    width: windowWidth * 0.8,
    height: 50,
    borderRadius: 10,
    backgroundColor: "#FF9800",
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
    backgroundColor: "#FF9800",
  },
  packageImage: {
    width: windowWidth * 0.8,
    aspectRatio: 1,
    borderRadius: 10,
  },
  packageText: {
    marginTop: 10,
    fontSize: 14,
    lineHeight: 20,
    textAlign: "justify",
    color: "#FFF",
    fontFamily: "Lato",
  },
  addButton: {
    width: windowWidth * 0.6,
    height: 40,
    borderRadius: 8,
    backgroundColor: "#FFF",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  addButtonText: {
    color: "#FF9800",
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
