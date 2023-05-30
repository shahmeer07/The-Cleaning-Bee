import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Homescreen from "./screens/Homescreen";
import Splash from "./screens/Splash";
import Login from "./screens/Login";
import Signup from "./screens/Signup";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Homescreen /> */}
      {/* <Splash /> */}
      {/* <Login /> */}
      <Signup />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
});
