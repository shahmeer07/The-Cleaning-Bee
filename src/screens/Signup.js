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
import { DARK_GRAY } from "../constants/constants";
import { React, useState } from "react";
import { styles } from "./Login_Signup_Style.js";

export default function Signup({ navigation }) {
  const [name, setName] = useState("Name");
  const [email, setEmail] = useState("Email");
  const [password, setPassword] = useState("Password");

  return (
    <View style={styles.container}>
      <Text style={styles.head}>Sign up</Text>
      <Text style={{ fontSize: 12, color: "#828282" }}>
        Sign up with one of the following options
      </Text>
      {/* Signup Options */}
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
      {/* Signup Inputs */}
      <View>
        <TextInput style={styles.inputs} value={name} />
        <TextInput style={styles.inputs} value={email} />
        <TextInput style={styles.inputs} value={password} />
        <TouchableOpacity
          style={[styles.inputs, { backgroundColor: "#454B53" }]}
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
  );
}
