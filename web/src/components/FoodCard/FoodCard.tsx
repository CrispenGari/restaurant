import React from "react";
import "./FoodCard.css";
import CountUp from "react-countup";
import { BsCartPlusFill } from "react-icons/bs";
import { AiFillEdit } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { StateType } from "../../types";
import { Product } from "../../graphql/generated/graphql";
import { useNavigate } from "react-router-dom";
import EditProductModal from "../EditProductModal/EditProductModal";
import DeleteModal from "../DeleteModal/DeleteModa";
import { addToCart } from "../../actions";

interface Props {
  item: Product;
}
const FoodCard: React.FC<Props> = ({ item }) => {
  const user = useSelector(({ user }: StateType) => user);
  const navigate = useNavigate();
  const [openEditProductModal, setOpenEditProductModal] = React.useState(false);
  const handleOpenEditProductModal = () => setOpenEditProductModal(true);
  const handleCloseEditProductModal = () => setOpenEditProductModal(false);
  const [openDeleteProductModal, setOpenDeleteProductModal] =
    React.useState(false);
  const handleOpenDeleteProductModal = () => setOpenDeleteProductModal(true);
  const handleCloseDeleteProductModal = () => setOpenDeleteProductModal(false);
  const dispatch = useDispatch();

  const addToBasket = () => {
    if (!!!user) {
      navigate("/login");
      return;
    }
    dispatch(addToCart(item));
  };
  return (
    <div className="food__card" style={{}}>
      <EditProductModal
        open={openEditProductModal}
        onClose={handleCloseEditProductModal}
        product={item}
      />
      <DeleteModal
        open={openDeleteProductModal}
        onClose={handleCloseDeleteProductModal}
        product={item}
      />

      <img src={item.imageURL} alt="item-img" />
      <div className="food__card__info">
        <h1>{item.productName}</h1>
        <div>
          <CountUp
            start={0}
            end={item.previousPrice ?? 0}
            duration={2.75}
            separator=" "
            decimals={2}
            decimal="."
            prefix="R "
            className="food__card__price__previous"
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
          className="food__card__price"
        />
      </div>

      {user?.role === "ADMIN" ? (
        <div className="food__card__admin__controls">
          <div
            className="food__card__button"
            title="Delete"
            onClick={handleOpenDeleteProductModal}
          >
            <MdDelete />
          </div>
          <div
            className="food__card__button"
            title="Edit"
            onClick={handleOpenEditProductModal}
          >
            <AiFillEdit />
          </div>
        </div>
      ) : (
        <div
          className="food__card__button"
          title="Add to Cart"
          onClick={addToBasket}
        >
          <BsCartPlusFill />
        </div>
      )}
    </div>
  );
};

export default FoodCard;
