import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  KeyboardAvoidingView,
  TextInput,
  Pressable,
  ActivityIndicator,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import Footer from "../components/Footer";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  useEffect(() => {
    setLoading(true);
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (!authUser) {
        setLoading(false);
      }
      if (authUser) {
        navigation.replace("Home");
      }
    });

    return unsubscribe;
  }, []);

  const login = () => {
    if (email.trim() === "" || password.trim() === "") {
      Alert.alert("Error", "Please enter both email and password.");
      return;
    }

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("user credential", userCredential);
        const user = userCredential.user;
        console.log("user details", user);
        // Redirect to Home screen or perform other actions
      })
      .catch((error) => {
        console.log("login error", error);
        if (
          error.code === "auth/invalid-email" ||
          error.code === "auth/wrong-password"
        ) {
          Alert.alert("Error", "Incorrect email or password.");
        } else {
          Alert.alert("Error", "Failed to login. Please try again.");
        }
      });
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: "center",
        marginTop: 70,
      }}
    >
      {loading ? (
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
            flex: 1,
          }}
        >
          <Text style={{ marginRight: 10 }}>Loading</Text>
          <ActivityIndicator size="large" color={"red"} />
        </View>
      ) : (
        <KeyboardAvoidingView>
          <View style={styles.container}>
            <Text style={styles.head}>Login</Text>
            <Text style={{ fontSize: 12, color: "#828282" }}>
              Login with one of the following options
            </Text>
            {/* Login Options */}
            <View style={styles.buttons}>
              <TouchableOpacity style={styles.button}>
                <Image
                  source={require("../assets/icon-google.png")}
                  style={styles.icon}
                ></Image>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button}>
                <Image
                  source={require("../assets/icon-twitter.png")}
                  style={styles.icon}
                ></Image>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button}>
                <Image
                  source={require("../assets/icon-apple.png")}
                  style={styles.icon}
                ></Image>
              </TouchableOpacity>
            </View>
            {/* Login Inputs */}
            <View>
              <TextInput
                style={styles.inputs}
                value={email}
                placeholder="Email"
                onChangeText={(text) => setEmail(text)}
              />
              <TextInput
                style={styles.inputs}
                value={password}
                onChangeText={(text) => setPassword(text)}
                secureTextEntry={true}
                placeholder="Password"
              />
              <TouchableOpacity
                style={[styles.inputs, { backgroundColor: "#087E8B" }]}
                onPress={login}
              >
                <Text
                  style={{
                    marginTop: 13,
                    paddingLeft: 100,
                    color: "#FCFDFF",
                    fontWeight: "bold",
                  }}
                >
                  Login
                </Text>
              </TouchableOpacity>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginLeft: 30,
                  marginTop: 30,
                }}
              >
                <Text>Don't have an account?</Text>
                <TouchableOpacity
                  onPress={() => navigation.navigate("Register")}
                >
                  <Text style={{ fontWeight: "bold" }}>Sign up</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <Footer />
        </KeyboardAvoidingView>
      )}
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
    margin: 50,
    flexDirection: "column",
  },
  buttons: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    borderBottomWidth: 1,
    borderColor: "#DEDEDE",
  },
  button: {
    backgroundColor: "#D4E4E6",
    width: 75,
    height: 40,
    justifyContent: "space-evenly",
    margin: 25,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  icon: {
    width: 20,
    height: 20,
    marginLeft: 25,
  },
  head: {
    fontSize: 45,
    fontWeight: "bold",
  },
  inputs: {
    width: 300,
    height: 50,
    backgroundColor: "#D4E4E6",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    marginTop: 30,
    paddingLeft: 20,
  },
});
