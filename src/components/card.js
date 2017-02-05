import React from 'react';

// Need to import all images individually so they can be loaded by webpack and mapped onto card components.
import calc from '../assets/projects/calc.png';
import camperleaderboard from '../assets/projects/camperleaderboard.png';
import fifteen from '../assets/projects/fifteen.png';
import gameoflife from '../assets/projects/gameoflife.png';
import markdown from '../assets/projects/markdown.png';
import pomodoro from '../assets/projects/pomodoro.png';
import quotemachine from '../assets/projects/quotemachine.png';
import recipebox from '../assets/projects/recipebox.png';
import ricerocks from '../assets/projects/ricerocks.png';
import russelltribute from '../assets/projects/russelltribute.png';
import simon from '../assets/projects/simon.png';
import tictactoe from '../assets/projects/tictactoe.png';
import twitch from '../assets/projects/twitch.png';
import weather from '../assets/projects/weather.png';
import wikipedia from '../assets/projects/wikipedia.png';

const imgMap = { calc, camperleaderboard, fifteen, gameoflife, markdown, pomodoro,
    quotemachine, recipebox, ricerocks, russelltribute, simon, 
    tictactoe, twitch, weather, wikipedia };

const Card = (props) => {
    return (
        <div className="card">
            <img src={imgMap[props.img]} />
            <h2>{props.title}</h2>
            <p>{props.description}</p>
            <a href={props.repo} target="_blank">View code</a>
        </div>
    );
};

export default Card;