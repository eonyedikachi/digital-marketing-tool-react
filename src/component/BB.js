import React from 'react';
// import PropTypes from 'prop-types';
import  './BB.css';
import {Link} from 'react-router-dom'
import Button from './genbutton'

function BBtn(){
    return(
        <Link to="/signup">< Button  className="btn get-started my-4"
                          content="Get Started"/></Link >
    )
}
export default BBtn