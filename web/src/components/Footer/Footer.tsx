import React from "react";
import "./Footer.css";
interface Props {}
const Footer: React.FC<Props> = ({}) => {
  return (
    <div className="footer">
      <img src="/logo.png" alt="logo" />
      <p>This is our site</p>
    </div>
  );
};

export default Footer;
