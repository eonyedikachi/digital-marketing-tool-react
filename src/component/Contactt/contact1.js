import React from 'react'
import "./contactt1.css"

 function Contact(props) {
    return (
        <div className="box-contact">
<div className="icon">
  {props.icon}
</div>
<div className="text">
  <h3>{props.contact}</h3>
  <p>{props.contactdetail}</p>
</div>
</div>
    )
}
export default Contact;