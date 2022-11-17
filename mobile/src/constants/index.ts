import { Dimensions } from "react-native";

export const SET_USER: string = "SET_USER";
export const ADD_TO_CART: string = "ADD_TO_CART";
export const EMPTY_CART: string = "EMPTY_CART";
export const REMOVE_FROM_CART: string = "REMOVE_FROM_CART";

export const colors = {
  MAIN_COLOR: "#173728",
  MAIN_LIGHT: "#40785c",
  COLOR_PINK: "#dd4e54",
  COLOR_PINK_LIGHT: "#b96276",
};
export const fonts = {
  Sono: "Sono",
};

export const __graphQLURI__: string =
  "https://04e3-197-98-127-119.ngrok.io/graphql";

export const { height: HEIGHT, width: WIDTH } = Dimensions.get("screen");

export const roles = [
  { key: "0", value: "CUSTOMER" },
  { key: "1", value: "ADMIN" },
];

export const specialOptions = [
  { key: "0", value: "ON SPECIAL" },
  { key: "1", value: "NOT ON SPECIAL" },
];
