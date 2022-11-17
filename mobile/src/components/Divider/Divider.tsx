import { View, Text } from "react-native";
import React from "react";

const Divider: React.FC<{ title: string; size?: "small" | "large" }> = ({
  title,
  size,
}) => {
  return (
    <View
      style={{
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          color: "white",
          fontWeight: size == "small" ? "400" : "700",
          fontSize: size == "small" ? 20 : 24,
          letterSpacing: size == "small" ? 1 : 2,
        }}
      >
        {title}
      </Text>
      <View
        style={{
          flex: 1,
          marginLeft: 10,
          borderBottomColor: "white",
          borderBottomWidth: 2,
        }}
      />
    </View>
  );
};

export default Divider;
