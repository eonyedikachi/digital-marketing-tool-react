import React from 'react';
import './Signup.css'
// import styled from 'styled-components'
import styled from "styled-components";
import { Formik } from 'formik';
import * as Yup from 'yup';
import FormField from "./FormField";
import {SignUp} from "./actions/types";
import {useDispatch } from 'react-redux'
import Errror from './error'
// import Socials from "./Socials"
import axios from 'axios'
import Header from '../component/layout/Header';
import Footer from '../component/layout/Footer';
import { useHistory } from "react-router-dom";










const Register = styled.div`
  width: 70%;
  border-radius: 10px;
  background: #ffffff;
`;
const Signin = styled.div`
  color: #8c30f5;
`;
const Error = styled.div`
  color: red;
  text-align: center;
  justify-items: center;
  align-items: center;
  font-weight: 900;
`;
const Main = styled.main`
  background: #8c30f51a;
  padding-top: 4rem;
  padding-bottom: 10rem;
`;
const Button = styled.button`
background: #8c30f5;
  color: #fff;
  align-self: center;
  width: 40%;
`;




const initialValues = {
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
};
const validationSchema = Yup.object().shape({
    firstName: Yup.string()
        .min(3, 'Must be at least 3 characters')
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
    lastName: Yup.string()
        .min(3, 'Must be at least 3 characters')
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
    username: Yup.string()
        .min(3, 'Must be at least 3 characters')
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
    email: Yup.string()
        .email('Invalid email address')
        .required('Required'),
    password: Yup.string()
        .required('Password is required')
        .min(8, 'Password is too short - should be 8 chars minimum.')
        .matches(/^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/, "Password must contain at least 8 characters, one uppercase, one number and one special case character"),
    
});

// definig dispatch function
export default function Signup() {
   const dispatch=useDispatch()
   const history = useHistory()
  return (
    <>
    <Header/>
    <Main>
       <div className="container d-flex justify-content-center .align-items-center">
         <Register className="register d-flex flex-column .align-items-center p-5">
           <Signin className="d-flex justify-content-end align-items-center my-3">
             Already have an account?
             <a className="SIGNIN">..Sign In</a>
           </Signin>
           <h1 className="font-weight-bold">
             Welcome to <span
               style={{ color: "#8c30f5" }}>MartReach!</span>
           </h1>
           <h5>Register your account</h5>
      <Formik initialValues={initialValues}
      validationSchema = {validationSchema}
      onSubmit=
      {(values, { setSubmitting , resetForm}) => 
          {
            resetForm()
            setSubmitting(false)
            history.push("/Mailbox")
            dispatch(axios.post('https://martreach.herokuapp.com/api/users/signup',values))
            
            
            

            setTimeout(()=>{

               alert(JSON.stringify(values, null, 2));
               resetForm();
               setSubmitting(false)
            },1000)
          }
      }>

{({values, errors, touched, handleChange, handleBlur, handleSubmit,isSubmitting})=>(
  // <Main>
  // <div className="container d-flex justify-content-center .align-items-center">
  //   <Register className="register d-flex flex-column .align-items-center p-5">
  //     <Signin className="d-flex justify-content-end align-items-center my-3">
  //       Already have an account?
  //       <Button>Sign in</Button>
  //     </Signin>
  //     <h1 className="font-weight-bold">
  //       Welcome to <span
  //         style={{ color: "#8c30f5" }}>MartReach!</span>
  //     </h1>
  //     <h5>Register your account</h5>
     <form onSubmit={handleSubmit}>
       <div className="input-field my-4">
        <FormField
         type="text"
          name="firstName"
          placeholder=" First name"
          onChange={handleChange}
          value={values.firstName}
          onBlur={handleBlur}
          className={touched.firstName && errors.firstName ? "has-error" : "" }
       /></div>


       <Errror
        touched={touched.firstName}
        message={errors.firstName}/>


        <div className="input-field my-4">
        <FormField
         type="text"
          name="lastName"
          placeholder="Last name"
          onChange={handleChange}
          value={values.lastName}
          onBlur={handleBlur}
          className={touched.lastName && errors.lastName ? "has-error" : "" }
       />
       <Errror
        touched={touched.lastName}
        message={errors.lastName}/></div>

        <FormField
         type="text"
          name="username"
          placeholder="Username"
          onChange={handleChange}
          value={values.username}
          onBlur={handleBlur}
          className={touched.username && errors.username ? "has-error" : "" }
       />
       <Errror
        touched={touched.username}
        message={errors.username}/>


        <div className="input-field my-4">
        <FormField
         type="text"
          name="email"
          placeholder="example@email.com"
          onChange={handleChange}
          value={values.email}
          onBlur={handleBlur}
          className={touched.email && errors.email ? "has-error" : "" }
       />
       <Errror
        touched={touched.email}
        message={errors.email}/></div>

<div className="input-field my-4">
        <FormField
          name="password"
          placeholder="Password"
          onChange={handleChange}
          value={values.password}
          onBlur={handleBlur}
          type="password"
          className={touched.password && errors.password ? "has-error" : "" }
       />
       <Errror
        touched={touched.password}
        message={errors.password}/></div>


<div className="input-field my-4 ">
       <div className="input-row registerbtncont ">
             <button className='registerbtn'  type="Submit" >Register</button>
         </div></div>
         
     </form>
     )}
        </Formik>
        <div className="create d-flex align-items-center mt-4">
          Create account with:
          <div className="socials d-flex align-items-center">
            <a className="mx-3" href="#"><i className="fab fa-google"></i></a>
            <a className="mx-3" href="#"><i className="fab fa-facebook-f"></i></a>
            <a className="mx-3" href="#"><i className="fab fa-linkedin-in"></i></a>
            <a className="mx-3" href="#"><i className="fab fa-twitter"></i></a>
          </div>
        </div>
        </Register>
        
       </div>
     </Main>
     <Footer/>
     </>
  )
};