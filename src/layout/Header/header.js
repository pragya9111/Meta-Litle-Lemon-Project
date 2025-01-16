import React, { useState } from "react";
import "./header.css";
import Logo from "../../assets/Logo.svg";
import MenuIcon from "../../assets/hamburger.svg";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const onClickImage = () => {
    navigate("/");
  };

  const menuItems = [
    { id: 1, label: "Home", link: "/" },
    { id: 2, label: "About", link: "/about" },
    { id: 3, label: "Menu", link: "/menu" },
    { id: 4, label: "Reservations", link: "/reservations" },
  ];

  return (
    <header className="navbar">
      <div className="logo">
        <img src={Logo} alt="logo" onClick={onClickImage} />
      </div>
      <nav className={`nav ${isMenuOpen ? "open" : ""}`}>
        <ul className={`menu-list ${isMenuOpen ? "open" : ""}`}>
          {menuItems.map(item => (
            <li key={item.id}>
              <a href={item.link} className="link">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="menu-toggle" onClick={toggleMenu}>
        <img src={MenuIcon} alt="menu-icon" height={18} />
      </div>
    </header>
  );
};

export default Header;