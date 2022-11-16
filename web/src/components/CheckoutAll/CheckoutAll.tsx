import React from "react";
import "./CheckoutAll.css";
import CountUp from "react-countup";
import { useDispatch, useSelector } from "react-redux";
import { StateType } from "../../types";
import { emptyCart } from "../../actions";
interface Props {}
const CheckoutAll: React.FC<Props> = () => {
  const cart = useSelector(({ cart }: StateType) => cart);
  const dispatch = useDispatch();
  return (
    <div className="checkout__all">
      <h1>
        <span>CHECKOUT ALL PRODUCTS</span>
        <span></span>
      </h1>

      <h2>
        <span>Total Products</span>
        <span>{cart?.length}</span>
      </h2>
      <h2>
        <span>Total Price</span>
        <span>
          <CountUp
            start={0}
            end={cart.reduce((a, b) => a + b.productCurrentPrice, 0)}
            duration={2.75}
            separator=" "
            decimals={2}
            decimal="."
            prefix="R "
            className="checkout__all__price"
          />
        </span>
      </h2>

      <button
        onClick={() => {
          alert("No checkout functionality");
          dispatch(emptyCart());
        }}
      >
        CHECKOUT
      </button>
    </div>
  );
};

export default CheckoutAll;
