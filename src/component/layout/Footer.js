import React from 'react';
// import PropTypes from 'prop-types';
import './Footer.css'
import logos from './logo.png';

function Footer(){
   return(
       <footer>
       <div className="container">
    <div className="footer-content d-flex justify-content-around">
      <div className="company-info d-flex flex-column my-5">
        <div className="footer-logo mb-4">
          <img className ="logo-nav mb-4" src={logos} alt="logo"/>
          <p>
            We help small and medium business to grow their audience reach.
          </p>
        </div>
        <div className="copyright mb-3">
          <p className="font-weight-lighter">MartReach &copy; 2020, All Rights Reserved.</p>
        </div>
        <div className="socials">
          <a className="mr-4" to="#"><i className="fas fa-phone-alt"></i></a>
          <a className="mr-4" to="#"><i className="far fa-envelope"></i></a>
          <a className="mr-4" to="#"><i className="fab fa-twitter"></i></a>
          <a className="mr-4" to="#"><i className="fab fa-instagram"></i></a>
          <a to="#"><i className="fab fa-facebook-f"></i></a>
        </div>
      </div>
        <div className="links d-flex my-5 justify-content-around">
          <div className="company mr-5">
          <p className="font-weight-bold">Company</p>
          <ul>
            <li className="my-4">
              <a to="../about.html">About Us</a>
            </li>
            <li className="my-4">
              <a to="../contact.html">Contact Us</a>
            </li>
            <li className="my-4">
              <a to="pricing.html">Pricing</a>
            </li>
            <li>
              <a to="services.html">Services</a>
            </li>
          </ul>
        </div>
        <div className="support mr-5">
          <p className="font-weight-bold">Support</p>
          <ul>
            <li className="my-4">
              <a to="./support.html">Support</a>
            </li>
            <li>
              <a to="FAQ.html">FAQ</a>
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