import React from 'react';
import PropTypes from 'prop-types';
import BB from './BB.css';
import {Link} from 'react-router-dom'

function BBtn(){
    return(
        <Link to="/login"><button class="btn get-started my-4">Get Started</button></Link >
    )
}
export default BBtn