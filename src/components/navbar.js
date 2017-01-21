import React from 'react';

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar__nav-item">Matt Lewis</div>
            <div className="navbar__right-block">
                <div className="navbar__nav-item">Featured Projects</div>
                <div className="navbar__nav-item">Other Projects</div>
                <div className="navbar__nav-item">About</div>
                <div className="navbar__nav-item">Contact</div>                    
            </div>
        </div>
    );
};

export default Navbar;