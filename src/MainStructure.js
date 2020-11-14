import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from './components/Home.js';

import './MainStructure.css';
import ProjectPage from './components/projects/ProjectPage.js';

class MainStructure extends Component {
  render() {
    return (
      <Router>
        <div className="main-structure">
          <div className="main-structure__body">
            <Route path="/" exact component={Home} />
            <Route path="/dock-street" component={ProjectPage} />
            <Route path="/bowery-street" component={ProjectPage} />
            <Route path="/penrhyn-road" component={ProjectPage} />
            <Route path="/bfi" component={ProjectPage} />
            <Route path="/crown-street" component={ProjectPage} />
            <Route path="/iq" component={ProjectPage} />
            <Route path="/navarino-grove" component={ProjectPage} />
            <Route path="/florin-court" component={ProjectPage} />
            <Route path="/glenshaw-mansions" component={ProjectPage} />
          </div>
        </div>
      </Router>
    );
  }
}

export default MainStructure;
