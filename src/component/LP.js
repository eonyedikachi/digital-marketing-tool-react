import React, {useEffect} from 'react';
// import PropTypes from 'prop-types';
import './Lp.css'
import ULP from './ULP/ULP';
import MLP from './MLP/MLP2c';
import LLP from './LLP/LLP';
import Header from '../component/layout/Header';
import Footer from '../component/layout/Footer';

function LPmaine(){
    useEffect(() => {
        document.title = "MartReach | Boost your Digital Awareness"
    });
    return(
       
        <div>
            <Header/>
            <ULP/>
            <MLP/>
            <LLP/>
            <Footer/>
           
        </div>
        
    )
};
export default LPmaine;