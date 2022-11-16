import React from "react";
import { Product } from "../../graphql/generated/graphql";
import "./BasketProduct.css";
import CountUp from "react-countup";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../actions";
interface Props {
  item: Product;
}
const BasketProduct: React.FC<Props> = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <div className="basket__product">
      <img src={item.imageURL} alt={item.productName} />
      <div className="basket__product__right">
        <h1>{item.productName} (x2)</h1>
        <div>
          <CountUp
            start={0}
            end={item.previousPrice ?? 0}
            duration={2.75}
            separator=" "
            decimals={2}
            decimal="."
            prefix="R "
            className="basket__product__price__previous"
          />
        </div>
        <CountUp
          start={0}
          end={item.productCurrentPrice}
          duration={2.75}
          separator=" "
          decimals={2}
          decimal="."
          prefix="R "
          className="basket__product__price"
        />
        <div className="basket__product__controls">
          <button
            onClick={() => {
              alert("No checkout functionality");
              dispatch(removeFromCart(item));
            }}
          >
            CHECKOUT
          </button>
          <button
            onClick={() => {
              dispatch(removeFromCart(item));
            }}
          >
            REMOVE
          </button>
        </div>
      </div>
    </div>
  );
};

export default BasketProduct;
