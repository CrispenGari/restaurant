import { View } from "react-native";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import {
  CheckoutCard,
  CheckoutProduct,
  ContentHeader,
  EmptyCartCard,
} from "../../components";
import { useSelector } from "react-redux";
import { StateType } from "../../types";

const Checkout = () => {
  const cart = useSelector(({ cart }: StateType) => cart);
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <ContentHeader
        subTitle="All the products that you need to checkout."
        title="YOUR SHOPPING CART"
      />
      <ScrollView
        style={{ flex: 1, backgroundColor: "#f5f5f5", paddingTop: 10 }}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        bounces={false}
      >
        {cart?.map((item) => (
          <CheckoutProduct key={item.id} item={item} />
        ))}
        <CheckoutCard />
        <EmptyCartCard />
        <View style={{ height: 100 }} />
      </ScrollView>
    </View>
  );
};

export default Checkout;
