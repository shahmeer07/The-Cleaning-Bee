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

const DryCleaningScreen = () => {
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
              uri: "https://w7.pngwing.com/pngs/925/152/png-transparent-assorted-household-cleaning-items-commercial-cleaning-maid-service-cleaner-cleaning-agent-clean-furniture-bathroom-toilet-thumbnail.png",
            }}
            style={styles.packageImage}
          />
          <Text style={styles.packageText}>
            {/* Add your 300-word description of why cleaning is necessary */}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed
            odio quis lectus rhoncus consequat. Vivamus lacinia felis lectus,
            non viverra orci interdum vitae. Fusce accumsan neque sit amet augue
            fringilla, vitae rutrum elit aliquet. Morbi in efficitur odio, eget
            bibendum lacus. Suspendisse nec bibendum nunc, eu auctor turpis.
            Phasellus vestibulum tristique justo et tristique. Aenean hendrerit
            mollis nisl, ac interdum ipsum suscipit nec. Integer eu libero vitae
            risus tempor sollicitudin. Donec fermentum lectus ac ex accumsan, a
            convallis elit venenatis. Curabitur ultrices, mi vitae ultrices
            lacinia, leo mi sollicitudin nunc, in suscipit justo urna vitae
            velit. In at nisi consequat, vestibulum arcu a, venenatis arcu.
            Nullam rutrum, ex quis consectetur iaculis, nulla purus tincidunt
            mi, vel condimentum lacus augue sed sapien. Sed pretium urna risus,
            id scelerisque dui fringilla in. Mauris scelerisque facilisis dolor,
            eu auctor sapien feugiat id. Ut vel cursus lectus. Cras ultrices
            luctus lorem at efficitur. Vestibulum ante ipsum primis in faucibus
            orci luctus et ultrices posuere cubilia curae; Suspendisse quis
            pretium est, at fermentum mauris. Phasellus pellentesque, justo a
            egestas pulvinar, tellus justo laoreet mauris, a auctor lectus velit
            vel neque. Mauris aliquam lectus vitae facilisis placerat. Quisque
            nec elit tristique, aliquam mi at, finibus elit. Morbi non metus
            tempus
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
          <Text style={styles.packageText}>Package 2 details</Text>
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
          <Text style={styles.packageText}>Package 3 details</Text>
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
          accessibilityLabel="1100"
        >
          <Text style={styles.packageButtonText}>Package 1</Text>
        </Pressable>

        {renderPackage1Details()}

        <Pressable
          style={styles.packageButton}
          onPress={togglePackage2}
          android_ripple={{ color: "#FF9800" }}
          accessibilityLabel="2100"
        >
          <Text style={styles.packageButtonText}>Package 2</Text>
        </Pressable>

        {renderPackage2Details()}

        <Pressable
          style={styles.packageButton}
          onPress={togglePackage3}
          android_ripple={{ color: "#FF9800" }}
          accessibilityLabel="3100"
        >
          <Text style={styles.packageButtonText}>Package 3</Text>
        </Pressable>

        {renderPackage3Details()}
      </ScrollView>
    </View>
  );
};

export default DryCleaningScreen;

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
  },
});
