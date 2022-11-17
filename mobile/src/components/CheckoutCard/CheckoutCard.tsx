import { View, Text, TouchableOpacity, Alert } from "react-native";
import React from "react";
import { colors } from "../../constants";
import Divider from "../Divider/Divider";
import { useSelector } from "react-redux";
import { StateType } from "../../types";

const CheckoutCard = () => {
  const cart = useSelector(({ cart }: StateType) => cart);
  return (
    <View
      style={{
        backgroundColor: colors.MAIN_COLOR,
        padding: 10,
        borderRadius: 5,
        margin: 5,
      }}
    >
      <Divider size="small" title="CHECKOUT ALL PRODUCTS" />
      <View
        style={{
          flexDirection: "row",
          width: "100%",
          justifyContent: "space-between",
          marginVertical: 15,
        }}
      >
        <Text
          style={{
            color: "white",
            fontSize: 20,
            fontWeight: "500",
          }}
        >
          TOTAL PRODUCTS
        </Text>
        <Text style={{ color: "white", fontSize: 20, fontWeight: "500" }}>
          {cart?.length}
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          width: "100%",
          justifyContent: "space-between",
          marginVertical: 5,
          marginBottom: 30,
        }}
      >
        <Text
          style={{
            color: "white",
            fontSize: 20,
            fontWeight: "500",
          }}
        >
          TOTAL PRICE
        </Text>
        <Text style={{ color: "white", fontSize: 20, fontWeight: "500" }}>
          {cart?.reduce((a, b) => a + b.productCurrentPrice, 0).toFixed(2)}
        </Text>
      </View>
      <TouchableOpacity
        activeOpacity={0.7}
        style={{
          paddingVertical: 8,
          backgroundColor: colors.COLOR_PINK,
          borderRadius: 5,
          width: "45%",
          alignItems: "center",
          marginRight: 10,
        }}
        onPress={() => {
          Alert.alert(
            "Restaurant",
            `Checkout functionality not implemented in the prototype. - crispengari`,
            [
              {
                text: "CANCEL",
                style: "destructive",
                onPress: () => {
                  return;
                },
              },
            ],
            { cancelable: false }
          );
        }}
      >
        <Text style={{ color: "white", fontWeight: "700", fontSize: 20 }}>
          CHECKOUT
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CheckoutCard;
