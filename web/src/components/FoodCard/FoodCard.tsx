import React from "react";
import "./FoodCard.css";
import CountUp from "react-countup";
import { BsCartPlusFill } from "react-icons/bs";
import { AiFillEdit } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { useSelector } from "react-redux";
import { StateType } from "../../types";
import { Product } from "../../graphql/generated/graphql";

interface Props {
  item: Product;
}
const FoodCard: React.FC<Props> = ({ item }) => {
  const user = useSelector(({ user }: StateType) => user);
  return (
    <div className="food__card" style={{}}>
      <img src={item.imageURL} alt="item-img" />
      <div className="food__card__info">
        <h1>{item.productName}</h1>
        <CountUp
          start={0}
          end={item.productCurrentPrice}
          duration={2.75}
          separator=" "
          decimals={2}
          decimal="."
          prefix="R "
          className="food__card__price"
        />
      </div>

      {user?.role === "ADMIN" ? (
        <div className="food__card__admin__controls">
          <div className="food__card__button" title="Delete">
            <MdDelete />
          </div>
          <div className="food__card__button" title="Edit">
            <AiFillEdit />
          </div>
        </div>
      ) : (
        <div className="food__card__button" title="Add to Cart">
          <BsCartPlusFill />
        </div>
      )}
    </div>
  );
};

export default FoodCard;
