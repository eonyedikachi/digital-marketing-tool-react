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
import AdminDashboard from './component/admindashboard';
import selectTemp from './component/createemailTep/createemailTem2';




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
          <Route path="/dashboardd" component={AdminDashboard} />
          <Route path="/Mailbox" component={Mailbox} />
          <Route path="/Templateeditor" component={Appp} />
          <Route path="/selecttemp" component={selectTemp} />
        </Switch>
      </Router>
    </Provider>
  );
}
export default App;
 