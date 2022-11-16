import { Modal } from "@mui/material";
import React, { useState } from "react";
import {
  ProductsDocument,
  useAddProductMutation,
} from "../../graphql/generated/graphql";
import Loading from "../Loading/Loading";
import "./AddProductModal.css";
import { IoMdClose } from "react-icons/io";
interface Props {
  open: boolean;
  onClose: () => void;
}
const AddProductModal: React.FC<Props> = ({ open, onClose }) => {
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productPreviousPrice, setProductPreviousPrice] = useState("");
  const [productImageURL, setProductImageURL] = useState("");
  const [error, setError] = useState("");
  const [isOnSpecial, setIsOnSpecial] = useState("ON SPECIAL");

  const [add, { loading, data }] = useAddProductMutation({
    fetchPolicy: "network-only",
    refetchQueries: [
      { query: ProductsDocument, variables: {}, fetchPolicy: "network-only" },
    ],
  });

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await add({
      variables: {
        input: {
          imageURL: productImageURL,
          previousPrice: Number(productPreviousPrice),
          productCurrentPrice: Number(productPrice),
          productName,
          onSpecial: isOnSpecial === "ON SPECIAL",
        },
      },
    });
  };

  const resetState = () => {
    setProductName("");
    setError("");
    setProductPrice("");
    setProductImageURL("");
    setProductPreviousPrice("");
    setIsOnSpecial("ON SPECIAL");
  };
  React.useEffect(() => {
    if (data?.addProduct) {
      onClose();
    }
    if (data?.addProduct === false) {
      setError("Invalid form for adding a product.");
    } else {
      setError("");
    }
  }, [data, onClose]);

  return (
    <Modal open={open} onClose={onClose} className="add__product__modal">
      <form className="add__product__modal__container" onSubmit={onSubmit}>
        <div className="edit__product__close__btn" onClick={onClose}>
          <IoMdClose />
        </div>
        {loading ? <Loading /> : null}
        <h1>
          <span>Add new Product</span> <span></span>
        </h1>
        {productImageURL ? <img src={productImageURL} alt="preview" /> : null}
        <input
          type="text"
          placeholder="Product Name"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />
        <input
          type="number"
          step={".01"}
          placeholder="Product Price"
          value={productPrice}
          onChange={(e) => setProductPrice(e.target.value)}
        />
        <input
          type="number"
          step={".01"}
          placeholder="Previous Price"
          value={productPreviousPrice}
          onChange={(e) => setProductPreviousPrice(e.target.value)}
        />
        <input
          type="url"
          placeholder="Product Image URL"
          value={productImageURL}
          onChange={(e) => setProductImageURL(e.target.value)}
        />
        <select
          value={isOnSpecial}
          onChange={(e) => setIsOnSpecial(e.target.value)}
        >
          <option value="NOT ON SPECIAL">NOT ON SPECIAL</option>
          <option value="ON SPECIAL">ON SPECIAL</option>
        </select>
        <p>{error}</p>
        <h1>
          <span>Controls</span> <span></span>
        </h1>
        <div className="add__product__modal__contrls">
          <button type="submit">ADD PRODUCT</button>
          <button type="button" onClick={resetState}>
            CLEAR FIELDS
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default AddProductModal;
