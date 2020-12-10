import React from 'react';
import './LLP2.css';
import {Link} from 'react-router-dom';

 function LLP2() {
    return (
        <div>
            <div className="left">
      <p>Reach out to Your <br />Targeted Audience</p>
      <p>
        We can help you reach out to more customers,<br />
        by using our platform your required audience <br />
        is at your door step. <Link to="/about">Learn More</Link>
      </p>
    </div>
        </div>
    )
}
export default LLP2;