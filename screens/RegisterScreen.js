import {
  StyleSheet,
  Text,
  View,
  Pressable,
  TextInput,
  SafeAreaView,
  KeyboardAvoidingView,
  Alert,
  TouchableOpacity,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase";
import { doc, setDoc } from "firebase/firestore";
import Footer from "../components/Footer";

const RegisterScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const navigation = useNavigation();
  const register = () => {
    if (email === "" || password === "" || phone === "") {
      Alert.alert(
        "Invalid Details",
        "Please fill all the details",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel",
          },
          { text: "OK", onPress: () => console.log("OK Pressed") },
        ],
        { cancelable: false }
      );
    }
    createUserWithEmailAndPassword(auth, email, password).then(
      (userCredential) => {
        console.log("user credential", userCredential);
        const user = userCredential._tokenResponse.email;
        const myUserUid = auth.currentUser.uid;

        setDoc(doc(db, "users", `${myUserUid}`), {
          email: user,
          phone: phone,
        });
      }
    );
  };
  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: "center",
        marginTop: 70,
      }}
    >
      <KeyboardAvoidingView>
        <View style={styles.container}>
          <Text style={styles.head}>Sign up</Text>
          <Text style={{ fontSize: 12, color: "#828282" }}>
            Sign up with one of the following options
          </Text>
          {/* Signup Options */}
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
          {/* Signup Inputs */}
          <View>
            <TextInput
              style={styles.inputs}
              placeholder="Email"
              value={email}
              onChangeText={(text) => setEmail(text)}
            />
            <TextInput
              style={styles.inputs}
              value={password}
              onChangeText={(text) => setPassword(text)}
              secureTextEntry={true}
              placeholder="Password"
            />
            <TextInput
              style={styles.inputs}
              value={phone}
              onChangeText={(text) => setPhone(text)}
              placeholder="Phone No"
            />
            <TouchableOpacity
              style={[styles.inputs, { backgroundColor: "#087E8B" }]}
            >
              <Text
                style={{
                  marginTop: 13,
                  paddingLeft: 70,
                  color: "#FCFDFF",
                  fontWeight: "bold",
                }}
              >
                Create an account
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
              <Text>Already have an account?</Text>
              <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                <Text style={{ fontWeight: "bold" }}>Login</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <Footer />
      </KeyboardAvoidingView>
      
    </SafeAreaView>
  );
};

export default RegisterScreen;

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
