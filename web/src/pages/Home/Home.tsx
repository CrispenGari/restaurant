import React, { useState } from "react";
import { Banner, Footer, Header, Main } from "../../components";
import "./Home.css";
import { IoAddOutline } from "react-icons/io5";
import AddProductModal from "../../components/AddProductModal/AddProductModal";
import { useSelector } from "react-redux";
import { StateType } from "../../types";
interface Props {}
const Home: React.FC<Props> = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const user = useSelector(({ user }: StateType) => user);
  return (
    <div className="home">
      <Header />
      <Banner />
      <Main />
      <AddProductModal open={open} onClose={handleClose} />
      {user?.role === "ADMIN" ? (
        <div className="home__add__product__btn" onClick={handleOpen}>
          <IoAddOutline />
        </div>
      ) : null}
      <Footer />
    </div>
  );
};

export default Home;
