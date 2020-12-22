import React from 'react'
import "./Aboutus1b.css"

 function About1b(props) {
    return (
        <div className="card Abtuscard margin-bottom">
        <h5 className="mission">{props.mission}</h5>
        <div className="carddiv">
          <p>{props.missioninfo}</p>
        </div>
      </div>
    )
}
export default About1b;