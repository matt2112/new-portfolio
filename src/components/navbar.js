import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/">
        <div className="navbar__nav-item">Matt Lewis</div>
      </Link>
        <div className="navbar__right-block">
          <Link to="/featured">
            <div className="navbar__nav-item">Featured Projects</div>
          </Link>
          <div className="navbar__nav-item">Other Projects</div>
          <Link to="/about">
            <div className="navbar__nav-item">About</div>
          </Link>
          <div className="navbar__nav-item">Contact</div>
        </div>
    </div>
  );
};

export default Navbar;
