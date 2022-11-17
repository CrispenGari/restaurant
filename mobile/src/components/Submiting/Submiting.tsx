import { View } from "react-native";
import React from "react";
import { WaveIndicator } from "react-native-indicators";
import { colors } from "../../constants";

const Submiting = () => {
  return (
    <View
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 10,
        backgroundColor: "rgba(0,0, 0, .4)",
      }}
    >
      <WaveIndicator color={colors.MAIN_COLOR} size={35} />
    </View>
  );
};

export default Submiting;
