import React, { useRef,useState, useEffect}  from 'react';
import { render } from 'react-dom'
import {useHistory} from 'react-router'
import axios from 'axios'
import { Modal } from "react-bootstrap";
import Formfield from "./FormField";
import { Formik } from "formik";

import EmailEditor from 'react-email-editor';

const Emailtemp1 = (props) => {
  const emailEditorRef = useRef(null);
  const history=useHistory()
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");

  const Token = localStorage.getItem("Token");

    const [designss, setDesignss] = useState([]);
  
  const exportHtml = () => {
    emailEditorRef.current.editor.exportHtml((data) => {
      const { design, html } = data;
      console.log('exportHtml', html);
      alert("saving");
      alert(name);
      const image = {
        name,
        design,
        html,
      };
      alert(JSON.stringify(image));


      axios({
        method: 'post',
        url: 'https://martreach.herokuapp.com/api/emailTemplates',
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${Token}`,
        },
        data:  {
          tempName: name,
          json: design,
          html: html,
        }
         
      });



    });
  };

  const onLoad = () => {
    // you can load your template here;  
    const templateJson = 
    
    
{"body":{"rows":[{"cells":[1],"values":{"_meta":{"htmlID":"u_row_1","htmlClassNames":"u_row"},"columns":false,"padding":"0px","deletable":true,"draggable":true,"hideMobile":false,"selectable":true,"hideDesktop":false,"duplicatable":true,"noStackMobile":false,"backgroundColor":"","backgroundImage":{"url":"https://cdn.templates.unlayer.com/assets/1597216614184-xxccc.png","cover":true,"width":650,"center":true,"height":433,"repeat":false,"fullWidth":false},"displayCondition":null,"columnsBackgroundColor":"#dcdcdc"},"columns":[{"values":{"_meta":{"htmlID":"u_column_1","htmlClassNames":"u_column"},"border":{},"padding":"0px","backgroundColor":""},"contents":[{"type":"image","values":{"src":{"url":"https://cdn.templates.unlayer.com/assets/1597216012722-xxx.png","width":204,"height":55,"maxWidth":"26%","autoWidth":false},"_meta":{"htmlID":"u_content_image_1","htmlClassNames":"u_content_image"},"action":{"name":"web","values":{"href":"","target":"_blank"}},"altText":"Image","deletable":true,"draggable":true,"textAlign":"center","hideMobile":false,"selectable":true,"hideDesktop":false,"duplicatable":true,"containerPadding":"67px 11px 11px"}},{"type":"text","values":{"text":"<p style=\"font-size: 14px; line-height: 140%;\"><span style=\"font-size: 30px; line-height: 42px; font-family: Cabin, sans-serif;\"><strong><span style=\"line-height: 42px; font-size: 30px;\">Do more <em>for home</em></span></strong></span></p>","_meta":{"htmlID":"u_content_text_1","htmlClassNames":"u_content_text"},"color":"#000000","deletable":true,"draggable":true,"linkStyle":{"inherit":true,"linkColor":"#0000ee","linkUnderline":true,"linkHoverColor":"#0000ee","linkHoverUnderline":true},"textAlign":"center","hideMobile":false,"lineHeight":"140%","selectable":true,"hideDesktop":false,"duplicatable":true,"containerPadding":"10px 10px 225px"}}]}]},{"cells":[1],"values":{"_meta":{"htmlID":"u_row_2","htmlClassNames":"u_row"},"columns":false,"padding":"0px","deletable":true,"draggable":true,"hideMobile":false,"selectable":true,"hideDesktop":false,"duplicatable":true,"noStackMobile":false,"backgroundColor":"","backgroundImage":{"url":"","cover":false,"center":true,"repeat":false,"fullWidth":true},"displayCondition":null,"columnsBackgroundColor":"#fcf9f8"},"columns":[{"values":{"_meta":{"htmlID":"u_column_2","htmlClassNames":"u_column"},"border":{},"padding":"0px","backgroundColor":""},"contents":[{"type":"text","values":{"text":"<p style=\"font-size: 14px; line-height: 140%;\"><span style=\"font-family: Cabin, sans-serif; font-size: 14px; line-height: 19.6px;\"><span style=\"font-size: 26px; line-height: 36.4px;\"><strong><span style=\"line-height: 36.4px; font-size: 26px;\">EXPLORE OFFICE</span></strong></span></span></p>","_meta":{"htmlID":"u_content_text_2","htmlClassNames":"u_content_text"},"color":"#000000","deletable":true,"draggable":true,"linkStyle":{"inherit":true,"linkColor":"#0000ee","linkUnderline":true,"linkHoverColor":"#0000ee","linkHoverUnderline":true},"textAlign":"center","hideMobile":false,"lineHeight":"140%","selectable":true,"hideDesktop":false,"duplicatable":true,"containerPadding":"44px 10px 14px"}},{"type":"text","values":{"text":"<p style=\"font-size: 14px; line-height: 170%;\"><span style=\"font-family: Cabin, sans-serif; font-size: 18px; line-height: 30.6px;\">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore m</span></p>","_meta":{"htmlID":"u_content_text_3","htmlClassNames":"u_content_text"},"color":"#000000","deletable":true,"draggable":true,"linkStyle":{"inherit":true,"linkColor":"#0000ee","linkUnderline":true,"linkHoverColor":"#0000ee","linkHoverUnderline":true},"textAlign":"center","hideMobile":false,"lineHeight":"170%","selectable":true,"hideDesktop":false,"duplicatable":true,"containerPadding":"4px 55px 10px"}},{"type":"text","values":{"text":"<p style=\"font-size: 14px; line-height: 170%;\"><span style=\"font-family: Cabin, sans-serif; font-size: 16px; line-height: 27.2px;\"><span style=\"font-size: 18px; line-height: 30.6px;\">Use code</span> <span style=\"font-size: 18px; line-height: 30.6px;\"><strong>xxxxxx</strong> to get a <strong>10%&nbsp;</strong>off on home and&nbsp;</span></span></p>\n<p style=\"font-size: 14px; line-height: 170%;\"><span style=\"font-family: Cabin, sans-serif; font-size: 16px; line-height: 27.2px;\"><span style=\"font-size: 18px; line-height: 30.6px;\">office decor, out team will ensure a safe and faster</span></span></p>\n<p style=\"font-size: 14px; line-height: 170%;\"><span style=\"font-family: Cabin, sans-serif; font-size: 16px; line-height: 27.2px;\"><span style=\"font-size: 18px; line-height: 30.6px;\">delivery!</span></span></p>","_meta":{"htmlID":"u_content_text_4","htmlClassNames":"u_content_text"},"color":"#000000","deletable":true,"draggable":true,"linkStyle":{"inherit":true,"linkColor":"#0000ee","linkUnderline":true,"linkHoverColor":"#0000ee","linkHoverUnderline":true},"textAlign":"center","hideMobile":false,"lineHeight":"170%","selectable":true,"hideDesktop":false,"duplicatable":true,"containerPadding":"4px 55px 10px"}},{"type":"button","values":{"href":{"name":"web","values":{"href":"","target":"_blank"}},"size":{"width":"100%","autoWidth":true},"text":"<span style=\"font-family: Cabin, sans-serif; font-size: 16px; line-height: 19.2px;\"><span style=\"line-height: 19.2px; font-size: 16px;\">GET THE DEAL</span></span>","_meta":{"htmlID":"u_content_button_1","htmlClassNames":"u_content_button"},"border":{},"padding":"13px 55px","deletable":true,"draggable":true,"textAlign":"center","hideMobile":false,"lineHeight":"120%","selectable":true,"hideDesktop":false,"borderRadius":"4px","buttonColors":{"color":"#e3e0f0","hoverColor":"#FFFFFF","backgroundColor":"#34495e","hoverBackgroundColor":"#3AAEE0"},"duplicatable":true,"calculatedWidth":212,"calculatedHeight":45,"containerPadding":"10px 10px 55px"}}]}]},{"cells":[1],"values":{"_meta":{"htmlID":"u_row_3","htmlClassNames":"u_row"},"columns":false,"padding":"0px","deletable":true,"draggable":true,"hideMobile":false,"selectable":true,"hideDesktop":false,"duplicatable":true,"noStackMobile":false,"backgroundColor":"","backgroundImage":{"url":"","cover":false,"center":true,"repeat":false,"fullWidth":true},"displayCondition":null,"columnsBackgroundColor":"#fff5ee"},"columns":[{"values":{"_meta":{"htmlID":"u_column_3","htmlClassNames":"u_column"},"border":{},"padding":"0px","backgroundColor":""},"contents":[{"type":"image","values":{"src":{"url":"https://cdn.templates.unlayer.com/assets/1597217000509-DDD.png","width":1000,"height":586,"maxWidth":"82%","autoWidth":false},"_meta":{"htmlID":"u_content_image_2","htmlClassNames":"u_content_image"},"action":{"name":"web","values":{"href":"","target":"_blank"}},"altText":"Image","deletable":true,"draggable":true,"textAlign":"center","hideMobile":false,"selectable":true,"hideDesktop":false,"duplicatable":true,"containerPadding":"36px 10px 10px"}},{"type":"text","values":{"text":"<p style=\"font-size: 14px; line-height: 170%;\"><span style=\"font-family: Cabin, sans-serif; font-size: 18px; line-height: 30.6px;\">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore m</span></p>","_meta":{"htmlID":"u_content_text_6","htmlClassNames":"u_content_text"},"color":"#000000","deletable":true,"draggable":true,"linkStyle":{"inherit":true,"linkColor":"#0000ee","linkUnderline":true,"linkHoverColor":"#0000ee","linkHoverUnderline":true},"textAlign":"center","hideMobile":false,"lineHeight":"170%","selectable":true,"hideDesktop":false,"duplicatable":true,"containerPadding":"0px 55px 21px"}},{"type":"button","values":{"href":{"name":"web","values":{"href":"","target":"_blank"}},"size":{"width":"100%","autoWidth":true},"text":"<span style=\"font-family: Cabin, sans-serif; font-size: 16px; line-height: 19.2px;\"><span style=\"line-height: 19.2px; font-size: 16px;\">GRAB THE DEAL</span></span>","_meta":{"htmlID":"u_content_button_2","htmlClassNames":"u_content_button"},"border":{},"padding":"13px 55px","deletable":true,"draggable":true,"textAlign":"center","hideMobile":false,"lineHeight":"120%","selectable":true,"hideDesktop":false,"borderRadius":"4px","buttonColors":{"color":"#e3e0f0","hoverColor":"#FFFFFF","backgroundColor":"#34495e","hoverBackgroundColor":"#3AAEE0"},"duplicatable":true,"calculatedWidth":224,"calculatedHeight":45,"containerPadding":"10px 10px 55px"}}]}]},{"cells":[1],"values":{"_meta":{"htmlID":"u_row_4","htmlClassNames":"u_row"},"columns":false,"padding":"0px","deletable":true,"draggable":true,"hideMobile":false,"selectable":true,"hideDesktop":false,"duplicatable":true,"noStackMobile":false,"backgroundColor":"","backgroundImage":{"url":"","cover":false,"center":true,"repeat":false,"fullWidth":true},"displayCondition":null,"columnsBackgroundColor":"#184e5a"},"columns":[{"values":{"_meta":{"htmlID":"u_column_4","htmlClassNames":"u_column"},"border":{},"padding":"0px","backgroundColor":""},"contents":[{"type":"text","values":{"text":"<p style=\"font-size: 14px; line-height: 230%;\"><strong><span style=\"font-family: Cabin, sans-serif; font-size: 18px; line-height: 41.4px;\">★ ★ ★ ★ ★</span></strong></p>\n<p style=\"font-size: 14px; line-height: 230%;\"><em><span style=\"font-family: Cabin, sans-serif; font-size: 18px; line-height: 41.4px;\">\"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore \"</span></em></p>\n<p style=\"font-size: 14px; line-height: 230%;\"><em><span style=\"font-family: Cabin, sans-serif; font-size: 18px; line-height: 41.4px;\">- Customer Name</span></em></p>","_meta":{"htmlID":"u_content_text_8","htmlClassNames":"u_content_text"},"color":"#ffffff","deletable":true,"draggable":true,"linkStyle":{"inherit":true,"linkColor":"#0000ee","linkUnderline":true,"linkHoverColor":"#0000ee","linkHoverUnderline":true},"textAlign":"center","hideMobile":false,"lineHeight":"230%","selectable":true,"hideDesktop":false,"duplicatable":true,"containerPadding":"44px 55px"}}]}]},{"cells":[1],"values":{"_meta":{"htmlID":"u_row_5","htmlClassNames":"u_row"},"columns":false,"padding":"0px 0px 17px","deletable":true,"draggable":true,"hideMobile":false,"selectable":true,"hideDesktop":false,"duplicatable":true,"noStackMobile":false,"backgroundColor":"","backgroundImage":{"url":"","cover":false,"center":true,"repeat":false,"fullWidth":true},"displayCondition":null,"columnsBackgroundColor":""},"columns":[{"values":{"_meta":{"htmlID":"u_column_5","htmlClassNames":"u_column"},"border":{},"padding":"0px","backgroundColor":""},"contents":[{"type":"social","values":{"_meta":{"htmlID":"u_content_social_2","htmlClassNames":"u_content_social"},"align":"center","icons":{"icons":[{"url":"https://instagram.com/","name":"Instagram"}],"iconType":"circle-black"},"spacing":0,"deletable":true,"draggable":true,"hideMobile":false,"selectable":true,"hideDesktop":false,"duplicatable":true,"containerPadding":"23px 10px 10px"}},{"type":"text","values":{"text":"<p style=\"font-size: 14px; line-height: 170%;\">Lorem ipsum dolor sit amet, consectetuer adipiscing elit,</p>\n<p style=\"font-size: 14px; line-height: 170%;\">sed diam nonummy nibh euismod tincidunt ut</p>\n<p style=\"font-size: 14px; line-height: 170%;\">laoreet dolore magna aliquam era</p>","_meta":{"htmlID":"u_content_text_9","htmlClassNames":"u_content_text"},"color":"#575758","deletable":true,"draggable":true,"linkStyle":{"inherit":true,"linkColor":"#0000ee","linkUnderline":true,"linkHoverColor":"#0000ee","linkHoverUnderline":true},"textAlign":"center","hideMobile":false,"lineHeight":"170%","selectable":true,"hideDesktop":false,"duplicatable":true,"containerPadding":"10px"}}]}]}],"values":{"_meta":{"htmlID":"u_body","htmlClassNames":"u_body"},"linkStyle":{"body":true,"linkColor":"#0000ee","linkUnderline":true,"linkHoverColor":"#0000ee","linkHoverUnderline":true},"fontFamily":{"url":"https://fonts.googleapis.com/css?family=Cabin:400,700","label":"Cabin","value":"'Cabin',sans-serif","defaultFont":true},"contentAlign":"center","contentWidth":"600px","preheaderText":"","backgroundColor":"#ffffff","backgroundImage":{"url":"","cover":false,"center":true,"repeat":false,"fullWidth":true}}},"counters":{"u_row":5,"u_column":5,"u_content_text":9,"u_content_image":3,"u_content_button":3,"u_content_social":2},"schemaVersion":5}
    
    
   
    emailEditorRef.current.editor.loadDesign(templateJson);
  };

  return (
      <>
    <div>
      <div>
    <button className="btn-primary" onClick={() => setShow(!show)}>
            Enter Name
          </button>
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

<Modal show={show} onHide={() => setShow(false)}>
<Modal.Header
  closeButton
  style={{ fontSize: "18px", fontWeight: "900" }}
></Modal.Header>
<Modal.Body>
  <Formik
    initialValues={{
      name: "",
    }}
    onSubmit={(values, { setSubmitting, resetForm }) => {
      alert(JSON.stringify(values));
      setName(values.name);
      setShow(!show);
    }}
  >
    {({
      isSubmitting,
      values,
      errors,
      touched,
      handleChange,
      handleSubmit,
    }) => (
      <form className="subscribe" onSubmit={handleSubmit}>
        <div className="input-field my-4">
          <Formfield
            placeholder="Enter  Name"
            name="name"
            type="text"
            onChange={handleChange}
            value={values.name}
          />
        </div>
        <div className="input-field my-4">
          <Formfield
            type="Submit"
            value="Save template"
            onClick={(() => setShow(!show), exportHtml)}
          />
        </div>
      </form>
    )}
  </Formik>
</Modal.Body>
<Modal.Footer></Modal.Footer>
</Modal>
    </>
  );
};

export default Emailtemp1