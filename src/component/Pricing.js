import React from 'react'
import './pricing.css'
import Pricing2 from './pricing/pricing2'
import Header from '../component/layout/Header';
import Footer from '../component/layout/Footer';

 function Pricing() {
    return (
        <>
        <Header/>
        <div className="pricing">
            <div className="containeri">
            <h1>TRY OUR PREMIUM SERVICES FOR ONE MONTH FREE!!</h1>
            </div>
            <Pricing2/>
        </div>
        <Footer/>
       </> 
    )
}
export default Pricing;
