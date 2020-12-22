import React from 'react';
// import PropTypes from 'prop-types';
import './ULP-text.css';
import BBtn from '../BB';
import hero from '../Images/hero.png'

function ULPtxt(){
   return (
<React.Fragment>
    <div className="yellow-circle"></div>
    <div className="main-hero">   
    <div className="main-text">
    <h3 className="text-first">
      Boost your Sale <br />
      with <span style={{color:"#8c30f5"}}>MartReach</span>
    </h3>
    <p className="text-second">
      We help small and medium business to grow their audience reach.
    </p>

    <BBtn/>
    </div>
    <div className="main-img">
        <img className="lp-img" src={hero} alt="" />
      </div>
     </div>
</React.Fragment>
   )
};
export default ULPtxt;