import React, { useRef } from 'react';
import { render } from 'react-dom';
import { savetemplate } from './actions/types';
import {useDispatch } from 'react-redux'


import EmailEditor from 'react-email-editor';

    const Appp = (props) => {
        const emailEditorRef = useRef(null);
        const dispatch=useDispatch()
      
        const exportHtml = () => {
          emailEditorRef.current.editor.exportHtml((data) => {
            const { design, html } = data;
            dispatch(savetemplate)
            console.log( html);
          });
        };
      
        const onLoad = () => {
          // you can load your template here;
          // const templateJson = {};
          // emailEditorRef.current.editor.loadDesign(templateJson);
        };

        
    return (
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
            <div className="footer">
                <div className="back-footer">
                    <i className="fas fa-chevron-left"></i>
                    <input type="button"  value="Back"
                        className="back-button"/>
                </div>

                <div>
                    <input type="button" value="View saved templates" data-toggle="modal" data-target="#exampleModal"
                        className="button"/>
                    <i className="fas fa-chevron-right"></i>
                </div>
                </div>
            </div>
    </footer>
      </div>
    )
}
export default Appp