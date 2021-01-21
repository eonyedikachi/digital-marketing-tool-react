import React from 'react'
import "./Aboutus1b.css"

 function About1b(props) {
    return (
      <div className="card Abtuscard margin-bottom">
        <h5 className="mission">
          <p>{props.mission}</p>
        </h5>
        <div className="carddiv missioninfo ">
          <p className="ml-1">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{props.missioninfo}
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{props.missioninf}
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{props.missionin}
          </p>
        </div>
      </div>
    );
}
export default About1b;