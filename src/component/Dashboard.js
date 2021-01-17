import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';
import Left from './User-Dasboard/User-dasbord1';
import Middle from './User-Dasboard/User-dasboard2';
import Right from './User-Dasboard/User-dahboard3';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import savedlp from '../component/User-Dasboard/viewlandingeditor';
import createet from '../component/createemailTep/createemailTemp1';
import Audiencepage from '../component/Audiencepage';
import Subscriptionpage from '../component/Subscriptionpage';
import Settings from '../component/Settings';
import campaign from '../component/Campaign';
import selectaud from '../component/selectaud';

export default function Dashboard() {
  return (
    <div style={{ height: '100vh' }}>
      <div className="d-flex" style={{ height: '100%' }}>
        <Left />
        <Router>
          <Switch>
            <Route exact path="/dashboard/" component={Middle} />
            <Route exact path="/dashboard/savedlp" component={savedlp} />
            {/* <Route exact path="/dashboard/createet" component={createet} /> */}
            <Route path="/dashboard/Audiencepage" component={Audiencepage} />
            <Route
              path="/dashboard/Subscriptionpage"
              component={Subscriptionpage}
            />
            <Route path="/dashboard/Settings" component={Settings} />
            <Route path="/dashboard/campaign" component={campaign} />
            <Route path="/dashboard/selectaud" component={selectaud} />
          </Switch>
        </Router>
        <Right />
      </div>
    </div>
    // </div>
  );
}
