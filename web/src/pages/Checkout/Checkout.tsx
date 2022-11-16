import React from "react";
import { Header, Basket } from "../../components";
import "./Checkout.css";
interface Props {}
const Checkout: React.FC<Props> = () => {
  return (
    <div className="checkout">
      <Header />
      <Basket />
    </div>
  );
};

export default Checkout;
