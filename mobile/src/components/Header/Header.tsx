import {
  View,
  Text,
  StatusBar,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import React from "react";
import { colors } from "../../constants";
import { AntDesign } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { StateType } from "../../types";
import { emptyCart, setUser } from "../../actions";
import { StackHeaderProps } from "@react-navigation/stack";
interface Props {
  props: StackHeaderProps;
}
const Header: React.FC<Props> = ({ props: { navigation } }) => {
  const { cart, user } = useSelector((state: StateType) => state);
  const dispatch = useDispatch();
  return (
    <View
      style={{
        height: 110,
        backgroundColor: colors.MAIN_COLOR,
      }}
    >
      <StatusBar barStyle={"light-content"} />
      <SafeAreaView>
        <View
          style={{
            padding: 10,
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => navigation.navigate("Home")}
          >
            <Image
              source={{
                uri: Image.resolveAssetSource(
                  require("../../../assets/logo.png")
                ).uri,
              }}
              style={{
                width: 40,
                height: 40,
              }}
            />
          </TouchableOpacity>

          {!!!user ? (
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => {
                  navigation.navigate("Login");
                }}
              >
                <Text
                  style={{
                    letterSpacing: 1,
                    color: "white",
                    fontWeight: "600",
                    textDecorationColor: "white",
                    textDecorationStyle: "solid",
                    textDecorationLine: "underline",
                    fontSize: 20,
                    marginRight: 10,
                  }}
                >
                  LOGIN
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => {
                  navigation.navigate("Register");
                }}
              >
                <Text
                  style={{
                    letterSpacing: 1,
                    color: colors.COLOR_PINK,
                    fontWeight: "600",
                    textDecorationColor: colors.COLOR_PINK,
                    textDecorationStyle: "solid",
                    textDecorationLine: "underline",
                    fontSize: 20,
                  }}
                >
                  REGISTER
                </Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              {user.role === "CUSTOMER" ? (
                <TouchableOpacity
                  style={{
                    position: "relative",
                  }}
                  onPress={() => {
                    navigation.navigate("Checkout");
                  }}
                >
                  {cart?.length ? (
                    <View
                      style={{
                        position: "absolute",
                        width: 25,
                        height: 25,
                        backgroundColor: colors.COLOR_PINK,
                        borderRadius: 25,
                        justifyContent: "center",
                        alignItems: "center",
                        zIndex: 10,
                        right: -5,
                        top: -5,
                      }}
                    >
                      <Text
                        style={{
                          color: "white",
                          fontSize: 20,
                        }}
                      >
                        {cart.length}
                      </Text>
                    </View>
                  ) : null}
                  <AntDesign name="shoppingcart" size={40} color="white" />
                </TouchableOpacity>
              ) : (
                <Text
                  style={{
                    letterSpacing: 1,
                    color: "white",
                    fontWeight: "600",
                    fontSize: 20,
                    marginRight: 10,
                  }}
                >
                  ADMIN
                </Text>
              )}
              <TouchableOpacity
                onPress={() => {
                  Alert.alert(
                    "Restaurant",
                    "You can't add items to cart without login to the app.",
                    [
                      {
                        text: "LOGOUT",
                        style: "destructive",
                        onPress: () => {
                          dispatch(setUser(null));
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
                style={{
                  width: 80,
                  backgroundColor: colors.COLOR_PINK,
                  marginLeft: 20,
                  alignItems: "center",
                  paddingVertical: 10,
                  borderRadius: 5,
                  borderWidth: 0,
                }}
              >
                <Text
                  style={{
                    color: "white",
                    fontWeight: "800",
                    letterSpacing: 1,
                    fontSize: 16,
                  }}
                >
                  logout
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Header;
