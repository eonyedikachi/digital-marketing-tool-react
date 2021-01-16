import React from 'react';
import './pricing2.css';
import Pricing1 from './pricing1';
import {Link} from 'react-router-dom';
import Pricingbtn from './pricingbtn'


 function Pricing2() {
    return (
        <div className="row p-3 roww">
       <Pricing1
       package="FREE"
       amount="₦0"
       intro="Gives all the basics required to set up your business and grow"
       icons = 
       {<React.Fragment>
        <p><i className="fas circleicon fa-check-circle"></i> Create email template</p>
       <p><i className="fas circleicon fa-check-circle"></i> Create business landing page</p>
       <p><i className="fas circleicon fa-check-circle"></i> Dynamic template editor </p>
       <p><i className="fas circleicon fa-check-circle"></i> Sticky notes </p>
       </React.Fragment>
       }
       btn={<button className="btnn btn btn-outline-dark btn-lg btn-block btn-one"><Link to="#">SIGN UP</Link></button>}
       />

    
    
       
       <Pricing1
       package="PREMIUM"
       amount=" ₦500"
       intro="Get better insight into growing your business that to create more customer base"
       icons = 
       {<React.Fragment>
        <p><i className="fas circleicon fa-check-circle"></i> Create email template</p>
            <p><i className="fas circleicon fa-check-circle"></i> Create business landing page</p>
            <p><i className="fas circleicon fa-check-circle"></i> Dynamic template editor </p>
            <p><i className="fas circleicon fa-check-circle"></i> Sticky notes </p>
            <p><i className="fas circleicon fa-check-circle"></i> Chat support</p>         
            <p><i className="fas circleicon fa-check-circle"></i>Create digital product campaign </p>
            <p><i className="fas circleicon fa-check-circle"></i>Prioritized support</p>
            <p><i className="fas circleicon fa-check-circle"></i>Phone chat</p>
            <p><i className="fas circleicon fa-check-circle"></i> Sticky notes </p>
            <p><i className="fas circleicon fa-check-circle"></i>Form builder feature</p>
            
       </React.Fragment>
       }
       btn={<Pricingbtn/>}
       />

    

        </div>
    )
}
export default Pricing2;
