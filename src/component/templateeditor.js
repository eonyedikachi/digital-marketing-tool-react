import React, { useRef } from 'react';
import { savetemplate } from './actions/types';
import {useDispatch } from 'react-redux'
import {useHistory } from 'react-router'


import EmailEditor from 'react-email-editor';

    const Appp = (props) => {
        const emailEditorRef = useRef(null);
        const dispatch=useDispatch()
        const history=useHistory()
        
      
        const exportHtml = () => {
          emailEditorRef.current.editor.exportHtml((data) => {
            
            const { design, html } = data;

            // dispatch(savetemplate(design))
            // console.log( html);
            // IQQY9yYHEO4BQZG7cDu00qownOld7LNkhDi7CkPGJrr4zpizjF5xwKUQp6Nj7CBi
            

            const token = Buffer.from("IQQY9yYHEO4BQZG7cDu00qownOld7LNkhDi7CkPGJrr4zpizjF5xwKUQp6Nj7CBi:").toString('base64');

            // fetch("https://api.unlayer.com/v2/export/image", {
            //   method: "POST",
            //   headers: {
            //     "Content-Type": "application/json", Authorization: `Basic ${token}`
            //   },
            //   body:JSON.stringify( { 
            //     displayMode: 'email',
            //     design:{design}
            //     // mergeTags:{first_name:John,last_name:Doe}}
            //   })
            // })
            // .then(response => {
            //   console.log(response);
            // })
            // .catch(err => {
            //   console.error(err);
            // });


            // const fetch = require('node-fetch');

let url = 'https://api.unlayer.com/v2/export/image';

let options = {
  method: 'POST',
  headers: {'Content-Type': 'application/json', Authorization: `Basic ${token}`},
  body: JSON.stringify({
    displayMode: 'email',
    design: design, // json of your design
    // mergeTags: {first_name: 'John', last_name: 'Doe'}
  })
};

fetch(url, options)
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.error('error:' + err));










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
    )
}
export default Appp