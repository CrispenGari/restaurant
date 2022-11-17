import { Modal } from "@mui/material";
import React, { useState } from "react";
import {
  Product,
  ProductsDocument,
  useDeleteProductMutation,
} from "../../graphql/generated/graphql";
import Loading from "../Loading/Loading";
import "./DeleteModal.css";
import { IoMdClose } from "react-icons/io";
interface Props {
  open: boolean;
  onClose: () => void;
  product: Product;
}
const DeleteModal: React.FC<Props> = ({ open, onClose, product }) => {
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productPreviousPrice, setProductPreviousPrice] = useState("");
  const [productImageURL, setProductImageURL] = useState("");
  const [error, setError] = useState("");
  const [isOnSpecial, setIsOnSpecial] = useState("ON SPECIAL");

  const [deleteProduct, { loading, data }] = useDeleteProductMutation({
    fetchPolicy: "network-only",
    refetchQueries: [
      { query: ProductsDocument, variables: {}, fetchPolicy: "network-only" },
    ],
  });

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await deleteProduct({
      variables: {
        id: product.id,
      },
    });
  };

  React.useEffect(() => {
    if (product) {
      setProductName(product.productName);
      setError("");
      setProductPrice(product.productCurrentPrice as any);
      setProductImageURL(product.imageURL);
      setProductPreviousPrice(product.previousPrice as any);
      setIsOnSpecial(product.onSpecial ? "ON SPECIAL" : "NOT ON SPECIAL");
    }
  }, [product]);
  React.useEffect(() => {
    if (data?.deleteProduct) {
      onClose();
    }
    if (data?.deleteProduct === false) {
      setError("Invalid form for deleting a product.");
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
          <span>Delete Product</span> <span></span>
        </h1>
        {productImageURL ? <img src={productImageURL} alt="preview" /> : null}
        <input
          type="text"
          placeholder="Product Name"
          disabled
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />
        <input
          type="number"
          step={".01"}
          placeholder="Product Price"
          disabled
          value={productPrice}
          onChange={(e) => setProductPrice(e.target.value)}
        />
        <input
          type="number"
          step={".01"}
          placeholder="Previous Price"
          value={productPreviousPrice}
          disabled
          onChange={(e) => setProductPreviousPrice(e.target.value)}
        />
        <input
          type="url"
          placeholder="Product Image URL"
          value={productImageURL}
          disabled
          onChange={(e) => setProductImageURL(e.target.value)}
        />
        <select
          value={isOnSpecial}
          onChange={(e) => setIsOnSpecial(e.target.value)}
          disabled
        >
          <option value="NOT ON SPECIAL">NOT ON SPECIAL</option>
          <option value="ON SPECIAL">ON SPECIAL</option>
        </select>
        <p>{error}</p>
        <h1>
          <span>Controls</span> <span></span>
        </h1>
        <div className="add__product__modal__contrls">
          <button type="submit">DELETE PRODUCT</button>
        </div>
      </form>
    </Modal>
  );
};

export default DeleteModal;
