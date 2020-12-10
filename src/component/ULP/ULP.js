import React from 'react';
// import PropTypes from 'prop-types';
import './ULP.css';
import LPimgmain from './ULP-img';
import LPtextmain from './ULP-text';
function LPmain(){
    return(
        <div className=' container2'>
            <div className='main-hero'>
                <LPtextmain/>     
          <LPimgmain/>
        </div>
        </div>
        
    )
};
export default LPmain;