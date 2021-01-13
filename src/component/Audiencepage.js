import React from 'react'
import './Audiencepage.css'
import {Link} from 'react-router-dom'
import Viewcontact from './Audience/Viewcontact'
import Creategroup from './Audience/Creategroup'
import Importgroup from './Audience/Importgroup'
import {HashRouter as Router,Route, Switch} from 'react-router-dom';


export default function Audiencepage() {
    return (
        <div style={{width: '60%', backgroundColor: '#F4F5F7', margin: 'auto', minHeight: '100vh'}}>
         <div className="select">
            <h1>The Audience page</h1>
          </div>
   <Router>
     <Switch>
       <Route exact path="/dashboard/Audiencepage/" component= {Viewcontact}/>
       <Route exact path="/dashboard/Audiencepage/Importgroup" component= {Importgroup}/>
       <Route exact path="/dashboard/Audiencepage/Creategroup" component= {Creategroup}/>
   </Switch>
   </Router>
        
            
        </div>
    )
}
