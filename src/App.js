import  'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/layout/Header';
import {HashRouter as Router,Route, Switch} from 'react-router-dom';
import './App.css';
import Footer from './component/layout/Footer';
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



function App() {
  return (
<Provider store={store} >
<Router>
      <Header/>
     <Switch>
       <Route exact path="/" component= {LP}/>
       <Route exact path="/about" component= {About }/>
       <Route exact path="/pricing" component= {Pricing }/>
       <Route exact path="/contact" component= {Contactt }/>
       <Route exact path="/signup" component= {Signup }/>
       <Route exact path="/services" component= {Services }/>
       <Route  path="/dashboard" component= {Dashboard }/>
       <Route  path="/Mailbox" component= {Mailbox }/>
     </Switch>
       <Footer/>
       </Router>
       </Provider>
  );
}
export default App;
 