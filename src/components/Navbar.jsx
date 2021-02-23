import React from "react";
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <header>
      <nav>
        <div className="container_h1">
            <h1>Dev Blog</h1>
            <img alt="logo" className="logo_navbar" />
        </div>
    
        <ul>
          <li><NavLink className="lien_menu" to="/Home">Home</NavLink></li>
          <li><NavLink className="lien_menu" to="/Blog">Blog</NavLink></li>
          <li><NavLink className="lien_menu" to="/Contact">Contact</NavLink></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
