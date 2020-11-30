import React from 'react';
import PropTypes from 'prop-types';
import LP from './LP.css';
import LPimgmain from '../component/LP/LP-img';
import LPtextmain from '../component/LP/LP-text';
import BBtn from '../component/BB';

function LPmain(){
    return(
        <div className='main-hero container'>
            <div><LPtextmain/>
             <BBtn/></div> 
     
          <LPimgmain/>

        </div>
    )
};
export default LPmain;