import React from 'react'
import './Contactt.css'
import Contact1 from './Contactt/contact1'
import { Formik } from 'formik'
import * as Yup from 'yup'
import FormField from './FormField'

 function Contactt() {
    return (
        <div className="contact">
    <div className="content-contact">
      <h2>Contact Us</h2>
      <p>
        We are absolutely glad to see you here. Kindly use the information
        below for further clarification about our services.
      </p>
    </div>
    <div className="container-contact">
      <div className="contactInfo">
      <Contact1
      icon={<i className="fa fa-map-marker" aria-hidden="true"></i>}
      contact="Address"
      contactdetail="20 B Peterson Drive, 405 Wuse Abuja Nigeria."
      />
      <Contact1
      icon={<i className="fa fa-phone" aria-hidden="true"></i>}
      contact="Phone"
      contactdetail="(+234) 813-539-8131"
      />
      <Contact1
      icon={<i className="fa fa-envelope-o" aria-hidden="true"></i>}
      contact="Email"
      contactdetail="info@martreach.com"
      />
      </div>
      <div className="contactForm">
        <Formik>
        {({values, errors, touched, handleChange, handleBlur, handleSubmit,isSubmitting})=>(
          <form>
          <h2>Send Message</h2>
          <div className="inputBox">
            <FormField
            type="text"
            name="name"
            required="required"/>
            <input    />
            <span>Full Name</span>
          </div>
          <div className="inputBox">
            <input type="text" name="" required="required" />
            <span>Email</span>
          </div>
          <div className="inputBox">
            <input type="text" name="" required="required" />
            <span>Phone</span>
          </div>
          <div className="inputBox">
            <textarea required="required"></textarea>
            <span>Type your Message...</span>
          </div>
          <div className="inputBox">
            <input type="submit" name="" value="Send" />
          </div>
        </form>)}
        </Formik>
        
      </div>
    </div>
  </div>

    )
}
export default Contactt;