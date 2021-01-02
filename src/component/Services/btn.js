import React from 'react'
import './btn.css'
import {Link} from 'react-router-dom';

 function btn() {
    return (
        <React.Fragment>
        <Link to="/signup" className="service-btn">More</Link>
        </React.Fragment>
    )
}
export default btn;