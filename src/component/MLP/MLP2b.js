import React from 'react'
import "./MLP2b.css"
import MLP2a from "./MLP2a"

 function MLP2b() {
    return (
    <div className='growth bottom'>
        <div className="box">
      <i className="fas fa-chart-bar"></i>
      <MLP2a
      services="Sales Growth"
      welcomeinfo=" We help you reach more audience and grow your sales very fast and
      effectively"/>
     </div>
        <div className="box">
        <i className="fas fa-cog"></i>
      <MLP2a
      services="Site Optimizing"
      welcomeinfo="We provide best service to grow your sales and reach out to more target
      audience and have control over your designs"/>
     </div>
        <div className="box">
        <i className="fas fa-volume-up"></i>
      <MLP2a
      services="Marketing"
      welcomeinfo=" With our tools and strategy your audience are ever close to your
      business than ever"/>
     </div>
        <div className="box">
        <i className="fas fa-headset"></i>
      <MLP2a
      services="Support"
      welcomeinfo="Our customer relation expertise are ready to talk to you 24/7. Reach
      out"/>
     </div>
        </div>
    )
}
export default MLP2b;