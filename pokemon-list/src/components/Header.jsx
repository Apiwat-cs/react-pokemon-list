import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <h1>PokemonList</h1>
      </div>
      <nav className="nav">
        <ul>
          <li><Link to="/">Pokemon</Link></li>
          <li><Link to="/shop">Shop</Link></li>
          <li><a href="#news">News</a></li>
          <li><a href="#forums">Forums</a></li>
        </ul>
      </nav>
      <div className="auth-buttons">
        <button className="sign-in">Sign In</button>
        <button className="sign-up">Sign Up</button>
      </div>
    </header>
  );
};

export default Header;
