import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './style/style.scss';

import About from './components/about';
import Featured from './components/featured-projects';
import Navbar from './components/navbar';
import Top from './components/top-section';

const App = () => {
  return (
    <Router>
      <div className="wrapper">
        <Navbar />
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/featured" component={Featured} />
          <Route path="/" component={Top} />
        </Switch>
      </div>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
