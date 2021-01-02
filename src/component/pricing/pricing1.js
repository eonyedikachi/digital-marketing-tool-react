import React from 'react';
import './pricing1.css';



 function Pricing(props) {
    return (
      <div className="col-lg-4 col-md-6 col-sm-6 box">
        <div className="card pricingcard p-c">
           <div className="card-header h-one c-h">
            <h2>{props.package}</h2>
            <h3>{props.amount}</h3>
            <p>{props.intro}</p>
          </div>
          <div className="card-body b-one c-b">
            <h3>Top features</h3>
            {props.icons}
            {props.btn}
          </div>
        </div>
        </div>
    )
}
export default Pricing;
