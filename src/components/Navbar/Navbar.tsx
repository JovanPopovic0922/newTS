import React from "react";
import "./Navbar.css";
import Logo from "../Logo/Logo";
import { Link } from "react-router-dom";

function Navbar() {
   return(
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand about-network" to="/about">
        ABOUT
      </Link>
      <Link className="navbar-brand logo mx-2"  to="/">
         <Logo />
      </Link>
      <Link className="navbar-brand about-network" to="/network">
        NETWORK
      </Link>
    </nav>
   )
}

export default Navbar;