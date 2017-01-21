import React from 'react';
import ReactDOM from 'react-dom';

import './style/style.scss';

import Navbar from './components/navbar';

const App = () => {
    return (
        <Navbar />
    );
}

ReactDOM.render(<App />, document.getElementById('app'));
