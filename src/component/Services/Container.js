import React from 'react'
import Servicecontainer from './Card-comp'
import img1 from '../Images/boost-jet.png'
import img2 from '../Images/email-marketing-1.png'
import img3 from '../Images/seo-purple.jpg'
import './Container.css';


 function Container() {
    return (
       <div className="s-box-container">
           <Servicecontainer
          image={img2}
          service='Email Marketing'
          servicedetails='We offer Email Marketing tool to help you keep track on your Customers feedback and meet their needs at any
          point in time.'/>
          <Servicecontainer
          image={img1}
          service='Brand Boostings and Brand Awareness'
          servicedetails='We provide brand boosting tools to our registered customers.'/>
          <Servicecontainer
          image={img3}
          service='SEO Analytics'
          servicedetails=' Have a good track of your ROI by using some analytical tools embedded on your business.'/>
       </div>
    )
}
export default Container;