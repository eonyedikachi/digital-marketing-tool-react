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
          <a className="mr-4" href="#"><i className="fas fa-phone-alt"></i></a>
          <a className="mr-4" href="#"><i className="far fa-envelope"></i></a>
          <a className="mr-4" href="#"><i class="fab fa-twitter"></i></a>
          <a className="mr-4" href="#"><i class="fab fa-instagram"></i></a>
          <a href="#"><i class="fab fa-facebook-f"></i></a>
        </div>
      </div>
        <div class="links d-flex my-5 justify-content-around">
          <div class="company mr-5">
          <p class="font-weight-bold">Company</p>
          <ul>
            <li class="my-4">
              <a href="../about.html">About Us</a>
            </li>
            <li class="my-4">
              <a href="../contact.html">Contact Us</a>
            </li>
            <li class="my-4">
              <a href="pricing.html">Pricing</a>
            </li>
            <li>
              <a href="services.html">Services</a>
            </li>
          </ul>
        </div>
        <div class="support mr-5">
          <p class="font-weight-bold">Support</p>
          <ul>
            <li class="my-4">
              <a href="./support.html">Support</a>
            </li>
            <li>
              <a href="FAQ.html">FAQ</a>
            </li>
          </ul>
        </div>
        <div class="newsletter">
        <p class="font-weight-bold">Stay up to date</p>
        <form class="subscribe" name="subscribe" method="POST" data-netlify="true">
          <input type="email" name="email" id="footerEmail" placeholder="Enter Email Address" required />
          <button type="submit"><i class="fas fa-paper-plane"></i></button>
        </form>
        </div>        
        </div>
      </div>

       </div>
       </footer>
   )
};
export default Footer;