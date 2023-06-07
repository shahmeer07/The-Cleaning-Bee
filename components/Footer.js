import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Footer = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textLeft}>© Shahmeer & Sannya Co.</Text>
      <Text
        style={styles.link}
        onPress={() =>
          handleLinkPress(
            "https://www.linkedin.com/in/muhammad-shahmeer-khan-a2912b223/"
          )
        }
      >
        Contact
      </Text>
    </View>
  );
};

const handleLinkPress = (url) => {
  // Handle the click event here, e.g., open the URL in a browser
  // You can use libraries like 'react-native-linking' to open the URL
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FF9800",
    paddingVertical: 15,
    paddingHorizontal: 20,
    flexDirection: "row", // Arrange the items horizontally
    alignItems: "center",
    width: "100%", // Set the width to 100% to take up the full width of the screen
  },
  textLeft: {
    flex: 1, // Expand to take available space
    color: "white",
    fontFamily: "Lato",
    textAlign: "left", // Align the text to the left
  },
  link: {
    color: "white",
    fontFamily: "Lato",
    textDecorationLine: "underline",
    textAlign: "right", // Align the link to the right
  },
});

export default Footer;
