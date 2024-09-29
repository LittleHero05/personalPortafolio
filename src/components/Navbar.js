import React from 'react';
import './Navbar.css';
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <div className="navbar-container">
        <h2><Link to={"/"}>Isabella Porras</Link></h2>
        <div className='navigation-menu'>
          <ol>
            <li><Link to={"/"}>Home</Link></li>

            <li><Link to={"/projects"}>Projects</Link></li>
            <li><Link to={"/about"}>About</Link></li>
            <li><Link to={"/contact"}>Contact</Link></li>
            <li><Link to={"/services"}>Services</Link></li>
          </ol>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;