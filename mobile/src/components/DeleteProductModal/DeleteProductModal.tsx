import { View, Text, Image, TextInput } from "react-native";
import React, { useState } from "react";
import { colors, HEIGHT, specialOptions, WIDTH } from "../../constants";
import Divider from "../Divider/Divider";
import { TouchableOpacity } from "react-native-gesture-handler";
import { AntDesign } from "@expo/vector-icons";
import { SelectList } from "react-native-dropdown-select-list";
import {
  useDeleteProductMutation,
  ProductsDocument,
  Product,
} from "../../graphql/generated/graphql";
import Submiting from "../Submiting/Submiting";
import { useDispatch } from "react-redux";
import { setProductToDelete } from "../../actions";

const DeleteProductModal: React.FC<{
  item: Product;
}> = ({ item }) => {
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productPreviousPrice, setProductPreviousPrice] = useState("");
  const [productImageURL, setProductImageURL] = useState("");
  const [error, setError] = useState("");
  const [isOnSpecial, setIsOnSpecial] = React.useState("ON SPECIAL");
  const dispatch = useDispatch();

  const [deleteProduct, { loading, data }] = useDeleteProductMutation({
    fetchPolicy: "network-only",
    refetchQueries: [
      { query: ProductsDocument, variables: {}, fetchPolicy: "network-only" },
    ],
  });

  React.useEffect(() => {
    if (data?.deleteProduct) {
      dispatch(setProductToDelete(null));
    }
    if (data?.deleteProduct === false) {
      setError("Invalid form for deleting a product.");
    } else {
      setError("");
    }
  }, [data]);

  console.log({ productPrice });

  React.useEffect(() => {
    if (item) {
      setProductName(item.productName);
      setError("");
      setProductPrice(item.productCurrentPrice as any);
      setProductImageURL(item.imageURL);
      setProductPreviousPrice(item.previousPrice as any);
      setIsOnSpecial(item.onSpecial ? "ON SPECIAL" : "NOT ON SPECIAL");
    }
  }, [item]);
  return (
    <View
      style={{
        zIndex: 9,
        position: "absolute",
        width: WIDTH,
        height: HEIGHT,
        backgroundColor: "rgba(0, 0, 0, .4)",
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
      }}
    >
      {loading ? <Submiting /> : null}
      <View
        style={{
          backgroundColor: colors.MAIN_COLOR,
          borderRadius: 5,
          width: "100%",
          padding: 10,
          paddingTop: 40,
          position: "relative",
        }}
      >
        <TouchableOpacity
          activeOpacity={0.7}
          style={{
            marginVertical: 10,
            flexDirection: "row",
            alignSelf: "flex-end",
            backgroundColor: colors.COLOR_PINK,
            width: 30,
            height: 30,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 30,
            position: "absolute",
            top: -40,
            right: 10,
          }}
          onPress={() => dispatch(setProductToDelete(null))}
        >
          <AntDesign name="close" size={24} color="white" />
        </TouchableOpacity>
        <Divider title="Delete Product" size="small" />
        <Image
          source={{
            uri: productImageURL,
          }}
          style={{
            width: "100%",
            height: 100,
            borderRadius: 5,
            marginVertical: 10,
          }}
        />
        <TextInput
          placeholder="product name"
          keyboardType="default"
          value={productName}
          editable={false}
          onChangeText={(text) => setProductName(text)}
          style={{
            fontSize: 20,
            backgroundColor: "white",
            width: "100%",
            paddingVertical: 10,
            paddingHorizontal: 20,
            borderRadius: 999,
            marginVertical: 5,
          }}
        />
        <TextInput
          placeholder="product current price"
          keyboardType="decimal-pad"
          value={productPrice}
          editable={false}
          onChangeText={(text) => setProductPrice(text)}
          style={{
            fontSize: 20,
            backgroundColor: "white",
            width: "100%",
            paddingVertical: 10,
            paddingHorizontal: 20,
            borderRadius: 999,
            marginVertical: 5,
          }}
        />
        <TextInput
          placeholder="product previous price"
          keyboardType="decimal-pad"
          editable={false}
          value={productPreviousPrice}
          onChangeText={(text) => setProductPreviousPrice(text)}
          style={{
            fontSize: 20,
            backgroundColor: "white",
            width: "100%",
            paddingVertical: 10,
            paddingHorizontal: 20,
            borderRadius: 999,
            marginVertical: 5,
          }}
        />
        <TextInput
          editable={false}
          placeholder="product image url"
          keyboardType="decimal-pad"
          value={productImageURL}
          onChangeText={(text) => setProductImageURL(text)}
          style={{
            fontSize: 20,
            backgroundColor: "white",
            width: "100%",
            paddingVertical: 10,
            paddingHorizontal: 20,
            borderRadius: 999,
            marginVertical: 5,
          }}
        />
        <SelectList
          defaultOption={specialOptions[0]}
          setSelected={(val: any) => setIsOnSpecial(val)}
          disabledItemStyles={{
            borderBottomColor: "gray",
            borderBottomWidth: 1,
          }}
          data={specialOptions}
          save="value"
          boxStyles={{
            backgroundColor: "white",
            width: "100%",
            marginVertical: 10,
          }}
          dropdownStyles={{
            backgroundColor: "white",
            height: 90,
          }}
          searchPlaceholder="search role"
        />
        <Text style={{ color: "red", fontSize: 16, marginVertical: 5 }}>
          {error}
        </Text>
        <Divider title="Controls" size="small" />
        <TouchableOpacity
          activeOpacity={0.7}
          style={{
            marginVertical: 10,
            flexDirection: "row",
            alignSelf: "flex-end",
            backgroundColor: colors.COLOR_PINK,
            padding: 10,
            borderRadius: 5,
          }}
        >
          <Text style={{ color: "white", fontWeight: "700", fontSize: 20 }}>
            DELETE PRODUCT
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DeleteProductModal;
