    import React from 'react';
// import PropTypes from 'prop-types';
import './Header.css';
import {Link} from 'react-router-dom';
import logo from './logo.png';

function Header() {
  return (
    <div>
  <div className="container">
  <nav className="navbar navbar-expand-md navbar-light p-2">
  <Link className="navbar-brand" to="/"><img className ="logo-nav" src={logo}/></Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto ml-auto">
        <li className="nav-item mr-2">
          <Link className="nav-link nav1" to="/" >Home <span className="sr-only">(current)</span></Link>
        </li>
        <li className="nav-item mr-2">
          <Link className="nav-link nav2" to="/Services">Services</Link>
        </li>
        <li className="nav-item mr-2">
          <Link className="nav-link nav3" to="/pricing">Pricing</Link>
        </li>
        <li className="nav-item mr-2">
          <Link className="nav-link nav4" to="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link nav5" to="/Contact">Contact</Link>
        </li>
      </ul>
      <div className="right-nav">
        <Link to='/login'className="btn mr-4" data-toggle="modal" data-target="#signIn">Login</Link>
        <Link to="/signup" className="btn">Sign up</Link>
      </div>
    </div>
    
         </nav>
         </div>
         <hr style={{color: 'black', height:'5px'}}/>
         </div>
  )
};

export default Header;
