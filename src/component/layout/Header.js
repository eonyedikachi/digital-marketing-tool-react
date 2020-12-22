    import React from 'react';
// import PropTypes from 'prop-types';
import './Header.css';
import {Link} from 'react-router-dom';
import logo from '../Images/logo.png';

function Header() {
  return (
    <React.Fragment>
    <header className="header sticky-top">
    <div className="container">
  <nav className="navbar navbar-expand-md navbar-light p-2">
    <Link className="navbar-brand" to="/"><img className ="logo-nav" src={logo}/></Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto ml-auto">
        <li className="nav-item mr-2">
          <Link className="nav-link nav1" to="/">Home <span className="sr-only">(current)</span></Link>
        </li>
        <li className="nav-item mr-2">
          <Link className="nav-link nav2" to="/services">Services</Link>
        </li>
        <li className="nav-item mr-2">
          <Link className="nav-link nav3" to="/pricing">Pricing</Link>
        </li>
        <li className="nav-item mr-2">
          <Link className="nav-link nav4" to="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link nav5" to="contact">Contact</Link>
        </li>
      </ul>
      <div className="right-nav">
        <Link  to="#"className="btn mr-4" data-toggle="modal" data-target="#signIn">Login</Link>
        <Link to="#" className="btn">Sign up</Link>
      </div>
    </div>
  </nav>
</div>
</header>
</React.Fragment>
  )
};

export default Header;
