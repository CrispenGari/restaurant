import React from "react";

import "./EmptyCart.css";
interface Props {}
const EmptyCart: React.FC<Props> = () => {
  return (
    <div className="empty__cart">
      <h1>
        <span>EMPTY YOUR CART</span>
        <span></span>
      </h1>
      <button>EMPTY CART</button>
    </div>
  );
};

export default EmptyCart;
