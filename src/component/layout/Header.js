import React, { useState } from 'react'
// import PropTypes from 'prop-types';
import './Header.css';
import {Link} from 'react-router-dom';
import logo from '../Images/logo.png';
import {Login} from '../Login'


function Header() {
  const [show , setShow  ] = useState(false)

  const close =()=> setShow(false)
  return (
    <React.Fragment>
    {show ? <div className="back-drop"></div> : null}
    <header className="header sticky-top"> 
    {show ? <div className="back-drop"></div> : null}
    
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
        <Link onClick={() => setShow(true)} className="btn mr-4" data-toggle="modal" data-target="#signIn" onClick={()=> setShow(true)}>Login</Link>

        <Link to="/signup" className="btn">Sign up</Link>
      </div>
    </div>
  </nav>
</div>
</header>
<Login
show ={show}
close={close}/>
</React.Fragment>

  )
};

export default Header;
