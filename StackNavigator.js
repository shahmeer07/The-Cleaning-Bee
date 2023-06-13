import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Homescreen from "./screens/Homescreen";
import ProfileScreen from "./screens/ProfileScreen";
import PickUpScreen from "./screens/PickUpScreen";
import CartScreen from "./screens/CartScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import OrderScreen from "./screens/OrderScreen";
import SplashScreen from "./screens/SplashScreen";
import Services from "./components/Services";
import DryCleaningScreen from "./screens/DryCleaningScreen";
import CleaningSuppliesScreen from "./screens/MaidsScreen";
import CleaningPackageScreen from "./screens/CleaningPackageScreen";
import LaundryPakageScreen from "./screens/LaundryPackageScreen";
import MaidsScreen from "./screens/MaidsScreen";
import FAQsScreen from "./screens/FAQsScreen";
import PastOrderScreen from "./screens/PastOrderScreen";
import StripeApp from './screens/StripeApp'
const StackNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={Homescreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="FAQs"
          component={FAQsScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PastOrders"
          component={PastOrderScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Services"
          component={Services}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CleaningPackages"
          component={CleaningPackageScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="LaundryPackage"
          component={LaundryPakageScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="DryCleaning"
          component={DryCleaningScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Maids"
          component={MaidsScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PickUp"
          component={PickUpScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Cart"
          component={CartScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{ headerShown: false }}
        />
        {/* <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{ headerShown: false }}
        /> */}
        <Stack.Screen
          name="Order"
          component={OrderScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="StripeApp"
          component={StripeApp}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;

const styles = StyleSheet.create({});
