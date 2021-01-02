import React, {useEffect} from 'react'

 export const  Login =({show, close}) => {
  useEffect(() => {
    document.title = "MartReach | Boost your Digital Awareness"
});
    return (
        <React.Fragment>
    
     <div 
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
     aria-modal="true">
          <div className="modal-dialog">
            <div style={{
                  width:"93%",
                  height:"100vh"
              }} className="modal-content">
              <div className="login-modal-header modal-header">
                <h5 className="modal-title">Sign In</h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span onClick={close} aria-hidden="true">×</span>
                  </button>
               </div>
              <div  className="modal-body">
                 <div className="center-form" onsubmit=" return validate() ">
                   <div className="container d-flex justify-content-center .align-items-center">
                     <div className="register d-flex flex-column .align-items-center p-4">
                       <div className="signin d-flex justify-content-end align-items-center my-3">
                          Don't have an account yet?
                         <a className="ml-2" href="./register.html">Sign Up</a>
                       </div>
                       <h1 className="login-title font-weight-bold">Welcome back to <span>MartReach!</span></h1>
                       <form className="d-flex flex-column" onsubmit="validate()">
                          <p id="error" />
                            <div className="input-field my-4"><span>
                               <input placeholder="Username" className="d-block w-100" type="text" id="use" />
                               </span>
                            </div>
                            <div className="input-field my-4"><span>
                               <input placeholder="Password" className="d-block w-100" type="password" id="pass" />
                                </span>
                               </div>
                            <div className="pass">
                              <a href="forgotpassword.html"> Forgot Password?</a>
                            </div>
                            <input className="login-btn btn my-3" type="submit" id="Login" defaultValue="Login" />
                            <div className="signup_link">
                              Not a member? <a href="./register.html">Signup</a>
                              <div className="create d-flex align-items-center mt-4">
                                Sign in with:
                                 <div className="socials d-flex align-items-center">
                                <a className="mx-3" href="#"><i className="fab fa-google" /></a>
                                <a className="mx-3" href="#"><i className="fab fa-facebook-f" /></a>
                                <a className="mx-3" href="#"><i className="fab fa-linkedin-in" /></a>
                                <a className="mx-3" href="#"><i className="fab fa-twitter" /></a>
                            </div>
                            </div>
                        </div>
                        </form>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    {/* </div> */}
</div>


        
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
