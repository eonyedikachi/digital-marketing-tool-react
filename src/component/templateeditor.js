import React, { useRef,useState } from 'react';
import { savetemplate } from './actions/types';
import {useDispatch } from 'react-redux'
import {useHistory } from 'react-router'

import './layout/Header.css';
import {Modal} from 'react-bootstrap';
import Formfield from './FormField'
import { Formik, } from 'formik';
import axios from 'axios';


import EmailEditor from 'react-email-editor';

    const Appp = (props) => {
        const emailEditorRef = useRef(null);
        const dispatch=useDispatch()
        const history=useHistory()
        const [show, setShow] = useState(false);
        const [name, setName] = useState("");
      
        const exportHtml = () => {
          emailEditorRef.current.editor.exportHtml((data) => {
            
            const { design, html } = data;
            console.log('exportHtml', design);

             alert("saving")
             alert(name)
             const image={
              name,
              design,
              html

             }
             alert(JSON.stringify(image))

             



             axios
             .post('https://martreach.herokuapp.com/api/emailTemplates',{ 
             headers:{'Content-Type': 'application/json' , Authorization: ' Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjozLCJmaXJzdE5hbWUiOiJFa2VzbyIsImxhc3ROYW1lIjoiTG9uZ2UiLCJ1c2VybmFtZSI6ImVrZXNvbG9uZ2UiLCJ0ZWwiOiIwODA2MzgzODc0NSIsImVtYWlsIjoiYnVoYXJpQGdtYWlsLmNvbSIsIndlYnNpdGUiOiJ3d3cuZWtlc29sb25nZS5jb20iLCJwaWN0dXJlIjoidXBsb2Fkcy9pbWFnZXMvMTYwNzk0ODkyNjA1OS5qcGciLCJvdHAiOiIiLCJpc0VuYWJsZWQiOiJ0cnVlIiwiZGF0ZUNyZWF0ZWQiOiIyMDIwLTEyLTE1VDEwOjIyOjIxLjAwMFoiLCJyb2xlSWQiOjMsInVzZXJJZCI6MTEsInBlcm1pc3Npb25zIjpbeyJwZXJtaXNzaW9uTmFtZSI6ImFkZF91c2VyIiwiZ3JvdXBOYW1lIjoidXNlcl9tYW5hZ2VtZW50In0seyJwZXJtaXNzaW9uTmFtZSI6ImVkaXRfdXNlciIsImdyb3VwTmFtZSI6InVzZXJfbWFuYWdlbWVudCJ9LHsicGVybWlzc2lvbk5hbWUiOiJ2aWV3X3VzZXIiLCJncm91cE5hbWUiOiJ1c2VyX21hbmFnZW1lbnQifSx7InBlcm1pc3Npb25OYW1lIjoiZGVsZXRlX3VzZXIiLCJncm91cE5hbWUiOiJ1c2VyX21hbmFnZW1lbnQifSx7InBlcm1pc3Npb25OYW1lIjoiYWRkX3JvbGUiLCJncm91cE5hbWUiOiJyb2xlX21hbmFnZW1lbnQifSx7InBlcm1pc3Npb25OYW1lIjoiZWRpdF9yb2xlIiwiZ3JvdXBOYW1lIjoicm9sZV9tYW5hZ2VtZW50In0seyJwZXJtaXNzaW9uTmFtZSI6InZpZXdfcm9sZSIsImdyb3VwTmFtZSI6InJvbGVfbWFuYWdlbWVudCJ9LHsicGVybWlzc2lvbk5hbWUiOiJkZWxldGVfcm9sZSIsImdyb3VwTmFtZSI6InJvbGVfbWFuYWdlbWVudCJ9LHsicGVybWlzc2lvbk5hbWUiOiJhZGRfcGVybWlzc2lvbiIsImdyb3VwTmFtZSI6InBlcm1pc3Npb25fbWFuYWdlbWVudCJ9LHsicGVybWlzc2lvbk5hbWUiOiJlZGl0X3Blcm1pc3Npb24iLCJncm91cE5hbWUiOiJwZXJtaXNzaW9uX21hbmFnZW1lbnQifSx7InBlcm1pc3Npb25OYW1lIjoidmlld19wZXJtaXNzaW9uIiwiZ3JvdXBOYW1lIjoicGVybWlzc2lvbl9tYW5hZ2VtZW50In0seyJwZXJtaXNzaW9uTmFtZSI6ImRlbGV0ZV9wZXJtaXNzaW9uIiwiZ3JvdXBOYW1lIjoicGVybWlzc2lvbl9tYW5hZ2VtZW50In1dfSwiaWF0IjoxNjEwNTUzODUyLCJleHAiOjE2MTA1NTc0NTJ9.fRDxIIq1EjWSuX4ZXmSiElJ_p6hi_RhMwH8Wtv7_c74' },
            data: {
                'tempName': name,
                'json': design,
                'html': html
            }
             }
             )








            // dispatch(savetemplate(design))
            // console.log( html);
            // IQQY9yYHEO4BQZG7cDu00qownOld7LNkhDi7CkPGJrr4zpizjF5xwKUQp6Nj7CBi
          
          });


        };
      
        const onLoad = () => {
          // you can load your template here;
          // const templateJson = {};
          // emailEditorRef.current.editor.loadDesign(templateJson);
        };

        
    return (
      <>
        <div>
        <div>
          {/* <button className="btn-primary" >TAP TO Save</button> */}
          <button className="btn-primary" onClick={()=> setShow(!show)}>Enter Name</button>
        </div>
        {/* <button className="btn-primary" onClick={dispatch}>dispatch</button> */}
        
        <EmailEditor
          ref={emailEditorRef}
          onLoad={onLoad}
        />
        <footer>
        <div className="container">
            <div className="footer .dash-footer">
                <div onClick={()=> history.push("/dashboard/")}>
                    <i className="fas fa-chevron-left"></i>
                    <input type="button"  value="Back"
                        className="back-button"/>
                </div>

                <div onClick={()=> history.push("/dashboard/savedlp")}>
                    <input type="button" value="View saved templates"
                        className=""/>
                    <i className="fas fa-chevron-right"></i>
                </div>
                </div>
            </div>
    </footer>
      </div>

      <Modal show={show} onHide={()=>setShow(false)}>
    <Modal.Header closeButton style={{fontSize:'18px', fontWeight:'900'}} >
       
    </Modal.Header>
    <Modal.Body>
    <Formik
              initialValues={{
                name:'',
              }}
                    onSubmit=
              {(values, { setSubmitting , resetForm}) => 
                  {
                    alert(JSON.stringify(values))
                    setName(values.name)
                    setShow(!show)     
                  }
              }>
{({ isSubmitting, values, errors, touched,handleChange,handleSubmit }) =>(
    <form className="subscribe" onSubmit={handleSubmit} >
    <div className="input-field my-4">
    <Formfield
        placeholder="Enter  Name"
        name='name'
        type="text"
        onChange={handleChange}
        value={values.name}/>
   </div>
    <div className="input-field my-4">
    <Formfield
        type="Submit"
        value="Save template"
        onClick={()=> setShow(!show), exportHtml}/>
        
   </div>
  </form>
        
        )}
        
        </Formik>
    </Modal.Body>
    <Modal.Footer>

    </Modal.Footer>

    </Modal>
      </>
    )
}
export default Appp