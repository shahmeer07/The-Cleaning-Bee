import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Alert,
  Pressable,
  Image,
  ImageBackground,
  TextInput,
  ScrollView,
  Animated,
  Easing,
} from "react-native";
import { React, useEffect, useRef } from "react";

export default function Splash() {
  const translateY = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    animateLogo();
  }, []);

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
    <View style={styles.container}>
      <ImageBackground
        source={require("../images/TCB-Splash-Screen.png")}
        style={styles.bg}
      >
        <Animated.Image
          source={require("../images/bee-128.png")}
          style={[styles.logo, { translateY }]}
        ></Animated.Image>
      </ImageBackground>
    </View>
  );
}

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
