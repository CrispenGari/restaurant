import React, { useEffect } from "react";
import { foods } from "../../food";
import { useAddProductMutation } from "../../graphql/generated/graphql";
import "./Checkout.css";
interface Props {}
const Checkout: React.FC<Props> = () => {
  return (
    <div className="Checkout">
      <h1>Hello from Checkout</h1>
    </div>
  );
};

export default Checkout;
