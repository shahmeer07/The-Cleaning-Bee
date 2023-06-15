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
const CleaningPackageScreen = () => {
  const [package1Visible, setPackage1Visible] = useState(false);
  const [package2Visible, setPackage2Visible] = useState(false);
  const [package3Visible, setPackage3Visible] = useState(false);
  const beeImage = require("../assets/bee-128.png");
  const package1Name = "Sparkle Clean Package";
  const package2Name = "Deep Refresh Package";
  const package3Name = "Luxury Shine Package";
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
            source={require("../assets/Cleaning-Package-01.png")}
            style={styles.packageImage}
          />
          <Text style={styles.packageText}>
            Welcome to our Sparkle Clean Package, where we transform your living
            or working space into a pristine oasis. Sit back, relax, and let our
            expert cleaners work their magic. With our comprehensive cleaning
            services, we'll ensure every nook and cranny is free from dust,
            dirt, and grime. Experience the joy of coming home to a spotless
            environment, ready to embrace you with freshness and serenity.
            Choose the Sparkle Clean Package and let us make your world shine.
          </Text>
          {cart.find((item) => item.id === 1000) ? (
            <Pressable
              style={styles.removeButton}
              onPress={() => handleRemoveFromCart(1000)}
              android_ripple={{ color: "#FF9800" }}
              accessibilityLabel="Remove from Cart"
            >
              <Text style={styles.removeButtonText}>Remove</Text>
            </Pressable>
          ) : (
            <Pressable
              style={styles.addButton}
              onPress={() => handleAddToCart(1000, 150, package1Name)}
              android_ripple={{ color: "#FF9800" }}
              accessibilityLabel="Add to Cart"
            >
              <Text style={styles.addButtonText}>Add for $150</Text>
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
            source={require("../assets/Cleaning-Package-02.png")}
            style={styles.packageImage}
          />
          <Text style={styles.packageText}>
            Indulge in the ultimate Deep Refresh Package and discover a whole
            new level of cleanliness. Our dedicated team will delve deep into
            every corner, banishing even the most stubborn stains and odors.
            Experience the transformative power of our meticulous deep cleaning
            techniques, leaving your space revitalized and rejuvenated. From
            thorough sanitization to organizing chaos, we'll ensure a truly
            refreshing environment. Elevate your surroundings with the Deep
            Refresh Package and breathe in the essence of cleanliness.
          </Text>
          {cart.find((item) => item.id === 2000) ? (
            <Pressable
              style={styles.removeButton}
              onPress={() => handleRemoveFromCart(2000)}
              android_ripple={{ color: "#FF9800" }}
              accessibilityLabel="Remove from Cart"
            >
              <Text style={styles.removeButtonText}>Remove</Text>
            </Pressable>
          ) : (
            <Pressable
              style={styles.addButton}
              onPress={() => handleAddToCart(2000, 250, package2Name)}
              android_ripple={{ color: "#FF9800" }}
              accessibilityLabel="Add to Cart"
            >
              <Text style={styles.addButtonText}>Add for $250</Text>
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
            source={require("../assets/Cleaning-Package-03.png")}
            style={styles.packageImage}
          />
          <Text style={styles.packageText}>
            Introducing our exquisite Luxury Shine Package, designed to cater to
            your discerning taste for perfection. Step into a realm of
            unparalleled cleanliness, where every detail is meticulously
            attended to. Our highly skilled professionals will employ
            top-of-the-line cleaning methods and premium products to create an
            ambiance of opulence and elegance. From polished surfaces to
            flawlessly arranged spaces, the Luxury Shine Package offers an
            exceptional cleaning experience. Pamper yourself and elevate your
            standards with the epitome of luxury cleanliness.
          </Text>
          {cart.find((item) => item.id === 3000) ? (
            <Pressable
              style={styles.removeButton}
              onPress={() => handleRemoveFromCart(3000)}
              android_ripple={{ color: "#FF9800" }}
              accessibilityLabel="Remove from Cart"
            >
              <Text style={styles.removeButtonText}>Remove</Text>
            </Pressable>
          ) : (
            <Pressable
              style={styles.addButton}
              onPress={() => handleAddToCart(3000, 350, package3Name)}
              android_ripple={{ color: "#FF9800" }}
              accessibilityLabel="Add to Cart"
            >
              <Text style={styles.addButtonText}>Add for $350</Text>
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
          <Text style={styles.title}>Cleaning Packages</Text>
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
          accessibilityLabel="1000"
        >
          <Text style={styles.packageButtonText}> Sparkle Clean Package </Text>
        </Pressable>

        {renderPackage1Details()}

        <Pressable
          style={styles.packageButton}
          onPress={togglePackage2}
          android_ripple={{ color: "#FF9800" }}
          accessibilityLabel="2000"
        >
          <Text style={styles.packageButtonText}> Deep Refresh Package </Text>
        </Pressable>

        {renderPackage2Details()}

        <Pressable
          style={styles.packageButton}
          onPress={togglePackage3}
          android_ripple={{ color: "#FF9800" }}
          accessibilityLabel="3000"
        >
          <Text style={styles.packageButtonText}>Luxury Shine Package</Text>
        </Pressable>

        {renderPackage3Details()}
      </ScrollView>
      <Footer />
    </View>
  );
};

export default CleaningPackageScreen;

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
