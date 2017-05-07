import React from 'react';

import beach from '../assets/bg/beach.jpeg';

const Top = () => {
  return (
    <div className="top">
      <picture className="top__picture">
        <source srcSet={beach} media="(min-width: 1380px)" />
        <source srcSet={beach} media="(min-width: 990px)" />
        <source srcSet={beach} media="(min-width: 640px)" />
        <img srcSet={beach} alt="Pretty hi-res image" />
      </picture>
      <div className="top__band">
        <h1 className="top__headline">Hi, I'm Matt, a Software and Web Developer based in London, UK.</h1>
      </div>
    </div>
  );
};

export default Top;
