import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SliderBox } from "react-native-image-slider-box";
const Carousel = () => {
  const images = [
    require("../assets/The-Cleaning-Bee-Carousel.png"),
    "https://media.istockphoto.com/id/1247884083/vector/laundry-service-room-vector-illustration-washing-and-drying-machines-with-cleansers-on-shelf.jpg?s=612x612&w=0&k=20&c=myaNEKlqX7R--bzWGDoMI7PhdxG_zdQTKYEBlymJQGk=",
  ];
  return (
    <View>
      <SliderBox
        images={images}
        autoPlay
        circleLoop
        dotColor={"#13274F"}
        inactiveDotColor="#90A4AE"
        ImageComponentStyle={{
          borderRadius: 6,
          width: "95%",
        }}
      />
    </View>
  );
};

export default Carousel;

const styles = StyleSheet.create({});