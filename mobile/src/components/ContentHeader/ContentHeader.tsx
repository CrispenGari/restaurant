import { View, Text } from "react-native";
import React from "react";
import { colors } from "../../constants";

interface Props {
  title: string;
  subTitle: string;
}
const ContentHeader: React.FC<Props> = ({ title, subTitle }) => {
  return (
    <View
      style={{
        borderBottomColor: colors.COLOR_PINK,
        borderBottomWidth: 1.5,
        padding: 10,
        backgroundColor: "white",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontWeight: "900",
            fontSize: 25,
            color: colors.MAIN_COLOR,
          }}
        >
          {title}
        </Text>
        <View
          style={{
            flex: 1,
            borderBottomColor: colors.MAIN_COLOR,
            borderBottomWidth: 1.5,
            marginLeft: 10,
          }}
        />
      </View>
      <Text
        style={{
          fontWeight: "500",
          fontSize: 16,
          marginTop: 3,
        }}
      >
        {subTitle}
      </Text>
    </View>
  );
};

export default ContentHeader;
