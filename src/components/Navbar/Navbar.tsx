import React from "react";
import "./Navbar.css";
import Logo from "../Logo/Logo";
import { Link } from "react-router-dom";

function Navbar() {
   return(
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand about-network" rel="noreferrer noopener" href="https://papers.humanode.io/deck.pdf">
        ABOUT
      </a>
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