import "./Navbar.css";
import logo from "../../assets/logo-color.png";

const Navbar = () => {
  return (
    <div className="container">
      <img src={logo} alt="" />
      <ul className="nav-menu">
        <li>Home</li>
        <li>About Me</li>
        <li>Services</li>
        <li>Portfolio</li>
        <li>Contact</li>
      </ul>
      <button className="contact-me">Contact Me</button>
    </div>
  );
};

export default Navbar;
