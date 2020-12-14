import React from 'react'
import './Card-comp.css'
import Btn from './btn'

 function Cardcomp(props) {
    return (
        <div className="s-box">
        <div className="s-bar"></div>
        <img src={props.image} alt="1"/>
        <h1> {props.service}</h1>
        <p>  {props.servicedetails}</p>
        <Btn/>
      </div>
    )
}
export default Cardcomp;