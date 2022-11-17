import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { FontAwesome, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { colors } from "../../constants";
import { Product } from "../../graphql/generated/graphql";
import { useDispatch, useSelector } from "react-redux";
import { StateType } from "../../types";
import { addToCart, setProductToDelete, setProductToEdit } from "../../actions";

interface Props {
  item: Product;
}
const FoodCard: React.FC<Props> = ({ item }) => {
  const { user } = useSelector((state: StateType) => state);

  const dispatch = useDispatch();
  return (
    <View
      style={{
        margin: 5,
        backgroundColor: "white",
        padding: 5,
        borderRadius: 10,
      }}
    >
      <Image
        style={{
          width: "100%",
          height: 180,
          borderRadius: 5,
        }}
        source={{
          uri: item?.imageURL,
        }}
      />
      <Text
        style={{
          fontWeight: "900",
          fontSize: 25,
          color: colors.MAIN_COLOR,
          marginTop: 3,
        }}
      >
        {item?.productName}
      </Text>
      <Text
        style={{
          fontWeight: "700",
          fontSize: 16,
          textDecorationColor: "red",
          textDecorationLine: "line-through",
          marginTop: 3,
        }}
      >
        R {item?.previousPrice?.toFixed(2)}
      </Text>
      <Text
        style={{
          fontWeight: "900",
          fontSize: 23,
          marginTop: 3,
        }}
      >
        R {item?.productCurrentPrice.toFixed(2)}
      </Text>
      {user?.role === "ADMIN" ? (
        <View
          style={{
            flexDirection: "row",
            width: "100%",
            justifyContent: "flex-end",
            paddingVertical: 10,
          }}
        >
          <TouchableOpacity
            activeOpacity={0.7}
            style={{
              backgroundColor: colors.COLOR_PINK,
              width: 40,
              height: 40,
              borderRadius: 40,
              justifyContent: "center",
              alignItems: "center",
              marginRight: 15,
            }}
            onPress={() => dispatch(setProductToDelete(item))}
          >
            <Ionicons name="trash-outline" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
            style={{
              backgroundColor: colors.MAIN_COLOR,
              width: 40,
              height: 40,
              borderRadius: 40,
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={() => dispatch(setProductToEdit(item))}
          >
            <MaterialIcons name="create" size={24} color="white" />
          </TouchableOpacity>
        </View>
      ) : (
        <View
          style={{
            flexDirection: "row",
            width: "100%",
            justifyContent: "flex-end",
            paddingVertical: 10,
          }}
        >
          <TouchableOpacity
            activeOpacity={0.7}
            style={{
              backgroundColor: colors.MAIN_COLOR,
              width: 40,
              height: 40,
              borderRadius: 40,
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={() => dispatch(addToCart(item))}
          >
            <FontAwesome name="cart-plus" size={24} color="white" />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default FoodCard;
