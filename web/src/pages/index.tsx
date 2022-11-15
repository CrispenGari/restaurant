import React from "react";
import { Routes as R, Route, BrowserRouter } from "react-router-dom";
import Admin from "./Admim/Admin";
import Checkout from "./Checkout/Checkout";
import Home from "./Home/Home";
import Login from "./Login/Login";
import NotFound from "./NotFound/NotFound";
import Register from "./Register/Register";
interface Props {}
const Routes: React.FC<Props> = () => {
  return (
    <BrowserRouter>
      <R>
        <Route path="/" caseSensitive element={<Home />} />
        <Route path="/checkout" caseSensitive element={<Checkout />} />
        <Route path="/admin" caseSensitive element={<Admin />} />
        <Route path="/login" caseSensitive element={<Login />} />
        <Route path="/register" caseSensitive element={<Register />} />
        <Route path="*" element={<NotFound />} caseSensitive />
      </R>
    </BrowserRouter>
  );
};

export default Routes;
