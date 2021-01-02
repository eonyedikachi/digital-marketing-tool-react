import React, {useEffect} from 'react';
// import PropTypes from 'prop-types';
import './Lp.css'
import ULP from './ULP/ULP';
import MLP from './MLP/MLP2c';
import LLP from './LLP/LLP';

function LPmaine(){
    useEffect(() => {
        document.title = "MartReach | Boost your Digital Awareness"
    });
    return(
       
        <div>
            <ULP/>
            <MLP/>
            <LLP/>
           
        </div>
        
    )
};
export default LPmaine;