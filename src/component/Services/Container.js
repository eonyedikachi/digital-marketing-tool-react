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
          servicedetails='We provide brand boosting tools like our digital campaign feature to our registered users to help grow their Audience.'/>
          <Servicecontainer
          image='https://99designs-blog.imgix.net/blog/wp-content/uploads/2020/05/What_is_digital_design_jpg_4vA_K_bM-700x410.jpg?auto=format&q=60&fit=max&w=930'
          service='Template Editors'
          servicedetails='We provide dynamic and user friendly template editors to help produce appealing and compeling designs '/>
       </div>
    )
}
export default Container;