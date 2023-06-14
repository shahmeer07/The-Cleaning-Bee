import React, { useEffect, useRef } from "react";
import {
  View,
  Image,
  StyleSheet,
  Animated,
  Easing,
  useWindowDimensions,
  Text,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import Footer from "../components/Footer";

const SplashScreen = () => {
  const navigation = useNavigation();
  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;

  useEffect(() => {
    animateLogo();
    const timer = setTimeout(() => {
      navigation.navigate("Login"); // Replace 'Login' with the name of your login screen
    }, 3000); // Replace 3000 with the duration in milliseconds you want the splash screen to be displayed

    return () => clearTimeout(timer);
  }, [navigation]);

  const translateY = useRef(new Animated.Value(0)).current;
  const scale = useRef(new Animated.Value(1)).current;

  const animateLogo = () => {
    Animated.parallel([
      Animated.timing(translateY, {
        toValue: windowHeight / 6 - 20, // Adjust this value based on the logo height
        duration: 1000,
        easing: Easing.ease,
        useNativeDriver: true,
      }),
      Animated.timing(scale, {
        toValue: 0.8,
        duration: 1000,
        easing: Easing.ease,
        useNativeDriver: true,
      }),
    ]).start(() => {
      Animated.loop(
        Animated.sequence([
          Animated.timing(translateY, {
            toValue: 0,
            duration: 500,
            easing: Easing.ease,
            useNativeDriver: true,
          }),
          Animated.timing(scale, {
            toValue: 1,
            duration: 500,
            easing: Easing.ease,
            useNativeDriver: true,
          }),
        ]),
        { iterations: -1 }
      ).start();
    });
  };

  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.bg}>
          <Animated.Image
            source={{
              uri: "https://static.vecteezy.com/system/resources/previews/000/642/656/original/abstract-modern-yellow-bee-hive-pattern-hexagon-background-illustration-vector-eps10.jpg",
            }}
            style={[
              styles.backgroundImage,
              { width: windowWidth, height: windowHeight },
            ]}
            resizeMode="cover"
          />
          <Animated.Image
            source={require("../assets/bee-128.png")}
            style={[
              styles.logo,
              {
                transform: [{ translateY }, { scale }],
              },
            ]}
          />

          <TouchableOpacity
            style={styles.pressable}
            onPress={() => navigation.navigate("Home")} // Replace 'Home' with the name of your home screen
          >
            <Text style={styles.pressableText}>Go to Home</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      <Footer />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bg: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  backgroundImage: {
    position: "absolute",
  },
  logo: {
    width: 128,
    height: 128,
    position: "absolute",
  },
  textContainer: {
    position: "absolute",
    bottom: 50, // Adjust this value to control the vertical position
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 14,
    fontWeight: "bold",
    color: "black",
    textAlign: "center",
  },
  pressable: {
    position: "absolute",
    top: 20,
    right: 15,
    padding: 5,
    backgroundColor: "#FF9800", // Change to the desired color
    borderRadius: 8,
  },
  pressableText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default SplashScreen;
