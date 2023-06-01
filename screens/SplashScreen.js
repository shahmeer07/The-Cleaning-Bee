import { React, useEffect, useRef } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Animated,
  ImageBackground,
  Easing,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

const SplashScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    animateLogo();
    const timer = setTimeout(() => {
      navigation.navigate("Login"); // Replace 'Login' with the name of your login screen
    }, 3000); // Replace 3000 with the duration in milliseconds you want the splash screen to be displayed

    return () => clearTimeout(timer);
  }, [navigation]);
  const translateY = useRef(new Animated.Value(0)).current;

  const animateLogo = () => {
    //   For up and down
    Animated.loop(
      Animated.sequence([
        Animated.timing(translateY, {
          toValue: -50,
          duration: 1500,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
        Animated.timing(translateY, {
          toValue: 0,
          duration: 1500,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
      ]),
      { iterations: -1 }
    ).start();
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <ImageBackground
          source={require("../assets/TCB-Splash-Screen.png")}
          style={styles.bg}
        >
          <Animated.Image
            source={require("../assets/bee-128.png")}
            style={[styles.logo, { translateY }]}
          ></Animated.Image>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bg: {
    flex: 1,
    justifyContent: "center",
    height: 850,
  },
  logo: {
    marginLeft: 130,
  },
});

export default SplashScreen;
