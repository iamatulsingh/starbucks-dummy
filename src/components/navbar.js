import { useState } from 'react';
import './navbar.css';
import logo from '../img/logo.png';


function Navbar() {
  const [isActive, setActive] = useState("false");
  const [isSmallMenu, toggleActive] = useState("false");

  function updateTheme() {
    setActive(!isActive);
    document.body.classList.toggle("dark");
  }

  function menuToggle() {
    toggleActive(!isSmallMenu);
  }

  return (
    <div>
      <header>
          <a href="#/"><img src={logo} alt="logo" className="logo"></img></a>
          <div className={isSmallMenu ? "toggle" : "toggle active"} onClick={menuToggle}></div>
          <ul className={isSmallMenu ? "navigation" : "navigation active"} onClick={menuToggle}>
              <li><a href="#/">Home</a></li>
              <li><a href="#/">Menu</a></li>
              <li><a href="#/">What's New</a></li>
              <li><a href="#/">Contact</a></li>
              <li><span className={isActive ? "themeSwitch" : "themeSwitch active"} onClick={updateTheme}></span></li>
          </ul>
      </header>
    </div>
  );
}

export default Navbar;
