import React from 'react'
import './Services.css'
import Container from './Services/Container'
import Header from '../component/layout/Header';
import Footer from '../component/layout/Footer';

 function Services() {
    return (
      <>
      <Header/>
        <div className="services-section">
        <div className="s-heading">
      <h1>Services</h1>
      <p> Boost Your Business Brand and ROI with MartReach</p>
    </div>
       <Container/>
        </div>
        <Footer/>
        </>
    )
}
export default Services;