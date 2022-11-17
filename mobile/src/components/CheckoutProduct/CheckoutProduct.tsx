import { View, Text, Image, TouchableOpacity, Alert } from "react-native";
import React from "react";
import { Product } from "../../graphql/generated/graphql";
import { colors } from "../../constants";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../actions";

interface Props {
  item: Product;
}
const CheckoutProduct: React.FC<Props> = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <View
      style={{
        padding: 5,
        borderRadius: 5,
        marginVertical: 5,
        backgroundColor: "white",
      }}
    >
      <View style={{ flexDirection: "row", width: "100%" }}>
        <Image
          source={{ uri: item?.imageURL }}
          style={{ width: 100, height: 80 }}
        />
        <View
          style={{
            flex: 1,
            marginLeft: 10,
          }}
        >
          <Text
            style={{
              fontWeight: "700",
              fontSize: 23,
              color: colors.MAIN_COLOR,
              marginTop: 3,
            }}
          >
            {item.productName}
          </Text>
          <Text
            style={{
              fontWeight: "600",
              fontSize: 16,
              textDecorationColor: "red",
              textDecorationLine: "line-through",
              marginTop: 3,
            }}
          >
            R {item.previousPrice?.toFixed(2) ?? 0}
          </Text>
          <Text
            style={{
              fontWeight: "700",
              fontSize: 20,
              marginTop: 3,
            }}
          >
            R {item.productCurrentPrice.toFixed(2)}
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          width: "100%",
          paddingVertical: 10,
          justifyContent: "space-between",
        }}
      >
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

        <TouchableOpacity
          activeOpacity={0.7}
          style={{
            paddingVertical: 8,
            backgroundColor: colors.MAIN_COLOR,
            borderRadius: 5,
            width: "45%",
            alignItems: "center",
          }}
          onPress={() => {
            Alert.alert(
              "Restaurant",
              `Are you sure you want to remove ${item.productName} from your shopping cart?`,
              [
                {
                  text: "YES",
                  style: "destructive",
                  onPress: () => {
                    dispatch(removeFromCart(item));
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
            REMOVE
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CheckoutProduct;
