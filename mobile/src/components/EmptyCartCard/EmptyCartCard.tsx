import { View, Text, Alert, TouchableOpacity } from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { colors } from "../../constants";
import { StateType } from "../../types";
import Divider from "../Divider/Divider";
import { emptyCart } from "../../actions";

const EmptyCartCard = () => {
  const cart = useSelector(({ cart }: StateType) => cart);
  const dispatch = useDispatch();
  return (
    <View
      style={{
        backgroundColor: colors.MAIN_COLOR,
        padding: 10,
        borderRadius: 5,
        margin: 5,
      }}
    >
      <Divider size="small" title="EMPTY YOUR CART" />
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
          ITEMS
        </Text>
        <Text style={{ color: "white", fontSize: 20, fontWeight: "500" }}>
          {cart?.length}
        </Text>
      </View>
      <TouchableOpacity
        activeOpacity={0.7}
        disabled={cart?.length === 0}
        style={{
          paddingVertical: 8,
          backgroundColor: colors.COLOR_PINK,
          borderRadius: 5,
          width: "45%",
          alignItems: "center",
          marginRight: 10,
        }}
        onPress={() => {
          if (cart?.length === 0) {
            return;
          }
          Alert.alert(
            "Restaurant",
            `Are you sure you want to empty your CART with ${cart?.length} items?`,
            [
              {
                text: "YES",
                style: "destructive",
                onPress: () => {
                  dispatch(emptyCart());
                },
              },
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
          EMPTY CART
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default EmptyCartCard;
