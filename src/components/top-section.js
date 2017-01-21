import React from 'react';

import beach from '../assets/logos/github.png';
// Jpeg loading seems to be broken, need to find a workaround...
// import beach from '../assets/bg/beach.jpeg';

const Top = () => {
    return (
        <div className="top">
            <img src={beach} />
            <div className="top__band">
                <h1 className="top__headline">Hi, I'm Matt, a Front End Web Developer based in London, UK.</h1>
            </div>
        </div>
    );
};

export default Top;