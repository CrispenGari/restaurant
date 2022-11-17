import { View } from "react-native";
import React from "react";
import { WaveIndicator } from "react-native-indicators";
import { colors } from "../../constants";
const Loading = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f5f5f5",
      }}
    >
      <WaveIndicator color={colors.MAIN_COLOR} size={50} />
    </View>
  );
};

export default Loading;
