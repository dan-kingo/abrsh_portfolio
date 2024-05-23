import React from "react";
import "./Footer.css";
import profilePic from "../../assets/logo-color.png";
const Footer = () => {
  return (
    <div className="footer-section">
      <div className="left">
        <img src={profilePic} alt="" />
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
      </div>
      <p>Copyright &copy; {new Date().getFullYear()} Allrights Reserved!</p>
    </div>
  );
};

export default Footer;
