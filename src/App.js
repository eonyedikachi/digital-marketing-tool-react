import  'bootstrap/dist/css/bootstrap.min.css';
import {HashRouter as Router,Route, Switch} from 'react-router-dom';
import './App.css';
import Pricing from './component/Pricing'
import LP from './component/LP'
import About from './component/About'
import Signup from './component/Signup'
import Services from './component/Services'
import Contactt from './component/Contactt'
import { Provider } from 'react-redux';
import store from './component/store'
import Allreducers from '../src/component/reducers'
import Dashboard from './component/Dashboard';
import Mailbox from './component/Mailbox';
import Appp from './component/templateeditor';
import Users from './component/user-management';
import selectTemp from './component/createemailTep/createemailTem2';
import emailtemp1 from './component/Emailtemp1';
import emailtemp2 from './component/Emailtemp2';
import emailtemp3 from './component/Emailtemp3';
import Feedback from "./component/feedback";
import AdminUserDashboard from './component/adminuserdashboard';



function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={LP} />
          <Route exact path="/about" component={About} />
          <Route exact path="/pricing" component={Pricing} />
          <Route exact path="/contact" component={Contactt} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/services" component={Services} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/admin/users" component={Users} />
          <Route path="/Mailbox" component={Mailbox} />
          <Route path="/Templateeditor" component={Appp} />
          <Route path="/emailtemp1" component={emailtemp1} />
          <Route path="/emailtemp2" component={emailtemp2} /> 
           <Route path="/emailtemp3" component={emailtemp3} />
          <Route path="/selecttemp" component={selectTemp} />
          <Route path="/feedback" component={Feedback} />
          <Route path="/admin/dashboard" component={AdminUserDashboard} />
        </Switch>
      </Router>
    </Provider>
  );
}
export default App;
 