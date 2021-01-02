import React from 'react';
import styled from "styled-components";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import FormField from "./FormField";


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
// const Button = styled.button:hover`
//   background: #5f1eaa;
// `;


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
     <Main>
       <form onSubmit={formik.handleSubmit}>
         <FormField
           label="First Name"
           type="text"
           name="firstName"
           {...firstNameProps}
         />
         {formik.touched.firstName && formik.errors.firstName ? (
           <Error>{formik.errors.firstName}</Error>
         ) : null}
         <FormField
           label="Last Name"
           type="text"
           name="lastName"
           {...lastNameProps}
         />
         {formik.touched.lastName && formik.errors.lastName ? (
           <Error>{formik.errors.lastName}</Error>
         ) : null}
         <FormField
           label="User Name"
           type="text"
           name="userName"
           {...userNameProps}
         />
         {formik.touched.userName && formik.errors.userName ? (
           <Error>{formik.errors.userName}</Error>
         ) : null}
         <FormField
           label="Email"
           type="email"
           placeholder="Please Enter your email"
           {...emailProps}
         />
         {formik.touched.email && formik.errors.email ? (
           <Error>{formik.errors.email}</Error>
         ) : null}
         <FormField
           label="Password"
           type="password"
           placeholder="Please Enter your password"
           {...passwordProps}
         />
         {formik.touched.password && formik.errors.password ? (
           <Error>{formik.errors.password}</Error>
         ) : null}
         <FormField
           label="Confirm Password"
           type="password"
           placeholder="Please Confirm your password"
           {...confirmPasswordProps}
         />
         {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
           <Error>{formik.errors.confirmPassword}</Error>
         ) : null}
         <Button type="submit" disabled={!(formik.isValid && formik.dirty)}>
           Submit
         </Button>
       </form>
     </Main>
   );
 }

 export default Signup;
