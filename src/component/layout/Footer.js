import React from 'react';
// import PropTypes from 'prop-types';
import './Footer.css'
import logos from '../Images/logo.png';
import {Link} from 'react-router-dom';

function Footer(){
   return(
       <footer>
       <div className="container">
    <div className="footer-content d-flex justify-content-around">
      <div className="company-info d-flex flex-column my-5">
        <div className="footer-logo mb-4">
          <img className ="logo-nav mb-4" src={logos} alt=""/>
          <p>
            We help small and medium business to grow their audience reach.
          </p>
        </div>
        <div className="copyright mb-3">
          <p className="font-weight-lighter">MartReach &copy; 2020, All Rights Reserved.</p>
        </div>
        <div className="socials">
          <Link className="mr-4" to="#"><i className="fas fa-phone-alt"></i></Link>
          <Link className="mr-4" to="#"><i className="far fa-envelope"></i></Link>
          <Link className="mr-4" to="#"><i className="fab fa-twitter"></i></Link>
          <Link className="mr-4" to="#"><i className="fab fa-instagram"></i></Link>
          <Link to="#"><i className="fab fa-facebook-f"></i></Link>
        </div>
      </div>
        <div className="links d-flex my-5 justify-content-around">
          <div className="company mr-5">
          <p className="font-weight-bold">Company</p>
          <ul>
            <li className="my-4">
              <Link to="/about">About Us</Link>
            </li>
            <li className="my-4">
              <Link to="../contact.html">Contact Us</Link>
            </li>
            <li className="my-4">
              <Link to="pricing.html">Pricing</Link>
            </li>
            <li>
              <Link to="services.html">Services</Link>
            </li>
          </ul>
        </div>
        <div className="support mr-5">
          <p className="font-weight-bold">Support</p>
          <ul>
            <li className="my-4">
              <Link to="./support.html">Support</Link>
            </li>
            <li>
              <Link to="FAQ.html">FAQ</Link>
            </li>
          </ul>
        </div>
        <div className="newsletter">
        <p className="font-weight-bold">Stay up to date</p>
        <form className="subscribe" name="subscribe" method="POST" data-netlify="true">
          <input type="email" name="email" id="footerEmail" placeholder="Enter Email Address" required />
          <button type="submit"><i className="fas fa-paper-plane"></i></button>
        </form>
        </div>        
        </div>
      </div>

       </div>
       </footer>
   )
};
export default Footer;