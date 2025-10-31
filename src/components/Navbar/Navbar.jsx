import React, { useState } from 'react';
import './Navbar.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="Navbar">
      <div className="nav-icon" onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      <ul className={menuOpen ? 'nav-menu active' : 'nav-menu'}>
        <li><AnchorLink className="anchor-link" href="#home" onClick={closeMenu}>Home</AnchorLink></li>
        <li><AnchorLink className="anchor-link" offset={10} href="#about" onClick={closeMenu}>About</AnchorLink></li>
        <li><AnchorLink className="anchor-link" offset={50} href="#services" onClick={closeMenu}>Services</AnchorLink></li>
        <li><AnchorLink className="anchor-link" offset={50} href="#work" onClick={closeMenu}>Portfolio</AnchorLink></li>
        <li><AnchorLink className="anchor-link" offset={50} href="#contact" onClick={closeMenu}>Contact</AnchorLink></li>
      </ul>
    </div>
  );
}

export default Navbar;
