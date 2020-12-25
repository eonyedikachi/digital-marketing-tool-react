import React from 'react';
// import styled from 'styled-components'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import FormField from "./FormField";

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
    
 function Signup({ onSubmit }) {
   const formik = useFormik({
     initialValues,
     validationSchema,
     onSubmit,
   });

   const firstNameProps = formik.getFieldProps("firstName");
   const lastNameProps = formik.getFieldProps("lastName");
   const userNameProps = formik.getFieldProps("userName");
   const emailProps = formik.getFieldProps("email");
   const passwordProps = formik.getFieldProps("password");
   const confirmPasswordProps = formik.getFieldProps("confirmPassword");
   return (
     <form onSubmit={formik.handleSubmit}>
       <FormField
         label="First Name"
         type="text"
         name="firstName"
         {...firstNameProps}
       />
       {formik.touched.firstName && formik.errors.firstName ? (
         <div>{formik.errors.firstName}</div>
       ) : null}
       <FormField
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
     </form>
   );
 }

 export default Signup;
