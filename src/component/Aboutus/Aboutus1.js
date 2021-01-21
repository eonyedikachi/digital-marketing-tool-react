import React from 'react'
import "./Aboutus1.css"
import Aboutus1b from './Aboutus1b'

 function About1() {
    return (
        <div className="who-we-are">
        {/* <Aboutus1b
        mission="MISSION"
        missioninfo="Our mission has been to"
        />
        <Aboutus1b
         mission="MISSION"
         missioninfo="Our mission has been to "/> */}
        <Aboutus1b
        mission="About us"
        missioninfo="Welcome to Martreach. At Matreach, we believe that every business owner can reach their audience no matter the distance. Our goal is to remove any technical barriers that can prevent business owners from reaching their audience.
        We created Martreach with the user’s perspective in mind. We are offering Matreach as a simple digital marketing platform that requires no coding skills. We have made it simple so that users can create amazing email content and landing pages and reach their audiences easily."
        />
            
        </div>
    )
}
export default About1;