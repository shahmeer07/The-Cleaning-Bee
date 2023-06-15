import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Homescreen from "./screens/Homescreen";
import { Provider } from "react-redux";
import store from "./store";
import StackNavigator from "./StackNavigator";

export default function App() {
  return (
    <Provider store={store}>
      <StackNavigator />
      <StatusBar style="auto" />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    // alignItems: "center",
    // justifyContent: "center",
  },
});
