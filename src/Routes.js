// Routes.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ArtworkList from './components/ArtworkList';
import ArtworkDetail from './components/ArtworkDetail';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ArtworkList} />
        <Route path="/artwork/:id" component={ArtworkDetail} />

      </Switch>
    </Router>
  );
};

export default Routes;
