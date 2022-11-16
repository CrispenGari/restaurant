import React from "react";
import { useSelector } from "react-redux";
import { StateType } from "../../types";
import BasketProduct from "../BasketProduct/BasketProduct";
import CheckoutAll from "../CheckoutAll/CheckoutAll";
import EmptyCart from "../EmptyCart/EmptyCart";
import "./Basket.css";
interface Props {}
const Basket: React.FC<Props> = () => {
  const products = useSelector(({ cart }: StateType) => cart);
  return (
    <div className="basket">
      <div className="basket__header">
        <h1>
          <span>YOUR SHOPPING CART</span>
          <span></span>
        </h1>
        <p>All the products that you need to checkout.</p>
      </div>
      <div className="basket__products">
        {products.map((item) => (
          <BasketProduct item={item} key={item.id} />
        ))}
        <CheckoutAll />
        <EmptyCart />
      </div>
    </div>
  );
};

export default Basket;
