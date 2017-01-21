import React from 'react';
import ReactDOM from 'react-dom';

import './style/style.scss';

import Navbar from './components/navbar';
import Top from './components/top-section';

const App = () => {
    return (
        <div className="wrapper">
            <Navbar />
            <Top />
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('app'));
