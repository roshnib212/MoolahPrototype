import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheets/index.css';
import HomePage from './components/HomePage.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import RegistrationPage from "./components/RegistrationPage.js";

ReactDOM.render(
  <Router>
      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/register">
          <RegistrationPage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
  </Router>,
  document.getElementById('root')
);
