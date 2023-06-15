import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, ScrollView, Pressable, Image } from "react-native";

const Services = ({}) => {
  const navigation = useNavigation();
  const services = [
    {
      id: 0,
      image: "https://img.freepik.com/free-vector/cleaner-with-cleaning-products-housekeeping-service_18591-52060.jpg?w=740&t=st=1686859115~exp=1686859715~hmac=fe4bf14da0a22c12c36d1e89d82c51d74c48b0a214ac3fef4129f9373a65261b",
      name: " \n Maids",
    },
    {
      id: 1,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa-q3ocnXVylUTIRj4TPvB3g7LayaXcjakiAsCa_Y&s",
      name: "Cleaning \n Packages",
    },
    {
      id: 2,
      image:
        "https://png.pngtree.com/png-clipart/20230124/ourmid/pngtree-illustration-of-a-laundry-washing-machine-png-image_6568228.png",

      name: "Laundry \n Packages",
    },
    {
      id: 3,
      image: "https://cdn-icons-png.flaticon.com/128/9753/9753675.png",
      name: "Dry \n Cleaning",
    },
    
  ];

  return (
    <View style={{ padding: 10 }}>
      <Text
        style={{
          fontSize: 16,
          fontWeight: "500",
          marginBottom: 7,
          color: "black",
        }}
      >
        Services Available
      </Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {services.map((service, index) => (
          <Pressable
            style={{
              margin: 10,
              backgroundColor: "white",
              padding: 20,
              borderRadius: 7,
            }}
            key={index}
            onPress={() => {
              if (service.id === 0) {
                navigation.navigate("Maids");
              } else if (service.id === 1) {
                navigation.navigate("CleaningPackages");
              } else if (service.id === 2) {
                navigation.navigate("LaundryPackage");
              } else if (service.id === 3) {
                navigation.navigate("DryCleaning");
              }
            }}
          >
            <Image
              source={{ uri: service.image }}
              style={{ width: 80, height: 80 }}
            />
            <Text style={{ textAlign: "center", marginTop: 10 }}>
              {service.name}
            </Text>
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
};

export default Services;
