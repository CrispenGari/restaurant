import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";
interface Props {}
const NotFound: React.FC<Props> = () => {
  return (
    <div className="not__found">
      <div className="not__found__main">
        <img src="/logo.png" alt="logo" />
        <h1>
          <span>4</span>
          <span>0</span>
          <span>4</span>
        </h1>
        <p>Not Found!</p>
        <div className="not__found__links">
          <Link to={"/"}>HOME</Link>
          <Link to={"/"}>LOGIN</Link>
          <Link to={"/"}>REGISTER</Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
