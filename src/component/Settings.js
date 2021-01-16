import React from 'react';
import { Link } from 'react-router-dom';
import ContactInformation from './Settings/ContactInformation';
import Security from './Settings/Security';
import Domains from './Settings/Domains';
import ManageMyAccount from './Settings/ManageMyAccount';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

export default function Settings() {
  return (
    <div
      style={{
        width: '60%',
        backgroundColor: '#F4F5F7',
        margin: 'auto',
        minHeight: '100vh',
      }}
    >
      <div className="select">
        <h1>Account Settings</h1>
      </div>
      <Router>
        <Switch>
          <Route
            exact
            path="/dashboard/Settings/"
            component={ContactInformation}
          />
          <Route
            exact
            path="/dashboard/Settings/Security"
            component={Security}
          />
          <Route
            exact
            path="/dashboard/Settings/Domains"
            component={Domains}
          />
          <Route
            exact
            path="/dashboard/Settings/ManageMyAccount"
            component={ManageMyAccount}
          />
        </Switch>
      </Router>
    </div>
  );
}
