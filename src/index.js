import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheets/index.css';
import LoginPage from './components/LoginPage.js';
import ProfilePage from './components/ProfilePage.js';
import OverviewPage from './components/OverviewPage.js';
import BudgetPage from './components/BudgetPage.js';
import TutorialsPage from './components/TutorialsPage.js';
import RegisterAccountPage from './components/RegisterAccountPage.js';
import LoanServicersPage from './components/LoanServicersPage.js';
import LoanSummaryPage from './components/LoanSummaryPage.js';
import LoanStatusPage from './components/LoanStatusPage.js';
import LoanRepaymentPage from './components/LoanRepaymentPage.js';
import LoanForgivenessPage from './components/LoanForgivenessPage.js';

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
        <Route path="/loanservicers">
          <LoanServicersPage />
        </Route>
        <Route path="/loansummary">
          <LoanSummaryPage />
        </Route>
        <Route path="/loanstatus">
          <LoanStatusPage />
        </Route>
        <Route path="/loanrepayment">
          <LoanRepaymentPage />
        </Route>
        <Route path="/loanforgiveness">
          <LoanForgivenessPage />
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
