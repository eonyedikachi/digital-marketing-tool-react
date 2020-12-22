import React from 'react';
import './pricing2.css';
import Pricing1 from './pricing1';
import {Link} from 'react-router-dom';
import Pricingbtn from './pricingbtn'


 function Pricing2() {
    return (
        <div className="row p-3">
       <Pricing1
       package="FREE"
       amount="0$"
       intro="Gives all the basics required to set up your business and grow"
       icons = 
       {<React.Fragment>
        <p><i className="fas circleicon fa-check-circle"></i> Create email template</p>
       <p><i className="fas circleicon fa-check-circle"></i> Create business landing page</p>
       <p><i className="fas circleicon fa-check-circle"></i> Create business landing page</p>
       <p><i className="fas circleicon fa-check-circle"></i> Delivery optimization tool</p>
       <p><i className="fas circleicon fa-check-circle"></i> Dynamic template editor </p>
       </React.Fragment>
       }
       btn={<button className="btn btn-outline-dark btn-lg btn-block btn-one"><Link to="#">SIGN UP</Link></button>}
       />

       <Pricing1
       package="STANDARD"
       amount="$50"
       intro="Empower with our limitless email features and maximizing email delivery"
       icons = 
       {<React.Fragment>
      <p><i className="fas circleicon fa-check-circle"></i> Create email template</p>
            <p><i className="fas circleicon fa-check-circle"></i> Create business landing page</p>
            <p><i className="fas circleicon fa-check-circle"></i> Delivery optimization tool</p>
            <p><i className="fas circleicon fa-check-circle"></i> Dynamic template editor </p>
            <p><i className="fas circleicon fa-check-circle"></i> Chat support</p>
            <p><i className="fas circleicon fa-check-circle"></i> Email Validation</p>
       </React.Fragment>
       }
       btn={<React.Fragment><Pricingbtn/></React.Fragment>}
       />
       <Pricing1
       package="PRO"
       amount="$100"
       intro="Get better insight into growing your business that to create more customer base"
       icons = 
       {<React.Fragment>
        <p><i className="fas circleicon fa-check-circle"></i> Create email template</p>
            <p><i className="fas circleicon fa-check-circle"></i> Create business landing page</p>
            <p><i className="fas circleicon fa-check-circle"></i> Delivery optimization tool</p>
            <p><i className="fas circleicon fa-check-circle"></i> Dynamic template editor </p>
            <p><i className="fas circleicon fa-check-circle"></i> Chat support</p>
            <p><i className="fas circleicon fa-check-circle"></i> Email Validation</p>
            <p><i className="fas circleicon fa-check-circle"></i>Advanced audience insight </p>
            <p><i className="fas circleicon fa-check-circle"></i>Behavioral targeting </p>
            <p><i className="fas circleicon fa-check-circle"></i>Insightful analytics </p>
       </React.Fragment>
       }
       btn={<Pricingbtn/>}
       />
       
       <Pricing1
       package="PREMIUM"
       amount="$150"
       intro="Get better insight into growing your business that to create more customer base"
       icons = 
       {<React.Fragment>
        <p><i className="fas circleicon fa-check-circle"></i> Create email template</p>
            <p><i className="fas circleicon fa-check-circle"></i> Create business landing page</p>
            <p><i className="fas circleicon fa-check-circle"></i> Delivery optimization tool</p>
            <p><i className="fas circleicon fa-check-circle"></i> Dynamic template editor </p>
            <p><i className="fas circleicon fa-check-circle"></i> Chat support</p>
            <p><i className="fas circleicon fa-check-circle"></i> Email Validation</p>
            <p><i className="fas circleicon fa-check-circle"></i>Advanced audience insight </p>
            <p><i className="fas circleicon fa-check-circle"></i>Behavioral targeting </p>
            <p><i className="fas circleicon fa-check-circle"></i>Insightful analytics </p>
            <p><i className="fas circleicon fa-check-circle"></i>Prioritized support</p>
            <p><i className="fas circleicon fa-check-circle"></i>Phone chat</p>
            <p><i className="fas circleicon fa-check-circle"></i>In-person interaction to specialist expert</p>
       </React.Fragment>
       }
       btn={<Pricingbtn/>}
       />

    

        </div>
    )
}
export default Pricing2;
