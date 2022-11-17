import React from "react";
import { useSelector } from "react-redux";
import { StateType } from "../../types";

import "./EmptyCart.css";
interface Props {}
const EmptyCart: React.FC<Props> = () => {
  const cart = useSelector(({ cart }: StateType) => cart);
  return (
    <div className="empty__cart">
      <h1>
        <span>EMPTY YOUR CART</span>
        <span></span>
      </h1>
      <h2>
        <span>ITEMS</span>
        <span>{cart?.length}</span>
      </h2>
      <button>EMPTY CART</button>
    </div>
  );
};

export default EmptyCart;
