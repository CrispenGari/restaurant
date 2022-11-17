import { ScrollView, View, Dimensions } from "react-native";
import React, { useState } from "react";
import {
  Banner,
  ContentHeader,
  DeleteProductModal,
  FoodCard,
} from "../../components";
import { Product, useProductsQuery } from "../../graphql/generated/graphql";
import { WaveIndicator } from "react-native-indicators";
import { colors } from "../../constants";
import { useSelector } from "react-redux";
import { StateType } from "../../types";

interface ProductsType {
  chapter: {
    title: string;
    id: number;
    subTitle: string;
  };
  data: Product[];
}
const Home = () => {
  const { productToDelete } = useSelector((state: StateType) => state);

  const [products, setProducts] = useState<Array<ProductsType>>([]);
  const { loading, data } = useProductsQuery({ fetchPolicy: "network-only" });
  React.useEffect(() => {
    let mounted: boolean = true;
    if (mounted) {
      setProducts([
        {
          chapter: {
            subTitle: "Our specials for today.",
            title: "SPECIALS",
            id: 0,
          },
          data: data?.products?.filter((p: Product) => p.onSpecial) ?? [],
        },

        {
          chapter: {
            id: 1,
            subTitle: "Just get a good meal, by selecting your favorite dish.",
            title: "ALL DISHES",
          },
          data: data?.products?.filter((p: Product) => !p.onSpecial) ?? [],
        },
      ]);
    }
    return () => {
      mounted = false;
    };
  }, [data]);
  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: "#f5f5f5" }}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      bounces={false}
      contentContainerStyle={{ paddingBottom: 100 }}
      // scrollEnabled={!!!productToDelete}
    >
      {productToDelete ? <DeleteProductModal item={productToDelete} /> : null}
      <Banner />
      {loading ? (
        <View
          style={{
            backgroundColor: "white",
            height: Dimensions.get("screen").height * 0.45,
          }}
        >
          <WaveIndicator color={colors.MAIN_COLOR} size={35} />
        </View>
      ) : null}
      {products.map(({ chapter, data }) => (
        <React.Fragment key={chapter.id.toString()}>
          <ContentHeader title={chapter.title} subTitle={chapter.subTitle} />
          {data.map((item) => (
            <FoodCard key={item.id.toString()} item={item} />
          ))}
        </React.Fragment>
      ))}
    </ScrollView>
  );
};

export default Home;
