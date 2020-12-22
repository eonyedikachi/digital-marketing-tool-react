import React from 'react'
import About1 from './Aboutus/Aboutus1'
import About2 from './Aboutus/Aboutus2'
import "./Aboutus.css"

 function About() {
    return (
        <div className="abtusscontainer">
        <div className="About">
             <h2 className="Aboutheading">Who we are</h2>
             <About1/>
             <About2/>
            
        </div>
        </div>
    )
}
export default About;