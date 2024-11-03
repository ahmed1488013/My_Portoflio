import "./nav.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import underline from "../../assets/nav_underline.svg";
import menu_icon from "../../assets/menu_open.svg";
import menu_close from "../../assets/menu_close.svg";
import { useRef, useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
  };

  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  };

  return (
    <div className="navbar">
      <div className="nav-logo">
        <h2>Ahmed</h2>
        <img src={theme_pattern} alt="" />
      </div>
      <img src={menu_icon} alt="" className="open" onClick={openMenu} />
      <ul ref={menuRef} className="nav-menu">
        <img src={menu_close} alt="" className="close" onClick={closeMenu} />
        <AnchorLink className="anchor-link" offset={50} href="#home">
          <li onClick={() => setMenu("home")}>
            <p>Home</p>
            {menu === "home" && <img src={underline} alt="" />}
          </li>
        </AnchorLink>
        <AnchorLink className="anchor-link" offset={50} href="#about">
          <li onClick={() => setMenu("about")}>
            <p>About</p>
            {menu === "about" && <img src={underline} alt="" />}
          </li>
        </AnchorLink>
        <AnchorLink className="anchor-link" offset={50} href="#serv">
          <li onClick={() => setMenu("services")}>
            <p>Services</p>
            {menu === "services" && <img src={underline} alt="" />}
          </li>
        </AnchorLink>
        <AnchorLink className="anchor-link" offset={50} href="#project">
          <li onClick={() => setMenu("project")}>
            <p>Projects</p>
            {menu === "project" && <img src={underline} alt="" />}
          </li>
        </AnchorLink>
        <AnchorLink className="anchor-link" offset={50} href="#contact">
          <li onClick={() => setMenu("connect")}>
            <p>Contact</p>
            {menu === "connect" && <img src={underline} alt="" />}
          </li>
        </AnchorLink>
      </ul>
      <AnchorLink className="anchor-link" offset={50} href="#contact">
        <div className="nav-connect">Connect with me</div>
      </AnchorLink>
    </div>
  );
};

export default Navbar;
