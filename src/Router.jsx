import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import App from './App';
import Article from './components/Article';


const Routes = () => (
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/article/:id" component={Article} />
    </div>
  </Router>
)

export default Routes;

