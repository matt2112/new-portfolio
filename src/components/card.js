import React from 'react';

const Card = (props) => {

    const image = require(`../assets/projects/${props.img}`);

    return (
        <div className="card">
            <a href={props.link} target="_blank">
                <img className="card__img" src={image} />           
            </a>
            <h2 className="card__title">{props.title}</h2>
            <p className="card__description">{props.description}</p>
            <a className="card__repo" href={props.repo} target="_blank">View code</a>
        </div>
    );
};

Card.propTypes = {
    img: React.PropTypes.string,
    title: React.PropTypes.string,
    link: React.PropTypes.string,
    description: React.PropTypes.string,
    repo: React.PropTypes.string    
};

Card.defaultProps = {
    img: 'calc',
    title: 'Project Title',
    link: '',
    description: 'Project Description',
    repo: 'https://github.com/matt2112'
};

export default Card;