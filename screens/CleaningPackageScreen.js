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

const CleaningPackageScreen = () => {
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
              uri: "https://e7.pngegg.com/pngimages/672/957/png-clipart-woman-wearing-blue-apron-maid-service-cleaner-cleaning-housekeeping-maid-miscellaneous-service-thumbnail.png",
            }}
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
              uri: "https://w7.pngwing.com/pngs/925/152/png-transparent-assorted-household-cleaning-items-commercial-cleaning-maid-service-cleaner-cleaning-agent-clean-furniture-bathroom-toilet-thumbnail.png",
            }}
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
              uri: "https://w7.pngwing.com/pngs/925/152/png-transparent-assorted-household-cleaning-items-commercial-cleaning-maid-service-cleaner-cleaning-agent-clean-furniture-bathroom-toilet-thumbnail.png",
            }}
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
