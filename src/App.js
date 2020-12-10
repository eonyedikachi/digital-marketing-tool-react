import  'bootstrap/dist/css/bootstrap.min.css';
// import Contacts from './component/contact/Contacts';
// import { Provider } from './component/Context'
// import AddContact from './component/Addcontact';
import Header from './component/layout/Header';
import {HashRouter as Router,Route, Switch} from 'react-router-dom';
import './App.css';
import Footer from './component/layout/Footer';
import LP from './component/LP'
import About from './component/About'
import Login from './component/Login'
import Pricing from './component/Pricing'
import Signup from './component/Signup'
import Services from './component/Services'
import Contactt from './component/Contactt'


function App() {
  return (
<Router>
      <Header/>
     <Switch>
       <Route exact path="/" component= {LP}/>
       <Route exact path="/about" component= {About }/>
       <Route exact path="/pricing" component= {Pricing }/>
       <Route exact path="/contact" component= {Contactt }/>
       <Route exact path="/signup" component= {Signup }/>
       <Route exact path="/login" component= {Login}/>
       <Route exact path="/services" component= {Services }/>
     </Switch>
       <Footer/>
       </Router>
  );
}
export default App;
 