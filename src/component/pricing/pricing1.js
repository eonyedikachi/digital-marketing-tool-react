import React from 'react';
import './pricing1.css';



 function Pricing(props) {
    return (
      <div className="col-lg-3 col-md-6 col-sm-12 box">
        <div className="card pricingcard">
           <div className="card-header h-one">
            <h2>{props.package}</h2>
            <h3>{props.amount}</h3>
            <p>{props.intro}</p>
          </div>
          <div className="card-body b-one">
            <h3>Top features</h3>
            {props.icons}
            {props.btn}
          </div>
        </div>
        </div>
    )
}
export default Pricing;
