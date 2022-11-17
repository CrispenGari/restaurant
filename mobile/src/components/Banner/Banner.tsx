import { Text, ImageBackground, Dimensions } from "react-native";
import React from "react";

const Banner = () => {
  return (
    <ImageBackground
      style={{
        width: "100%",
        height: Dimensions.get("screen").height * 0.45,
        justifyContent: "center",
        alignItems: "center",
      }}
      source={{
        uri: "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      }}
    >
      <Text
        style={{
          color: "white",
          fontWeight: "900",
          fontSize: 30,
          letterSpacing: 1,
          textAlign: "center",
          marginHorizontal: 10,
        }}
      >
        Welcome to our Restaurant.
      </Text>
    </ImageBackground>
  );
};

export default Banner;
