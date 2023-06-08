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

const LaundryPackageScreen = () => {
  const [package1Visible, setPackage1Visible] = useState(false);
  const [package2Visible, setPackage2Visible] = useState(false);
  const [package3Visible, setPackage3Visible] = useState(false);

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

  const renderPackage1Details = () => {
    if (package1Visible) {
      return (
        <View style={styles.packageDetailsContainer}>
          <Image
            source={{
              uri: "https://image.pngaaa.com/577/174577-middle.png",
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
              uri: "https://png.pngtree.com/png-clipart/20230124/ourmid/pngtree-illustration-of-a-laundry-washing-machine-png-image_6568228.png",
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
              uri: "https://e7.pngegg.com/pngimages/175/516/png-clipart-laundry-room-washing-machines-clothing-loundry-kitchen-service.png",
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
        </View>
      );
    }
    return null;
  };

  return (
    <View style={styles.container}>
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
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
  },
  scrollViewContainer: {
    flexGrow: 1,
    alignItems: "center",
    paddingTop: 10,
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
});