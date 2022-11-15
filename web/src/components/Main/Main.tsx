import React from "react";
import { useProductsQuery } from "../../graphql/generated/graphql";

import FoodCard from "../FoodCard/FoodCard";
import "./Main.css";
interface Props {}
const Main: React.FC<Props> = () => {
  const { data } = useProductsQuery({ fetchPolicy: "network-only" });
  return (
    <div className="main">
      <div className="main__header">
        <h1>
          <span>Specials</span>
          <span></span>
        </h1>
        <p>Our special items for today.</p>
      </div>
      <div className="main__products">
        {data?.products
          .filter((p) => p.onSpecial)
          .map((food) => (
            <FoodCard item={food} key={food.id} />
          ))}
      </div>

      <div className="main__header">
        <h1>
          <span>All dishes</span>
          <span></span>
        </h1>
        <p>Just get a good meal, by selecting your favorite dish.</p>
      </div>
      <div className="main__products">
        {data?.products
          .filter((p) => !p.onSpecial)
          .map((food) => (
            <FoodCard item={food} key={food.id} />
          ))}
      </div>
    </div>
  );
};

export default Main;
