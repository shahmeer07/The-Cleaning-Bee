import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, ScrollView, Pressable, Image } from "react-native";

const Services = ({}) => {
  const navigation = useNavigation();
  const services = [
    {
      id: "001",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa-q3ocnXVylUTIRj4TPvB3g7LayaXcjakiAsCa_Y&s",
      name: "Cleaning \n Packages",
    },
    {
      id: "011",
      image:
        "https://png.pngtree.com/png-clipart/20230124/ourmid/pngtree-illustration-of-a-laundry-washing-machine-png-image_6568228.png",

      name: "Laundry \n Packages",
    },
    {
      id: "012",
      image: "https://cdn-icons-png.flaticon.com/128/9753/9753675.png",
      name: "Dry \n Cleaning",
    },
    {
      id: "013",
      image: "https://www.pngarts.com/files/2/Maid-PNG-Image-Background.png",
      name: " \n Maids",
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
              if (service.id === "001") {
                navigation.navigate("CleaningPackages");
              } else if (service.id === "011") {
                navigation.navigate("LaundryPackage");
              } else if (service.id === "012") {
                navigation.navigate("DryCleaning");
              } else if (service.id === "013") {
                navigation.navigate("Maids");
              }
            }}
          >
            <Image
              source={{ uri: service.image }}
              style={{ width: 70, height: 70 }}
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
