import React from 'react'
import Formfield from './FormField';
import { Formik, } from 'formik';
import axios from 'axios';
import {useDispatch } from 'react-redux';

export default function Emailsub() {
    const dispatch=useDispatch()

    return (
        <>
        <Formik
              initialValues={{
                email:'',
              }}
                    onSubmit=
              {(values, { setSubmitting , resetForm}) => 
                  {
                    alert('You have subscribed to MartReach newsletter successfully');
                    resetForm();
                    dispatch(axios.post('https://martreach.herokuapp.com/api/newsletter',values),)     
                  }
              }>
{({ isSubmitting, values, errors, touched,handleChange,handleSubmit }) =>(
    <form className="subscribe" onSubmit={handleSubmit} >
    <Formfield
        placeholder="Enter Email Address"
        name='email'
        type="email"
        onChange={handleChange}
        value={values.email}/>
    {/* <input type="email" name="email" id="footerEmail" placeholder="Enter Email Address" required /> */}
    <i className="fas fa-paper-plane"><input type="submit"/></i>
  </form>
        
        )}
        {/* //   <input type="email" name="email" id="footerEmail" placeholder="Enter Email Address" required />  */}
        </Formik>
        </>

    )
        
}
