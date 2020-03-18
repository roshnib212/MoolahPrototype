import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheets/index.css';
import LoginPage from './components/LoginPage.js';
import ProfilePage from './components/ProfilePage.js';
import OverviewPage from './components/OverviewPage.js';
import BudgetPage from './components/BudgetPage.js';
import StudentLoansPage from './components/StudentLoansPage.js';
import TutorialsPage from './components/TutorialsPage.js';
import RegisterAccountPage from './components/RegisterAccountPage.js';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

ReactDOM.render(
  <Router>
      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/register">
          <RegisterAccountPage />
        </Route>
        <Route path="/profile">
          <ProfilePage />
        </Route>
        <Route path="/overview">
          <OverviewPage />
        </Route>
        <Route path="/budget">
          <BudgetPage />
        </Route>
        <Route path="/studentloans">
          <StudentLoansPage />
        </Route>
        <Route path="/tutorials">
          <TutorialsPage />
        </Route>
        <Route path="/">
          <LoginPage />
        </Route>
      </Switch>
  </Router>,
  document.getElementById('root')
);
