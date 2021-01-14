import React, { useRef,useState, useEffect}  from 'react';
import { render } from 'react-dom'
import {useHistory} from 'react-router'
import axios from 'axios'

import EmailEditor from 'react-email-editor';

const Emailtemp1 = (props) => {
  const emailEditorRef = useRef(null);
  const history=useHistory()

  const Token = localStorage.getItem("Token");

    const [designss, setDesignss] = useState([]);
  useEffect(() => {
    axios
      .get("https://martreach.herokuapp.com/api/emailTemplates/designs", {
        headers: {
          Authorization:  `Bearer ${Token}`
            
        },
      })
      .then((response) => {
        setDesignss(response.data[0].json);
      
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log (designss)
  const exportHtml = () => {
    emailEditorRef.current.editor.exportHtml((data) => {
      const { design, html } = data;
      console.log('exportHtml', html);
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
        <button onClick={exportHtml}>Export HTML</button>
      </div>
      
      
      <EmailEditor
        ref={emailEditorRef}
        onLoad={onLoad}
      />
      <footer>
          <div className="container">
            <div className="footer .dash-footer">
              <div onClick={() => history.push("/dashboard/")}>
                <i className="fas fa-chevron-left"></i>
                <input type="button" value="Back" className="back-button" />
              </div>

              <div onClick={() => history.push("/dashboard/savedlp")}>
                <input
                  type="button"
                  value="View saved templates"
                  className=""
                />
                <i className="fas fa-chevron-right"></i>
              </div>
            </div>
          </div>
        </footer>
    </div>
    
  );
};

export default Emailtemp1