import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Alert,
  TouchableOpacity,
  Image,
  ImageBackground,
  TextInput,
  ScrollView,
} from "react-native";
import { React, useState } from "react";
import { styles } from "./Login_Signup_Style.js";

export default function Login({ navigation }) {
  const [email, setEmail] = useState("Email");
  const [password, setPassword] = useState("Password");

  return (
    <View style={styles.container}>
      <Text style={styles.head}>Login</Text>
      <Text style={{ fontSize: 12, color: "#828282" }}>
        Login with one of the following options
      </Text>
      {/* Login Options */}
      <View style={styles.buttons}>
        <TouchableOpacity style={styles.button}>
          <Image
            source={require("../images/icon-google.png")}
            style={styles.icon}
          ></Image>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Image
            source={require("../images/icon-twitter.png")}
            style={styles.icon}
          ></Image>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Image
            source={require("../images/icon-apple.png")}
            style={styles.icon}
          ></Image>
        </TouchableOpacity>
      </View>
      {/* Login Inputs */}
      <View>
        <TextInput style={styles.inputs} value={email} />
        <TextInput style={styles.inputs} value={password} />
        <TouchableOpacity
          style={[styles.inputs, { backgroundColor: "#454B53" }]}
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
          <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
            <Text style={{ fontWeight: "bold" }}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
