import React from 'react'
import "./Aboutus1.css"
import Aboutus1b from './Aboutus1b'

 function About1() {
    return (
        <div className="who-we-are">
        <Aboutus1b
        mission="MISSION"
        missioninfo="Our mission has been to"
        />
        <Aboutus1b
         mission="MISSION"
         missioninfo="Our mission has been to "/>
        <Aboutus1b
        mission="OUR MARKETERS COME FIRST"
        missioninfo="We are a group of people devoted to seeing your business grow from the
        scratch."
        />
            
        </div>
    )
}
export default About1;