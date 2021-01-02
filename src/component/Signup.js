import React, {useEffect} from 'react';
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
    // confirmPassword: Yup.string()
    //     .required("Please confirm your password")
    //     .when("password", {
    //         is: password => (password && password.length > 0 ? true : false),
    //         then: Yup.string().oneOf([Yup.ref("password")], "Password doesn't match"),
                 
    //     })
});

// definig dispatch function
export default function Signup() {
  useEffect(() => {
    document.title = "MartReach | Boost your Digital Awareness"
});
   const dispatch=useDispatch()

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
      <Formik initialValues={initialValues}
      validationSchema = {validationSchema}
      onSubmit=
      {(values, { setSubmitting , resetForm}) => 
          {
            alert(JSON.stringify(values, null, 2));
            resetForm();
            dispatch(axios.post('https://martreach.herokuapp.com/api/users/signup',values))
            
            
            

            setTimeout(()=>{

              
              
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
  //     <h1 class="font-weight-bold">
  //       Welcome to <span
  //         style={{ color: "#8c30f5" }}>MartReach!</span>
  //     </h1>
  //     <h5>Register your account</h5>
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
          name="username"
          placeholder="enter your username"
          onChange={handleChange}
          value={values.username}
          onBlur={handleBlur}
          className={touched.username && errors.username ? "has-error" : "" }
       />
       <Errror
        touched={touched.username}
        message={errors.username}/>

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
          // value={values.confirmPassword}
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
    //  </Register>
    //    </div>
    //  </Main>
     )}
        </Formik>
        </Register>
       </div>
     </Main>
  )
};
 








     
//            <form onSubmit={formik.handleSubmit}>
//              <FormField
//                placeholder="First Name"
//                type="text"
//                name="firstName"
//                {...firstNameProps}
//              />
//              {formik.touched.firstName && formik.errors.firstName ? (
//                <Error>{formik.errors.firstName}</Error>
//              ) : null}
//              <FormField
//                placeholder="Last Name"
//                type="text"
//                name="lastName"
//                {...lastNameProps}
//              />
//              {formik.touched.lastName && formik.errors.lastName ? (
//                <Error>{formik.errors.lastName}</Error>
//              ) : null}
//              <FormField
//                placeholder="User Name"
//                type="text"
//                name="username"
//                {...usernameProps}
//              />
//              {formik.touched.username && formik.errors.username ? (
//                <Error>{formik.errors.username}</Error>
//              ) : null}
//              <FormField
//                placeholder="Email"
//                type="email"
//                name="email"
//                {...emailProps}
//              />
//              {formik.touched.email && formik.errors.email ? (
//                <Error>{formik.errors.email}</Error>
//              ) : null}
//              <FormField
//                placeholder="Password"
//                type="password"
//                name="password"
//                {...passwordProps}
//              />
//              {formik.touched.password && formik.errors.password ? (
//                <Error>{formik.errors.password}</Error>
//              ) : null}
//              <FormField
//                placeholder="Confirm Password"
//                type="password"
//                name="confirmPassword"
//                {...confirmPasswordProps}
//              />
//              {formik.touched.confirmPassword &&
//              formik.errors.confirmPassword ? (
//                <Error>{formik.errors.confirmPassword}</Error>
//              ) : null}
//              <Button
//                className="btn my-3"
//                type="submit"
//                disabled={!(formik.isValid && formik.dirty)}
//              >
//                Submit
//              </Button>
//              <Socials />
//            </form>
         
//    );
//  }






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
    
