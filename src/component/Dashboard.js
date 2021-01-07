import React from "react";
import {Link} from 'react-router-dom';
import './Dashboard.css';
import Left from './User-Dasboard/User-dasbord1'
import Middle from './User-Dasboard/User-dasboard2'
import Right from './User-Dasboard/User-dahboard3'
import {HashRouter as Router,Route, Switch} from 'react-router-dom';
import Services from '../component/Services'


export default function Dashboard() {
    return (
        
  <div style={{height:"100vh"}}>
  <div className="d-flex" style={{height: "100%"}}>
    
        <Left/>
        <Router>
        <Switch>
        <Route  path="/dashboard/" component= {Middle }/>
        <Route exact path="/services" component= {Services }/>

        </Switch>
        </Router>
        <Right/>

  </div>
</div>
// </div>
    )
}
