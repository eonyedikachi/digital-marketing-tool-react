import React from 'react';
import styled from "styled-components";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import FormField from "./FormField";
import Socials from "./Socials"



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
       <div className="container d-flex justify-content-center .align-items-center">
         <Register className="register d-flex flex-column .align-items-center p-5">
           <Signin className="d-flex justify-content-end align-items-center my-3">
             Already have an account?
             <Button>Sign in</Button>
           </Signin>
           <h1 class="font-weight-bold">
             Welcome to <span
               style={{ color: "#8c30f5" }}>MartReach!</span>
           </h1>
           <h5>Register your account</h5>
           <form onSubmit={formik.handleSubmit}>
             <FormField
               placeholder="First Name"
               type="text"
               name="firstName"
               {...firstNameProps}
             />
             {formik.touched.firstName && formik.errors.firstName ? (
               <Error>{formik.errors.firstName}</Error>
             ) : null}
             <FormField
               placeholder="Last Name"
               type="text"
               name="lastName"
               {...lastNameProps}
             />
             {formik.touched.lastName && formik.errors.lastName ? (
               <Error>{formik.errors.lastName}</Error>
             ) : null}
             <FormField
               placeholder="User Name"
               type="text"
               name="userName"
               {...userNameProps}
             />
             {formik.touched.userName && formik.errors.userName ? (
               <Error>{formik.errors.userName}</Error>
             ) : null}
             <FormField
               placeholder="Email"
               type="email"
               name="email"
               {...emailProps}
             />
             {formik.touched.email && formik.errors.email ? (
               <Error>{formik.errors.email}</Error>
             ) : null}
             <FormField
               placeholder="Password"
               type="password"
               name="password"
               {...passwordProps}
             />
             {formik.touched.password && formik.errors.password ? (
               <Error>{formik.errors.password}</Error>
             ) : null}
             <FormField
               placeholder="Confirm Password"
               type="password"
               name="confirmPassword"
               {...confirmPasswordProps}
             />
             {formik.touched.confirmPassword &&
             formik.errors.confirmPassword ? (
               <Error>{formik.errors.confirmPassword}</Error>
             ) : null}
             <Button
               className="btn my-3"
               type="submit"
               disabled={!(formik.isValid && formik.dirty)}
             >
               Submit
             </Button>
             <Socials />
           </form>
         </Register>
       </div>
     </Main>
   );
 }

 export default Signup;
