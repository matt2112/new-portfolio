import React from 'react';

import Card from './card';
import Data from '../assets/data/featured';

const renderCards = (data) => {
    return data.map(item => {
        return (
            <Card 
                key={item.id}
                title={item.title}
                img={item.img}
                description={item.description}
                link={item.link}
                repo={item.repo}
            />
        );
    });
};

const Featured = () => {
    return (
        <div className="featured">
            <h1>Featured projects</h1>
            <h2>Click on the images below to see some of my favourite projects.</h2>
            <div className="featured__cards">
                {renderCards(Data)}
            </div>
        </div>
    );
};

export default Featured;