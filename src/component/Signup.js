import React,{useEffect} from 'react';
// import styled from 'styled-components'
import { Formik } from 'formik';
import * as Yup from 'yup';
import FormField from "./FormField";
import {SignUp} from "./actions/types";
import {useDispatch } from 'react-redux'
import Errror from './error'


const initialValues = {
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
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
    userName: Yup.string()
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
    confirmPassword: Yup.string()
        .required("Please confirm your password")
        .when("password", {
            is: password => (password && password.length > 0 ? true : false),
            then: Yup.string().oneOf([Yup.ref("password")], "Password doesn't match"),
                 
        })
});

// definig dispatch function
export default function Signup() {
   const dispatch=useDispatch()

  return (
      <Formik initialValues={initialValues}
      validationSchema = {validationSchema}
      onSubmit=
      {(values, { setSubmitting , resetForm}) => 
          {
            dispatch(SignUp(values))
            

            setTimeout(()=>{
               alert(JSON.stringify(values, null, 2));
               resetForm();
               setSubmitting(false)
            },1000)
          }
      }>

{({values, errors, touched, handleChange, handleBlur, handleSubmit,isSubmitting})=>(
     <form onSubmit={handleSubmit}>
        <FormField
         type="text"
          name="firstName"
          placeholder="enter your first name"
          onChange={handleChange}
          value={values.firstName}
          onBlur={handleBlur}
          className={touched.firstName && errors.firstName ? "has-error" : "" }
       />
       <Errror
        touched={touched.firstName}
        message={errors.firstName}/>
        <FormField
         type="text"
          name="lastName"
          placeholder="enter your last name"
          onChange={handleChange}
          value={values.lastName}
          onBlur={handleBlur}
          className={touched.lastName && errors.lastName ? "has-error" : "" }
       />
       <Errror
        touched={touched.lastName}
        message={errors.lastName}/>
    
        <FormField
         type="text"
          name="userName"
          placeholder="enter your username"
          onChange={handleChange}
          value={values.userName}
          onBlur={handleBlur}
          className={touched.userName && errors.userName ? "has-error" : "" }
       />
       <Errror
        touched={touched.userName}
        message={errors.userName}/>

        <FormField
         type="text"
          name="email"
          placeholder="enter your email"
          onChange={handleChange}
          value={values.email}
          onBlur={handleBlur}
          className={touched.email && errors.email ? "has-error" : "" }
       />
       <Errror
        touched={touched.email}
        message={errors.email}/>


        <FormField
          name="password"
          placeholder="enter your password"
          onChange={handleChange}
          value={values.password}
          onBlur={handleBlur}
          className={touched.password && errors.password ? "has-error" : "" }
       />
       <Errror
        touched={touched.password}
        message={errors.password}/>


        <FormField
          name="confirmPassword"
          placeholder="confirm password"
          onChange={handleChange}
          value={values.confirmPassword}
          onBlur={handleBlur}
          className={touched.confirmPassword && errors.confirmPassword ? "has-error" : "" }
       />
       <Errror
        touched={touched.confirmPassword}
        message={errors.confirmPassword}/>

    
       
       <div className="input-row">
             <button type="Submit" disabled={isSubmitting}>Submit</button>
         </div>
         
     </form>
     )}
        </Formik>
  )
};
 











//  export default function formik() {
//   return (
//       <Formik initialValues={initialValues}
//       validationSchema = {validationSchema}
//       onSubmit=
//       {(values, { setSubmitting , resetForm}) => 
//           {
//             setSubmitting(true)

//             setTimeout(()=>{
//                alert(JSON.stringify(values, null, 2));
//                resetForm();
//                setSubmitting(false)
//             },1000)
//           }
//       }>

//       {({values, errors, touched, handleChange, handleBlur, handleSubmit,isSubmitting})=>(
//        <form onSubmit={handleSubmit}>
//        <div className="input-row">
//        <label htmlFor="name">name</label>
//        <input
//        type="text"
//        name="name"
//        id="name"
//        placeholder="enter your name"
//        onChange={handleChange}
//        value={values.name}
//        onBlur={handleBlur}
//        className={touched.name && errors.name ? "has-error" : "greatq" }
//        />
//        <Errror
//        touched={touched.name}
//        message={errors.name}/>
//        </div>




/* <form onSubmit={formik.handleSubmit}> */






       /* <FormField
         label="Last Name"
         type="text"
         name="lastName"
         {...lastNameProps}
       />
       {formik.touched.lastName && formik.errors.lastName ? (
         <div>{formik.errors.lastName}</div>
       ) : null}
       <FormField
         label="User Name"
         type="text"
         name="userName"
         {...userNameProps}
       />
       {formik.touched.userName && formik.errors.userName ? (
         <div>{formik.errors.userName}</div>
       ) : null}
       <FormField
         label="Email"
         type="email"
         placeholder="Please Enter your email"
         {...emailProps}
       />
       {formik.touched.email && formik.errors.email ? (
         <div>{formik.errors.email}</div>
       ) : null}
       <FormField
         label="Password"
         type="password"
         placeholder="Please Enter your password"
         {...passwordProps}
       />
       {formik.touched.password && formik.errors.password ? (
         <div>{formik.errors.password}</div>
       ) : null}
       <FormField
         label="Confirm Password"
         type="password"
         placeholder="Please Confirm your password"
         {...confirmPasswordProps}
       />
       {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
         <div>{formik.errors.confirmPassword}</div>
       ) : null}
       <button type="submit" disabled={!(formik.isValid && formik.dirty)}>
         Submit
       </button>
     </form> */





        /* <div className="input-row">
        <label htmlFor="name">email</label>
        <input */
//        type="text"
//        name="email"
//        id="email"
//        placeholder="enter your email"
//        onChange={handleChange}
//        value={values.email}
//        onBlur={handleBlur}
//        className={touched.email && errors.email ? "has-error" : "null" }
//        />
//        <Errror
//        touched={touched.email}
//        message={errors.email}/>
//        </div>
//        <style>
//           {
//               `
//               .has-error
//               {
//                   border-color:red;
//               }
                      
//               `

              
//           }
//        </style>

//        <div className="input-row">
//            <button type="Submit" disabled={isSubmitting}>Submit</button>
//        </div>
       
//    </form>
//       )}
//       </Formik>
//   );
// }
    
