import React from 'react';

import Card from './card';

const renderCards = data => {
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

const Top = (props) => {
    return (
        <div className="featured">
            <h1>Featured projects</h1>
            <h2>Click on the images below to see some of my favourite projects.</h2>
            <div className="featured__cards">
                {renderCards(props.data)}
            </div>
        </div>
    );
};

export default Top;