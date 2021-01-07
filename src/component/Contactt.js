import React from 'react'
import './Contactt.css'
import Contact1 from './Contactt/contact1'
import { Formik } from 'formik'
import * as Yup from 'yup'
import FormField from './FormField'
import Errror from './error'
import axios from 'axios'
import {useDispatch } from 'react-redux';
import Header from '../component/layout/Header';
import Footer from '../component/layout/Footer';


 function Contactt() {
  const dispatch=useDispatch()
    return (
      <>
      <Header/>
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
        <Formik
        initialValues={{
          name:'',
          email:'',
          tel:'',
          message:''

        }}

        onSubmit=
              {(values, { setSubmitting , resetForm}) => 
                  {
                    alert(JSON.stringify(values, null, 2));
                    dispatch(axios.post('https://martreach.herokuapp.com/api/contactUs',values),)
                    
                  }}


        validationSchema = {Yup.object().shape({
          email: Yup.string()
          .email('Invalid email address')
          .required('Required'),
        })}
        >
        {({values, errors, touched, handleChange, handleSubmit,isSubmitting})=>(
          <form onSubmit={handleSubmit}>
          <h2>Send Message</h2>
          <div className="inputBox">
            <FormField
            type="text"
            onChange={handleChange}
            name="name"
            value={values.name}
            placeholder='Full Name'/>
          </div>
          <div className="inputBox">
          <FormField
            type="email"
            onChange={handleChange}
            name="email"
            value={values.email}
            placeholder='Email'/>
          </div>
          <Errror
          touched={touched.email}
          message={errors.email}/>

          <div className="inputBox">
          <FormField
            type="text"
            onChange={handleChange}
            name="tel"
            value={values.tel}
            placeholder='phone'/>
          </div>
          <div className="inputBox">
          <FormField
            type="text"
            name="message"
            onChange={handleChange}
            value={values.message}
            placeholder='Type your Message...'/>
            
          </div>
          <div className="inputBox">
          <FormField
            type="submit"
            name="name"
            value="Send"
            />
          </div>
        </form>)}
        </Formik>
        
      </div>
    </div>
  </div>
  <Footer/>
</>
    )
}
export default Contactt;