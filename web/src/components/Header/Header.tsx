import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";
import { useDispatch, useSelector } from "react-redux";
import { StateType } from "../../types";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Badge } from "@mui/material";
import { emptyCart, setUser } from "../../actions";
interface Props {}
const Header: React.FC<Props> = () => {
  const user = useSelector(({ user }: StateType) => user);
  const cart = useSelector(({ cart }: StateType) => cart);
  const dispatch = useDispatch();

  const navigate = useNavigate();
  return (
    <div className="header">
      <div
        className="header__left"
        onClick={() => {
          navigate("/", { replace: true });
        }}
      >
        <img src="/logo.png" alt="logo" />
      </div>
      <div className="header__right">
        {user ? (
          <>
            {user.role === "ADMIN" ? (
              <h1>ADMIN</h1>
            ) : (
              <Badge
                badgeContent={cart?.length}
                color="primary"
                className="header__right__cart__badge"
                onClick={() => {
                  navigate("/checkout", { replace: false });
                }}
              >
                <AiOutlineShoppingCart className="header__right__cart" />
              </Badge>
            )}
            <button
              onClick={() => {
                dispatch(setUser(null));
                dispatch(emptyCart());
              }}
            >
              LOGOUT
            </button>
          </>
        ) : (
          <>
            <Link to={"/login"}>Login</Link>
            <Link to={"/register"}>Register</Link>
          </>
        )}
      </div>
    </div>
  );
};
export default Header;
