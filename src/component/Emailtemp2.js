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
    
    
{"body":{"rows":[{"cells":[1],"values":{"_meta":{"htmlID":"u_row_1","htmlClassNames":"u_row"},"columns":false,"padding":"0px","deletable":true,"draggable":true,"hideMobile":false,"selectable":true,"hideDesktop":false,"duplicatable":true,"noStackMobile":false,"backgroundColor":"","backgroundImage":{"url":"","cover":false,"center":true,"repeat":false,"fullWidth":true},"displayCondition":null,"columnsBackgroundColor":"#0000ff"},"columns":[{"values":{"_meta":{"htmlID":"u_column_1","htmlClassNames":"u_column"},"border":{},"padding":"0px","backgroundColor":""},"contents":[{"type":"image","values":{"src":{"url":"https://cdn.templates.unlayer.com/assets/1600190865943-1597216012722-xxx.png","width":204,"height":55,"maxWidth":"28%","autoWidth":false},"_meta":{"htmlID":"u_content_image_1","htmlClassNames":"u_content_image"},"action":{"name":"web","values":{"href":"","target":"_blank"}},"altText":"Image","deletable":true,"draggable":true,"textAlign":"center","hideMobile":false,"selectable":true,"hideDesktop":false,"duplicatable":true,"containerPadding":"25px 10px 13px"}}]}]},{"cells":[1],"values":{"_meta":{"htmlID":"u_row_2","htmlClassNames":"u_row"},"columns":false,"padding":"0px","deletable":true,"draggable":true,"hideMobile":false,"selectable":true,"hideDesktop":false,"duplicatable":true,"noStackMobile":false,"backgroundColor":"","backgroundImage":{"url":"https://cdn.templates.unlayer.com/assets/1600190337031-bb.png","cover":false,"width":600,"center":true,"height":563,"repeat":false,"fullWidth":false},"displayCondition":null,"columnsBackgroundColor":"#0000ff"},"columns":[{"values":{"_meta":{"htmlID":"u_column_2","htmlClassNames":"u_column"},"border":{},"padding":"0px","backgroundColor":""},"contents":[{"type":"divider","values":{"_meta":{"htmlID":"u_content_divider_2","htmlClassNames":"u_content_divider"},"width":"100%","border":{"borderTopColor":"#ffe14f","borderTopStyle":"dotted","borderTopWidth":"1px"},"deletable":true,"draggable":true,"textAlign":"center","hideMobile":false,"selectable":true,"hideDesktop":false,"duplicatable":true,"containerPadding":"10px 0px 20px"}},{"type":"text","values":{"text":"<p style=\"text-align: center; font-size: 14px; line-height: 150%;\"><span style=\"font-size: 48px; line-height: 72px;\"><strong><span style=\"line-height: 72px; color: #ffffff; font-family: Raleway, sans-serif; font-size: 48px;\">Welcome To </span></strong></span></p>\n<p style=\"text-align: center; font-size: 14px; line-height: 150%;\"><span style=\"font-size: 38px; line-height: 57px; color: #ffe14f; font-family: Raleway, sans-serif;\">Online Healthcare</span></p>","_meta":{"htmlID":"u_content_text_1","htmlClassNames":"u_content_text"},"color":"#ffffff","deletable":true,"draggable":true,"linkStyle":{"inherit":true,"linkColor":"#0000ee","linkUnderline":true,"linkHoverColor":"#0000ee","linkHoverUnderline":true},"textAlign":"left","hideMobile":false,"lineHeight":"150%","selectable":true,"hideDesktop":false,"duplicatable":true,"containerPadding":"20px 10px 30px"}},{"type":"button","values":{"href":{"name":"web","values":{"href":"","target":"_blank"}},"size":{"width":"100%","autoWidth":true},"text":"<span style=\"font-family: 'Open Sans', sans-serif; font-size: 18px; line-height: 21.6px;\"><strong><span style=\"line-height: 21.6px; font-size: 18px;\">C L I C K&nbsp; &nbsp;H E R E</span></strong></span>","_meta":{"htmlID":"u_content_button_1","htmlClassNames":"u_content_button"},"border":{"borderTopColor":"#ffffff","borderTopStyle":"solid","borderTopWidth":"1px","borderLeftColor":"#ffffff","borderLeftStyle":"solid","borderLeftWidth":"1px","borderRightColor":"#ffffff","borderRightStyle":"solid","borderRightWidth":"1px","borderBottomColor":"#ffffff","borderBottomStyle":"solid","borderBottomWidth":"1px"},"padding":"10px 20px","deletable":true,"draggable":true,"textAlign":"center","hideMobile":false,"lineHeight":"120%","selectable":true,"hideDesktop":false,"borderRadius":"4px","buttonColors":{"color":"#ffffff","hoverColor":"#FFFFFF","backgroundColor":"#0000ff","hoverBackgroundColor":"#3AAEE0"},"duplicatable":true,"calculatedWidth":184,"calculatedHeight":41,"containerPadding":"10px"}},{"type":"divider","values":{"_meta":{"htmlID":"u_content_divider_1","htmlClassNames":"u_content_divider"},"width":"100%","border":{"borderTopColor":"#BBBBBB","borderTopStyle":"solid","borderTopWidth":"0px"},"_override":{"mobile":{"hideMobile":true}},"deletable":true,"draggable":true,"textAlign":"center","hideMobile":false,"selectable":true,"hideDesktop":false,"duplicatable":true,"containerPadding":"100px"}},{"type":"divider","values":{"_meta":{"htmlID":"u_content_divider_10","htmlClassNames":"u_content_divider"},"width":"100%","border":{"borderTopColor":"#BBBBBB","borderTopStyle":"solid","borderTopWidth":"0px"},"_override":{"mobile":{"hideMobile":false}},"deletable":true,"draggable":true,"textAlign":"center","hideMobile":false,"selectable":true,"hideDesktop":false,"duplicatable":true,"containerPadding":"40px"}}]}]},{"cells":[1],"values":{"_meta":{"htmlID":"u_row_3","htmlClassNames":"u_row"},"columns":false,"padding":"0px","deletable":true,"draggable":true,"hideMobile":false,"selectable":true,"hideDesktop":false,"duplicatable":true,"noStackMobile":false,"backgroundColor":"","backgroundImage":{"url":"","cover":false,"center":true,"repeat":false,"fullWidth":true},"displayCondition":null,"columnsBackgroundColor":"#ffffff"},"columns":[{"values":{"_meta":{"htmlID":"u_column_3","htmlClassNames":"u_column"},"border":{},"padding":"0px","backgroundColor":""},"contents":[{"type":"divider","values":{"_meta":{"htmlID":"u_content_divider_4","htmlClassNames":"u_content_divider"},"width":"100%","border":{"borderTopColor":"#BBBBBB","borderTopStyle":"solid","borderTopWidth":"0px"},"_override":{"mobile":{"hideMobile":false}},"deletable":true,"draggable":true,"textAlign":"center","hideMobile":false,"selectable":true,"hideDesktop":false,"duplicatable":true,"containerPadding":"20px"}},{"type":"text","values":{"text":"<p style=\"font-size: 14px; line-height: 160%;\"><span style=\"font-size: 16px; line-height: 25.6px; font-family: Lato, sans-serif;\">\"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</span></p>","_meta":{"htmlID":"u_content_text_5","htmlClassNames":"u_content_text"},"color":"#333333","deletable":true,"draggable":true,"linkStyle":{"inherit":true,"linkColor":"#0000ee","linkUnderline":true,"linkHoverColor":"#0000ee","linkHoverUnderline":true},"textAlign":"center","hideMobile":false,"lineHeight":"160%","selectable":true,"hideDesktop":false,"duplicatable":true,"containerPadding":"0px 25px 10px"}},{"type":"text","values":{"text":"<p style=\"font-size: 14px; line-height: 140%;\"><span style=\"font-size: 22px; line-height: 30.8px;\">Ready to give it a try?</span></p>","_meta":{"htmlID":"u_content_text_3","htmlClassNames":"u_content_text"},"color":"#333333","deletable":true,"draggable":true,"linkStyle":{"inherit":true,"linkColor":"#0000ee","linkUnderline":true,"linkHoverColor":"#0000ee","linkHoverUnderline":true},"textAlign":"center","hideMobile":false,"lineHeight":"140%","selectable":true,"hideDesktop":false,"duplicatable":true,"containerPadding":"25px 10px 30px"}}]}]},{"cells":[1],"values":{"_meta":{"htmlID":"u_row_10","htmlClassNames":"u_row"},"columns":false,"padding":"0px","deletable":true,"draggable":true,"hideMobile":false,"selectable":true,"hideDesktop":false,"duplicatable":true,"noStackMobile":false,"backgroundColor":"","backgroundImage":{"url":"","cover":false,"center":true,"repeat":false,"fullWidth":true},"displayCondition":null,"columnsBackgroundColor":"#ffffff"},"columns":[{"values":{"_meta":{"htmlID":"u_column_12","htmlClassNames":"u_column"},"border":{},"padding":"0px","backgroundColor":""},"contents":[{"type":"button","values":{"href":{"name":"web","values":{"href":"","target":"_blank"}},"size":{"width":"100%","autoWidth":true},"text":"<span style=\"font-size: 14px; line-height: 16.8px;\"><strong><span style=\"line-height: 16.8px; font-size: 14px;\">S T A R T&nbsp; &nbsp;W I T H&nbsp; &nbsp;B A S I C S</span></strong></span>","_meta":{"htmlID":"u_content_button_4","htmlClassNames":"u_content_button"},"border":{},"padding":"20px 40px","_override":{"mobile":{"padding":"20px 50px"}},"deletable":true,"draggable":true,"textAlign":"center","hideMobile":false,"lineHeight":"120%","selectable":true,"hideDesktop":false,"borderRadius":"35px","buttonColors":{"color":"#FFFFFF","hoverColor":"#FFFFFF","backgroundColor":"#e67e23","hoverBackgroundColor":"#3AAEE0"},"duplicatable":true,"calculatedWidth":274,"calculatedHeight":56,"containerPadding":"10px"}}]}]},{"cells":[1],"values":{"_meta":{"htmlID":"u_row_8","htmlClassNames":"u_row"},"columns":false,"padding":"0px","deletable":true,"draggable":true,"hideMobile":false,"selectable":true,"hideDesktop":false,"duplicatable":true,"noStackMobile":false,"backgroundColor":"","backgroundImage":{"url":"","cover":false,"center":true,"repeat":false,"fullWidth":true},"displayCondition":null,"columnsBackgroundColor":"#ffffff"},"columns":[{"values":{"_meta":{"htmlID":"u_column_9","htmlClassNames":"u_column"},"border":{},"padding":"0px","backgroundColor":""},"contents":[{"type":"divider","values":{"_meta":{"htmlID":"u_content_divider_6","htmlClassNames":"u_content_divider"},"width":"100%","border":{"borderTopColor":"#BBBBBB","borderTopStyle":"solid","borderTopWidth":"1px"},"deletable":true,"draggable":true,"textAlign":"center","hideMobile":false,"selectable":true,"hideDesktop":false,"duplicatable":true,"containerPadding":"30px 10px 10px"}}]}]},{"cells":[1],"values":{"_meta":{"htmlID":"u_row_7","htmlClassNames":"u_row"},"columns":false,"padding":"0px","deletable":true,"draggable":true,"hideMobile":false,"selectable":true,"hideDesktop":false,"duplicatable":true,"noStackMobile":false,"backgroundColor":"","backgroundImage":{"url":"","cover":false,"center":true,"repeat":false,"fullWidth":true},"displayCondition":null,"columnsBackgroundColor":"#ffffff"},"columns":[{"values":{"_meta":{"htmlID":"u_column_7","htmlClassNames":"u_column"},"border":{},"padding":"0px","backgroundColor":""},"contents":[{"type":"text","values":{"text":"<p style=\"font-size: 14px; line-height: 140%;\"><span style=\"font-size: 28px; line-height: 39.2px;\"><strong><span style=\"line-height: 39.2px; font-size: 28px;\">Science loves our healthcare</span></strong></span></p>","_meta":{"htmlID":"u_content_text_7","htmlClassNames":"u_content_text"},"color":"#333333","deletable":true,"draggable":true,"linkStyle":{"inherit":true,"linkColor":"#0000ee","linkUnderline":true,"linkHoverColor":"#0000ee","linkHoverUnderline":true},"textAlign":"center","hideMobile":false,"lineHeight":"140%","selectable":true,"hideDesktop":false,"duplicatable":true,"containerPadding":"20px 10px 35px"}}]}]},{"cells":[48.67,51.33],"values":{"_meta":{"htmlID":"u_row_9","htmlClassNames":"u_row"},"columns":false,"padding":"0px","deletable":true,"draggable":true,"hideMobile":false,"selectable":true,"hideDesktop":false,"duplicatable":true,"noStackMobile":false,"backgroundColor":"","backgroundImage":{"url":"","cover":false,"center":true,"repeat":false,"fullWidth":true},"displayCondition":null,"columnsBackgroundColor":"#ffffff"},"columns":[{"values":{"_meta":{"htmlID":"u_column_10","htmlClassNames":"u_column"},"border":{},"padding":"0px","backgroundColor":""},"contents":[{"type":"image","values":{"src":{"url":"https://cdn.templates.unlayer.com/assets/1600194978670-2.png","width":229,"height":209,"maxWidth":"50%","autoWidth":false},"_meta":{"htmlID":"u_content_image_3","htmlClassNames":"u_content_image"},"action":{"name":"web","values":{"href":"","target":"_blank"}},"altText":"Image","_override":{"mobile":{"src":{"maxWidth":"37%","autoWidth":false}}},"deletable":true,"draggable":true,"textAlign":"center","hideMobile":false,"selectable":true,"hideDesktop":false,"duplicatable":true,"containerPadding":"10px"}}]},{"values":{"_meta":{"htmlID":"u_column_11","htmlClassNames":"u_column"},"border":{},"padding":"0px","backgroundColor":""},"contents":[{"type":"text","values":{"text":"<p style=\"font-size: 14px; line-height: 150%;\"><span style=\"font-size: 16px; line-height: 24px; font-family: Lato, sans-serif;\">\"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.&nbsp;&nbsp;</span></p>","_meta":{"htmlID":"u_content_text_8","htmlClassNames":"u_content_text"},"color":"#000000","_override":{"mobile":{"textAlign":"center"}},"deletable":true,"draggable":true,"linkStyle":{"inherit":true,"linkColor":"#0000ee","linkUnderline":true,"linkHoverColor":"#0000ee","linkHoverUnderline":true},"textAlign":"left","hideMobile":false,"lineHeight":"150%","selectable":true,"hideDesktop":false,"duplicatable":true,"containerPadding":"10px 30px 10px 10px"}}]}]},{"cells":[1],"values":{"_meta":{"htmlID":"u_row_4","htmlClassNames":"u_row"},"columns":false,"padding":"0px","deletable":true,"draggable":true,"hideMobile":false,"selectable":true,"hideDesktop":false,"duplicatable":true,"noStackMobile":false,"backgroundColor":"","backgroundImage":{"url":"","cover":false,"center":true,"repeat":false,"fullWidth":true},"displayCondition":null,"columnsBackgroundColor":"#ffffff"},"columns":[{"values":{"_meta":{"htmlID":"u_column_4","htmlClassNames":"u_column"},"border":{},"padding":"0px","backgroundColor":""},"contents":[{"type":"divider","values":{"_meta":{"htmlID":"u_content_divider_5","htmlClassNames":"u_content_divider"},"width":"100%","border":{"borderTopColor":"#BBBBBB","borderTopStyle":"solid","borderTopWidth":"1px"},"deletable":true,"draggable":true,"textAlign":"center","hideMobile":false,"selectable":true,"hideDesktop":false,"duplicatable":true,"containerPadding":"30px 10px 10px"}},{"type":"text","values":{"text":"<p style=\"font-size: 14px; line-height: 140%;\"><span style=\"font-size: 28px; line-height: 39.2px;\"><strong><span style=\"line-height: 39.2px; font-size: 28px;\">Anytime and anywhere</span></strong></span></p>","_meta":{"htmlID":"u_content_text_4","htmlClassNames":"u_content_text"},"color":"#333333","deletable":true,"draggable":true,"linkStyle":{"inherit":true,"linkColor":"#0000ee","linkUnderline":true,"linkHoverColor":"#0000ee","linkHoverUnderline":true},"textAlign":"center","hideMobile":false,"lineHeight":"140%","selectable":true,"hideDesktop":false,"duplicatable":true,"containerPadding":"20px 10px 35px"}}]}]},{"cells":[48.67,51.33],"values":{"_meta":{"htmlID":"u_row_6","htmlClassNames":"u_row"},"columns":false,"padding":"0px","deletable":true,"draggable":true,"hideMobile":false,"selectable":true,"hideDesktop":false,"duplicatable":true,"noStackMobile":false,"backgroundColor":"","backgroundImage":{"url":"","cover":false,"center":true,"repeat":false,"fullWidth":true},"displayCondition":null,"columnsBackgroundColor":"#ffffff"},"columns":[{"values":{"_meta":{"htmlID":"u_column_6","htmlClassNames":"u_column"},"border":{},"padding":"0px","backgroundColor":""},"contents":[{"type":"image","values":{"src":{"url":"https://cdn.templates.unlayer.com/assets/1600194970383-1.png","width":181,"height":193,"maxWidth":"50%","autoWidth":false},"_meta":{"htmlID":"u_content_image_2","htmlClassNames":"u_content_image"},"action":{"name":"web","values":{"href":"","target":"_blank"}},"altText":"Image","_override":{"mobile":{"src":{"maxWidth":"30%","autoWidth":false}}},"deletable":true,"draggable":true,"textAlign":"center","hideMobile":false,"selectable":true,"hideDesktop":false,"duplicatable":true,"containerPadding":"10px"}}]},{"values":{"_meta":{"htmlID":"u_column_8","htmlClassNames":"u_column"},"border":{},"padding":"0px","backgroundColor":""},"contents":[{"type":"text","values":{"text":"<p style=\"font-size: 14px; line-height: 150%;\"><span style=\"font-size: 16px; line-height: 24px; font-family: Lato, sans-serif;\">\"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.&nbsp;&nbsp;</span></p>","_meta":{"htmlID":"u_content_text_6","htmlClassNames":"u_content_text"},"color":"#000000","_override":{"mobile":{"textAlign":"center"}},"deletable":true,"draggable":true,"linkStyle":{"inherit":true,"linkColor":"#0000ee","linkUnderline":true,"linkHoverColor":"#0000ee","linkHoverUnderline":true},"textAlign":"left","hideMobile":false,"lineHeight":"150%","selectable":true,"hideDesktop":false,"duplicatable":true,"containerPadding":"10px 30px 10px 10px"}}]}]},{"cells":[1],"values":{"_meta":{"htmlID":"u_row_11","htmlClassNames":"u_row"},"columns":false,"padding":"0px","deletable":true,"draggable":true,"hideMobile":false,"selectable":true,"hideDesktop":false,"duplicatable":true,"noStackMobile":false,"backgroundColor":"","backgroundImage":{"url":"","cover":false,"center":true,"repeat":false,"fullWidth":true},"displayCondition":null,"columnsBackgroundColor":"#ffffff"},"columns":[{"values":{"_meta":{"htmlID":"u_column_13","htmlClassNames":"u_column"},"border":{},"padding":"0px","backgroundColor":""},"contents":[{"type":"divider","values":{"_meta":{"htmlID":"u_content_divider_7","htmlClassNames":"u_content_divider"},"width":"100%","border":{"borderTopColor":"#BBBBBB","borderTopStyle":"solid","borderTopWidth":"0px"},"deletable":true,"draggable":true,"textAlign":"center","hideMobile":false,"selectable":true,"hideDesktop":false,"duplicatable":true,"containerPadding":"20px"}}]}]},{"cells":[1],"values":{"_meta":{"htmlID":"u_row_5","htmlClassNames":"u_row"},"columns":false,"padding":"0px","deletable":true,"draggable":true,"hideMobile":false,"selectable":true,"hideDesktop":false,"duplicatable":true,"noStackMobile":false,"backgroundColor":"","backgroundImage":{"url":"","cover":false,"center":true,"repeat":false,"fullWidth":true},"displayCondition":null,"columnsBackgroundColor":"#ffffff"},"columns":[{"values":{"_meta":{"htmlID":"u_column_5","htmlClassNames":"u_column"},"border":{},"padding":"0px","backgroundColor":""},"contents":[{"type":"button","values":{"href":{"name":"web","values":{"href":"","target":"_blank"}},"size":{"width":"100%","autoWidth":true},"text":"<span style=\"font-size: 16px; line-height: 19.2px;\"><strong><span style=\"line-height: 19.2px; font-size: 16px;\">L E A R N&nbsp; &nbsp;M O R E</span></strong></span>","_meta":{"htmlID":"u_content_button_3","htmlClassNames":"u_content_button"},"border":{},"padding":"15px 35px","_override":{"mobile":{"padding":"20px 50px"}},"deletable":true,"draggable":true,"textAlign":"center","hideMobile":false,"lineHeight":"120%","selectable":true,"hideDesktop":false,"borderRadius":"35px","buttonColors":{"color":"#FFFFFF","hoverColor":"#FFFFFF","backgroundColor":"#e67e23","hoverBackgroundColor":"#3AAEE0"},"duplicatable":true,"calculatedWidth":212,"calculatedHeight":49,"containerPadding":"10px"}}]}]},{"cells":[1],"values":{"_meta":{"htmlID":"u_row_12","htmlClassNames":"u_row"},"columns":false,"padding":"0px","deletable":true,"draggable":true,"hideMobile":false,"selectable":true,"hideDesktop":false,"duplicatable":true,"noStackMobile":false,"backgroundColor":"","backgroundImage":{"url":"","cover":false,"center":true,"repeat":false,"fullWidth":true},"displayCondition":null,"columnsBackgroundColor":"#ffffff"},"columns":[{"values":{"_meta":{"htmlID":"u_column_14","htmlClassNames":"u_column"},"border":{},"padding":"0px","backgroundColor":""},"contents":[{"type":"text","values":{"text":"<p style=\"font-size: 14px; line-height: 180%; text-align: center;\"><span style=\"font-size: 16px; line-height: 28.8px; font-family: Lato, sans-serif;\">If you have any questions, please email us at <span style=\"text-decoration: underline; font-size: 16px; line-height: 28.8px;\"><span style=\"color: #e67e23; font-size: 16px; line-height: 28.8px; text-decoration: underline;\">help@domain.com </span></span>or visit our <span style=\"text-decoration: underline; font-size: 16px; line-height: 28.8px;\"><span style=\"color: #e67e23; font-size: 16px; line-height: 28.8px; text-decoration: underline;\">FAQs</span></span>. You can also chat with a real live human during our operating hours. They can answer questions about your account or help you with your meditation practice.&nbsp;</span></p>","_meta":{"htmlID":"u_content_text_9","htmlClassNames":"u_content_text"},"color":"#000000","deletable":true,"draggable":true,"linkStyle":{"inherit":true,"linkColor":"#0000ee","linkUnderline":true,"linkHoverColor":"#0000ee","linkHoverUnderline":true},"textAlign":"left","hideMobile":false,"lineHeight":"180%","selectable":true,"hideDesktop":false,"duplicatable":true,"containerPadding":"30px 50px 10px"}},{"type":"divider","values":{"_meta":{"htmlID":"u_content_divider_9","htmlClassNames":"u_content_divider"},"width":"72%","border":{"borderTopColor":"#413d45","borderTopStyle":"solid","borderTopWidth":"1px"},"deletable":true,"draggable":true,"textAlign":"center","hideMobile":false,"selectable":true,"hideDesktop":false,"duplicatable":true,"containerPadding":"30px 10px"}},{"type":"social","values":{"_meta":{"htmlID":"u_content_social_1","htmlClassNames":"u_content_social"},"align":"center","icons":{"icons":[{"url":"https://facebook.com/","name":"Facebook"},{"url":"https://twitter.com/","name":"Twitter"},{"url":"https://youtube.com/","name":"YouTube"},{"url":"https://skype.com/","name":"Skype"}],"iconType":"rounded-black"},"spacing":20,"deletable":true,"draggable":true,"hideMobile":false,"selectable":true,"hideDesktop":false,"duplicatable":true,"containerPadding":"10px"}},{"type":"menu","values":{"menu":{"items":[{"key":"1600195866571","link":{"name":"web","values":{"href":"","target":"_self"}},"text":"How it works"},{"key":"1600195883481","link":{"name":"web","values":{"href":"","target":"_self"}},"text":"FAQs"},{"key":"1600195903884","link":{"name":"web","values":{"href":"","target":"_self"}},"text":" T&Cs"},{"key":"1600195922163","link":{"name":"web","values":{"href":"","target":"_self"}},"text":"Subscribe "}]},"_meta":{"htmlID":"u_content_menu_1","htmlClassNames":"u_content_menu"},"align":"center","layout":"horizontal","padding":"5px 10px","fontSize":"14px","deletable":true,"draggable":true,"linkColor":"#0068A5","separator":"|","textColor":"#413d45","fontFamily":{"url":"https://fonts.googleapis.com/css?family=Lato:400,700","label":"Lato","value":"'Lato',sans-serif","defaultFont":true},"hideMobile":false,"selectable":true,"hideDesktop":false,"duplicatable":true,"containerPadding":"10px"}},{"type":"text","values":{"text":"<p style=\"font-size: 14px; line-height: 150%;\"><span style=\"font-size: 12px; line-height: 18px;\">You have received this email as a registered user of healthcare.com</span></p>\n<p style=\"font-size: 14px; line-height: 150%;\"><span style=\"font-size: 12px; line-height: 18px;\"> You can <strong><span style=\"text-decoration: underline; font-size: 12px; line-height: 18px; color: #66636a;\">unsubscribe </span></strong>from these emails here (Don't worry, we won't take it personally).</span></p>\n<p style=\"font-size: 14px; line-height: 150%;\"><span style=\"font-size: 12px; line-height: 18px;\">4321 Area Ave.&nbsp; I&nbsp; North town CA 2345&nbsp; I&nbsp; Country Name. </span></p>\n<p style=\"font-size: 14px; line-height: 150%;\"><span style=\"font-size: 12px; line-height: 18px;\">Company Number: 07094561</span></p>\n<p style=\"font-size: 14px; line-height: 150%;\"><span style=\"font-size: 12px; line-height: 18px;\">&copy; Healthcare. Inc.&nbsp;</span></p>","_meta":{"htmlID":"u_content_text_11","htmlClassNames":"u_content_text"},"color":"#7e7e81","deletable":true,"draggable":true,"linkStyle":{"inherit":true,"linkColor":"#0000ee","linkUnderline":true,"linkHoverColor":"#0000ee","linkHoverUnderline":true},"textAlign":"center","hideMobile":false,"lineHeight":"150%","selectable":true,"hideDesktop":false,"duplicatable":true,"containerPadding":"10px"}}]}]}],"values":{"_meta":{"htmlID":"u_body","htmlClassNames":"u_body"},"linkStyle":{"body":true,"linkColor":"#0000ee","linkUnderline":true,"linkHoverColor":"#0000ee","linkHoverUnderline":true},"fontFamily":{"url":"https://fonts.googleapis.com/css?family=Open+Sans:400,700","label":"Open Sans","value":"'Open Sans',sans-serif","defaultFont":true},"contentAlign":"center","contentWidth":"600px","preheaderText":"","backgroundColor":"#efefef","backgroundImage":{"url":"","cover":false,"center":true,"repeat":false,"fullWidth":true}}},"counters":{"u_row":12,"u_column":14,"u_content_menu":1,"u_content_text":11,"u_content_image":3,"u_content_button":4,"u_content_social":1,"u_content_divider":10},"schemaVersion":5}
    
    
   
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