import React from "react";
import "./Footer.css";
interface Props {}
const Footer: React.FC<Props> = ({}) => {
  return (
    <div className="footer">
      <img src="/logo.png" alt="logo" />
      <p>Get all the delicious dishes in our restaurant.</p>
    </div>
  );
};

export default Footer;
