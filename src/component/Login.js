import React, {useEffect} from 'react'
import { Formik, } from 'formik';
import * as Yup from 'yup';
import Formfield from './FormField';
import Errror from './error';
import {useSelector} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {useDispatch } from 'react-redux';
import axios from 'axios';
import {isLoggedin} from './actions/types';
import {Modal} from 'react-bootstrap'



 export const  Login =({show, close}) => {
  useEffect(() => {
    document.title = "MartReach | Boost your Digital Awareness"

});


 const isLogged=useSelector(state=>state.islogged); 
 const isshow=useSelector(state=>state.show) 
 const dispatch=useDispatch()

 if (isLogged) {
  return <Redirect to='/dashboard' />
}

 
    return (
      
        <React.Fragment>
   

     {/* <div 
     style={{
         transform: show ? "translateY(0vh)" : "translateY(-100vh)",
         opacity: show ? '1': '0',
         display: show ? 'block': 'none',
         position: show ? 'fixed': "",
         top: "0",
         left:'0',
         width:'100%',
         height:'100%',
         paddingRight:"19px",
        zIndex:"100000",
        overflowX: "hidden",
        overflowY: "auto",
        marginTop:"-1%",
        paddingRight:"19px",
        
     }}
     className="model-wrapper modal-fade" role="dialog" tabIndex="-1" aria-labelledby="signInLabel"
     aria-modal="true"> */}
          {/* <div className="modal-dialog">
            <div style={{
                  width:"93%",
                  height:"100vh"
              }} className="modal-content"> */}
              <Modal show={show}>
              <div className="login-modal-header modal-header">
                <h5 className="modal-title">Sign In</h5>
                  <button onClick={close} type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span onClick={close} aria-hidden="true">×</span>
                  </button>
               </div>
              <div  className="modal-body">
                 <div className="center-form" onsubmit=" return validate() ">
                   <div className="container d-flex justify-content-center .align-items-center">
                     <div className="register d-flex flex-column .align-items-center p-4">
                       <div className="signin d-flex justify-content-end align-items-center my-3">
                          Don't have an account yet?
                         <a className="ml-2" to="/">Sign Up</a>
                       </div>
                       <h1 className="login-title font-weight-bold">Welcome back to <span >MartReach!</span></h1>


              <Formik
              initialValues={{
                username:'',
                password:''
              }}
              onSubmit=
              {(values, { setSubmitting , resetForm}) => 
                  {
                    alert(JSON.stringify(values, null, 2));
                    resetForm();
                    dispatch(isLoggedin())
                    setSubmitting(false)
                    dispatch(axios.post('https://martreach.herokuapp.com/api/users/login',values),)
                    .then(res => {
                      console.log(res) 
                      console.log(res.data) 
                    })
                    
                    
                    
        
                   
                  }
              }


                validationSchema = {Yup.object().shape({
                username: Yup.string()
                      .min(3, 'Must be at least 3 characters')
                      .max(15, 'Must be 15 characters or less')
                      .required(' Username is required'),
              password: Yup.string()
              .required('password is required')
              .min(8, 'password is too short - should be 8 chars minimum.')
              .matches(/^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/, "Invalid Password"),
              })}>

{({ isSubmitting, values, errors, touched,handleChange,handleSubmit }) => (
              <form className="d-flex flex-column" onSubmit={handleSubmit}>
                          <p id="error" />
                            <div className="input-field my-4"><span>

                            <Formfield
                            placeholder="username"
                            className="d-block w-100"
                            type="text"
                            onChange={handleChange}
                            value={values.username}
                            name='username'   
                           />
                      <Errror
                            touched={touched.username}
                            message={errors.username}/>
                               </span>
                            </div>
                            <div className="input-field my-4"><span>
                            <Formfield
                            placeholder="password"
                            className="d-block w-100"
                            type="password"
                            name='password'
                            onChange={handleChange}
                            value={values.password}
                            />
                            <Errror
                            touched={touched.password}
                            message={errors.password}/>
                               {/* <input placeholder="password" className="d-block w-100" type="password" id="pass" /> */}
                                </span>
                               </div>
                            <div className="pass">
                              <a to="/"> Forgot password?</a>
                            </div>
                            <Formfield
                            // placeholder="password"
                            className="login-btn btn my-3"
                            type="submit"
                            id="Login"
                            defaultValue="Login"
                            
                            />
                            
                            {/* <input className="login-btn btn my-3" type="submit" id="Login"  /> */}
                            <div  className="signup_link">
                              Not a member? <a to="/">Signup</a>
                              <div className="create d-flex align-items-center mt-4">
                                Sign in with:
                                 <div className="socials d-flex align-items-center">
                                <a className="mx-3" to="/"><i className="fab fa-google" /></a>
                                <a className="mx-3" to="/"><i className="fab fa-facebook-f" /></a>
                                <a className="mx-3" to="/"><i className="fab fa-linkedin-in" /></a>
                                <a className="mx-3" to="/"><i className="fab fa-twitter" /></a>
                            </div>
                            </div>
                        </div>
                        </form>
                 )}
              </Formik>
                       
                    </div>
                    </div>
                </div>
               
                {/* </div>
            </div> */}
        {/* </div> */}
    {/* </div> */}
</div>
</Modal>



        
<style>
    {
        `.modal-header {
            background: blue;
            color: #fff;
          }
          
          .modal-header h1,
          h2,
          h3,
          h4,
          h5 {
            font-weight: bolder;
          }
          
          .modal-header button,
          .modal-header button:hover {
            color: #fff;
          }

        .model-wrapper{
            transition:all 1.3s ease!important;
        }
        `
    }
</style>
        </React.Fragment>
    )
}
