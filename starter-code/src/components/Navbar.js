import React from "react";
import { Link } from "react-router-dom";

const navbar = () => {
  return (
    <nav className="nav-style">
      <nav className="navbar navbar-dark bg-primary mb-3">
        <div className="container">
          <Link to="/" className="navbar-brand">
            WikiCountries
          </Link>
        </div>
      </nav>
    </nav>
  );
};

export default navbar;
