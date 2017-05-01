import React from 'react';
import PropTypes from 'prop-types';

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
    img: PropTypes.string,
    title: PropTypes.string,
    link: PropTypes.string,
    description: PropTypes.string,
    repo: PropTypes.string
};

Card.defaultProps = {
    img: 'calc',
    title: 'Project Title',
    link: '',
    description: 'Project Description',
    repo: 'https://github.com/matt2112'
};

export default Card;
