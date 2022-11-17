import {
  View,
  Keyboard,
  SafeAreaView,
  ScrollView,
  StatusBar,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Image,
  Text,
  Alert,
} from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { AppNavProps } from "../../params";
import { Submiting, Divider } from "../../components";
import { SelectList } from "react-native-dropdown-select-list";
import { colors, HEIGHT, specialOptions } from "../../constants";
import {
  useDeleteProductMutation,
  ProductsDocument,
} from "../../graphql/generated/graphql";

const DeleteProduct: React.FC<AppNavProps<"DeleteProduct">> = ({
  navigation,
  route: {
    params: { product },
  },
}) => {
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productPreviousPrice, setProductPreviousPrice] = useState("");
  const [productImageURL, setProductImageURL] = useState("");
  const [error, setError] = useState("");
  const [isOnSpecial, setIsOnSpecial] = React.useState("ON SPECIAL");
  const [deleteProduct, { loading, data }] = useDeleteProductMutation({
    fetchPolicy: "network-only",
    refetchQueries: [
      { query: ProductsDocument, variables: {}, fetchPolicy: "network-only" },
    ],
  });

  const handleDelete = () => {
    Alert.alert(
      "Restaurant",
      `Are you sure you want to delete ${product.productName} from the market?`,
      [
        {
          text: "YES",
          style: "destructive",
          onPress: async () => {
            await deleteProduct({
              variables: {
                id: product.id,
              },
            });
          },
        },
        {
          text: "NO",
          style: "destructive",
          onPress: () => {
            navigation.goBack();
          },
        },
        {
          text: "CANCEL",
          style: "destructive",
          onPress: async () => {},
        },
      ],
      {
        cancelable: false,
      }
    );
  };

  React.useEffect(() => {
    if (data?.deleteProduct) {
      navigation.goBack();
    }
    if (data?.deleteProduct === false) {
      setError("Invalid form for deleting a product.");
    } else {
      setError("");
    }
  }, [data]);
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  React.useEffect(() => {
    if (product) {
      setProductName(product.productName);
      setProductPrice(product.productCurrentPrice as any);
      setProductImageURL(product.imageURL);
      setProductPreviousPrice(product.previousPrice as any);
      setIsOnSpecial(product.onSpecial ? "ON SPECIAL" : "NOT ON SPECIAL");
    }
  }, [product]);
  return (
    <View style={{ backgroundColor: colors.MAIN_COLOR, flex: 1 }}>
      <StatusBar barStyle={"light-content"} />
      {loading ? <Submiting /> : null}
      <SafeAreaView style={{ flex: 1 }}>
        <TouchableWithoutFeedback
          style={{
            height: HEIGHT,
          }}
          accessible={false}
          onPress={Keyboard.dismiss}
        >
          <ScrollView
            style={{
              flex: 1,
              padding: 10,
              paddingVertical: 30,
            }}
            bounces={false}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
          >
            <Divider title="Delete Product" size="small" />
            {productImageURL ? (
              <Image
                source={{
                  uri: productImageURL,
                }}
                style={{
                  width: "100%",
                  height: 200,
                  borderRadius: 5,
                  marginVertical: 10,
                }}
              />
            ) : null}
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
              value={productPrice.toString()}
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
              value={productPreviousPrice.toString()}
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
              defaultOption={
                specialOptions.find((p) => p.value === isOnSpecial) as any
              }
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
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                paddingVertical: 30,
              }}
            >
              <TouchableOpacity
                activeOpacity={0.7}
                style={{
                  marginVertical: 10,
                  backgroundColor: colors.MAIN_LIGHT,
                  padding: 10,
                  borderRadius: 5,
                  width: "45%",
                  alignItems: "center",
                  marginRight: 10,
                }}
                onPress={() => navigation.goBack()}
              >
                <Text
                  style={{ color: "white", fontWeight: "700", fontSize: 20 }}
                >
                  CANCEL
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                activeOpacity={0.7}
                style={{
                  marginVertical: 10,
                  backgroundColor: colors.COLOR_PINK,
                  padding: 10,
                  borderRadius: 5,
                  width: "50%",
                  alignItems: "center",
                }}
                onPress={handleDelete}
              >
                <Text
                  style={{ color: "white", fontWeight: "700", fontSize: 20 }}
                >
                  DELETE PRODUCT
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{ height: 50 }} />
          </ScrollView>
        </TouchableWithoutFeedback>
      </SafeAreaView>
    </View>
  );
};

export default DeleteProduct;
