import React from 'react';
import ReactDOM from 'react-dom';

import './style/style.scss';
import data from './assets/data/data.json';

import Navbar from './components/navbar';
import Top from './components/top-section';
import Featured from './components/featured-projects';

const App = () => {
    return (
        <div className="wrapper">
            <Navbar />
            <Top />
            <Featured data={data.featuredProjects} />
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('app'));
