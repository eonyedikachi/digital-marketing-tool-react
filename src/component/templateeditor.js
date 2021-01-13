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
      
        const exportHtml = () => {
          emailEditorRef.current.editor.exportHtml((data) => {
            
            const { design, html } = data;
             


        
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
          <button className="btn-primary" onClick={exportHtml}>TAP TO Save</button>
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
                subscriberGroup:'',
              }}
                    onSubmit=
              {(values, { setSubmitting , resetForm}) => 
                  {
                    // alert('You have successfully created a group');
                    alert(JSON.stringify(values))
                    resetForm();
                    dispatch(axios.post('https://martreach.herokuapp.com/api/subscriberGroup',values),)     
                  }
              }>
{({ isSubmitting, values, errors, touched,handleChange,handleSubmit }) =>(
    <form className="subscribe" onSubmit={handleSubmit} >
    <div className="input-field my-4">
    <Formfield
        placeholder="Group  Name"
        name='subscriberGroup'
        type="text"
        onChange={handleChange}
        value={values.subscriberGroup}/>
   </div>
    <div className="input-field my-4">
    <Formfield
        type="Submit"
        onClick={()=> setShow(!show)}/>
        
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