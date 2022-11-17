import { ScrollView, View, Dimensions } from "react-native";
import React, { useState } from "react";
import { Banner, ContentHeader, FoodCard } from "../../components";
import { Product, useProductsQuery } from "../../graphql/generated/graphql";
import { WaveIndicator } from "react-native-indicators";
import { colors } from "../../constants";
import { AppNavProps } from "../../params";

interface ProductsType {
  chapter: {
    title: string;
    id: number;
    subTitle: string;
  };
  data: Product[];
}
const Home: React.FC<AppNavProps<"Home">> = (navProps) => {
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
    >
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
      ) : (
        <>
          {products.map(({ chapter, data }) => (
            <React.Fragment key={chapter.id.toString()}>
              <ContentHeader
                title={chapter.title}
                subTitle={chapter.subTitle}
              />
              {data.map((item) => (
                <FoodCard
                  key={item.id.toString()}
                  item={item}
                  navProps={navProps}
                />
              ))}
            </React.Fragment>
          ))}
        </>
      )}
    </ScrollView>
  );
};

export default Home;
