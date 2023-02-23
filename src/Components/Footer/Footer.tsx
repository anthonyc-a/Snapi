import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <img src="/logo.png" alt="Snapi Logo" />
      Crafted with Care by Snapi
      <ul>
        <li>Share</li>
        <li>Feedback</li>
        <li>Legal</li>
      </ul>
    </div>
  );
};

export default Footer;
