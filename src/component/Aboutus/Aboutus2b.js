import React from 'react'
import "./Aboutus2b.css"

 function About2b(props) {
    return (
        <div className="Abtusimage">
        <img src={props.img} alt="Bravos"/>
        <p className="Abtus-name">{props.name}</p>
        <p className="Abtus-name-description">{props.namedescrip}</p>    
        </div>
    )
}
export default About2b;