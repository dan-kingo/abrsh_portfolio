import "./Navbar.css";
import logo from "../../assets/logo-color.png";
import { useState } from "react";
import underline from "../../assets/angry-underline.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Navbar = () => {
  const [menu, setMenu] = useState("hero");
  return (
    <div className="container">
      <AnchorLink className="anchor" href="#hero" offset={50}>
        <img src={logo} alt="" onClick={() => setMenu("hero")} />
      </AnchorLink>
      <ul className="nav-menu">
        <li>
          <AnchorLink className="anchor" href="#hero">
            <p onClick={() => setMenu("hero")}>Home</p>
          </AnchorLink>
          {menu === "hero" ? <img src={underline} /> : <></>}
        </li>
        <li>
          <AnchorLink href="#about" offset={50} className="anchor">
            <p onClick={() => setMenu("about")}>About Me </p>
          </AnchorLink>
          {menu === "about" ? <img src={underline} /> : <></>}
        </li>
        <li>
          <AnchorLink href="#services" offset={50} className="anchor">
            <p onClick={() => setMenu("services")}>Services</p>
          </AnchorLink>
          {menu === "services" ? <img src={underline} /> : <></>}
        </li>
        <li>
          <AnchorLink href="#works" offset={50} className="anchor">
            <p onClick={() => setMenu("works")}>Works</p>
          </AnchorLink>
          {menu === "works" ? <img src={underline} /> : <></>}
        </li>
        <li>
          <AnchorLink href="#contact" offset={50} className="anchor">
            <p onClick={() => setMenu("contact")}>Contact</p>
          </AnchorLink>
          {menu === "contact" ? <img src={underline} /> : <></>}
        </li>
      </ul>
      <AnchorLink href="#contact" offset={50} className="anchor">
        <button className="contact-me">Contact Me</button>
      </AnchorLink>
    </div>
  );
};

export default Navbar;
