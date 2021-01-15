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
      const image = {
        name,
        design,
        html,
      };
     alert("SAVING")

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
         
      })
      .then((response) => {
        alert("SAVED SUCCESSFULLY")
        
  
      })
      .catch((err) => {
      alert("NOT SAVED")
      });;



    });
  };

  const onLoad = () => {
    // you can load your template here;  
    const templateJson = 
    
    
    {
        "counters": {
            "u_row": 6,
            "u_column": 6,
            "u_content_text": 8,
            "u_content_image": 2,
            "u_content_button": 1,
            "u_content_social": 1
        },
        "body": {
            "rows": [{
                "cells": [1],
                "columns": [{
                    "contents": [{
                        "type": "text",
                        "values": {
                            "containerPadding": "10px",
                            "_meta": {
                                "htmlID": "u_content_text_1",
                                "htmlClassNames": "u_content_text"
                            },
                            "selectable": true,
                            "draggable": true,
                            "duplicatable": true,
                            "deletable": true,
                            "color": "#afb0c7",
                            "textAlign": "center",
                            "lineHeight": "170%",
                            "linkStyle": {
                                "inherit": true,
                                "linkColor": "#0000ee",
                                "linkHoverColor": "#0000ee",
                                "linkUnderline": true,
                                "linkHoverUnderline": true
                            },
                            "hideDesktop": false,
                            "hideMobile": false,
                            "text": "<p style=\"font-size: 14px; line-height: 170%;\"><span style=\"font-size: 14px; line-height: 23.8px;\">View Email in Browser</span></p>"
                        }
                    }],
                    "values": {
                        "_meta": {
                            "htmlID": "u_column_1",
                            "htmlClassNames": "u_column"
                        },
                        "border": {},
                        "padding": "0px",
                        "backgroundColor": ""
                    }
                }],
                "values": {
                    "displayCondition": null,
                    "columns": false,
                    "backgroundColor": "",
                    "columnsBackgroundColor": "",
                    "backgroundImage": {
                        "url": "",
                        "fullWidth": true,
                        "repeat": false,
                        "center": true,
                        "cover": false
                    },
                    "padding": "0px",
                    "hideDesktop": false,
                    "hideMobile": false,
                    "noStackMobile": false,
                    "_meta": {
                        "htmlID": "u_row_1",
                        "htmlClassNames": "u_row"
                    },
                    "selectable": true,
                    "draggable": true,
                    "duplicatable": true,
                    "deletable": true
                }
            }, {
                "cells": [1],
                "columns": [{
                    "contents": [{
                        "type": "image",
                        "values": {
                            "containerPadding": "20px",
                            "_meta": {
                                "htmlID": "u_content_image_1",
                                "htmlClassNames": "u_content_image"
                            },
                            "selectable": true,
                            "draggable": true,
                            "duplicatable": true,
                            "deletable": true,
                            "src": {
                                "url": "https://cdn.templates.unlayer.com/assets/1597218426091-xx.png",
                                "width": 537,
                                "height": 137,
                                "maxWidth": "32%",
                                "autoWidth": false
                            },
                            "textAlign": "center",
                            "altText": "Image",
                            "action": {
                                "name": "web",
                                "values": {
                                    "href": "",
                                    "target": "_blank"
                                }
                            },
                            "hideDesktop": false,
                            "hideMobile": false
                        }
                    }],
                    "values": {
                        "_meta": {
                            "htmlID": "u_column_2",
                            "htmlClassNames": "u_column"
                        },
                        "border": {},
                        "padding": "0px",
                        "backgroundColor": ""
                    }
                }],
                "values": {
                    "displayCondition": null,
                    "columns": false,
                    "backgroundColor": "",
                    "columnsBackgroundColor": "#ffffff",
                    "backgroundImage": {
                        "url": "",
                        "fullWidth": true,
                        "repeat": false,
                        "center": true,
                        "cover": false
                    },
                    "padding": "0px",
                    "hideDesktop": false,
                    "hideMobile": false,
                    "noStackMobile": false,
                    "_meta": {
                        "htmlID": "u_row_2",
                        "htmlClassNames": "u_row"
                    },
                    "selectable": true,
                    "draggable": true,
                    "duplicatable": true,
                    "deletable": true
                }
            }, {
                "cells": [1],
                "columns": [{
                    "contents": [{
                        "type": "image",
                        "values": {
                            "containerPadding": "40px 10px 10px",
                            "_meta": {
                                "htmlID": "u_content_image_2",
                                "htmlClassNames": "u_content_image"
                            },
                            "selectable": true,
                            "draggable": true,
                            "duplicatable": true,
                            "deletable": true,
                            "src": {
                                "url": "https://cdn.templates.unlayer.com/assets/1597218650916-xxxxc.png",
                                "width": 335,
                                "height": 93,
                                "maxWidth": "26%",
                                "autoWidth": false
                            },
                            "textAlign": "center",
                            "altText": "Image",
                            "action": {
                                "name": "web",
                                "values": {
                                    "href": "",
                                    "target": "_blank"
                                }
                            },
                            "hideDesktop": false,
                            "hideMobile": false
                        }
                    }, {
                        "type": "text",
                        "values": {
                            "containerPadding": "10px",
                            "_meta": {
                                "htmlID": "u_content_text_3",
                                "htmlClassNames": "u_content_text"
                            },
                            "selectable": true,
                            "draggable": true,
                            "duplicatable": true,
                            "deletable": true,
                            "color": "#e5eaf5",
                            "textAlign": "center",
                            "lineHeight": "140%",
                            "linkStyle": {
                                "inherit": true,
                                "linkColor": "#0000ee",
                                "linkHoverColor": "#0000ee",
                                "linkUnderline": true,
                                "linkHoverUnderline": true
                            },
                            "hideDesktop": false,
                            "hideMobile": false,
                            "text": "<p style=\"font-size: 14px; line-height: 140%;\"><strong>T H A N K S&nbsp; &nbsp;F O R&nbsp; &nbsp;S I G N I N G&nbsp; &nbsp;U P !</strong></p>"
                        }
                    }, {
                        "type": "text",
                        "values": {
                            "containerPadding": "0px 10px 31px",
                            "_meta": {
                                "htmlID": "u_content_text_4",
                                "htmlClassNames": "u_content_text"
                            },
                            "selectable": true,
                            "draggable": true,
                            "duplicatable": true,
                            "deletable": true,
                            "color": "#e5eaf5",
                            "textAlign": "center",
                            "lineHeight": "140%",
                            "linkStyle": {
                                "inherit": true,
                                "linkColor": "#0000ee",
                                "linkHoverColor": "#0000ee",
                                "linkUnderline": true,
                                "linkHoverUnderline": true
                            },
                            "hideDesktop": false,
                            "hideMobile": false,
                            "text": "<p style=\"font-size: 14px; line-height: 140%;\"><span style=\"font-size: 28px; line-height: 39.2px;\"><strong><span style=\"line-height: 39.2px; font-size: 28px;\">Verify Your E-mail Address&nbsp;</span></strong></span></p>"
                        }
                    }],
                    "values": {
                        "_meta": {
                            "htmlID": "u_column_3",
                            "htmlClassNames": "u_column"
                        },
                        "border": {},
                        "padding": "0px",
                        "backgroundColor": ""
                    }
                }],
                "values": {
                    "displayCondition": null,
                    "columns": false,
                    "backgroundColor": "",
                    "columnsBackgroundColor": "#003399",
                    "backgroundImage": {
                        "url": "",
                        "fullWidth": true,
                        "repeat": false,
                        "center": true,
                        "cover": false
                    },
                    "padding": "0px",
                    "hideDesktop": false,
                    "hideMobile": false,
                    "noStackMobile": false,
                    "_meta": {
                        "htmlID": "u_row_3",
                        "htmlClassNames": "u_row"
                    },
                    "selectable": true,
                    "draggable": true,
                    "duplicatable": true,
                    "deletable": true
                }
            }, {
                "cells": [1],
                "columns": [{
                    "contents": [{
                        "type": "text",
                        "values": {
                            "containerPadding": "33px 55px",
                            "_meta": {
                                "htmlID": "u_content_text_6",
                                "htmlClassNames": "u_content_text"
                            },
                            "selectable": true,
                            "draggable": true,
                            "duplicatable": true,
                            "deletable": true,
                            "color": "#000000",
                            "textAlign": "center",
                            "lineHeight": "160%",
                            "linkStyle": {
                                "inherit": true,
                                "linkColor": "#0000ee",
                                "linkHoverColor": "#0000ee",
                                "linkUnderline": true,
                                "linkHoverUnderline": true
                            },
                            "hideDesktop": false,
                            "hideMobile": false,
                            "text": "<p style=\"font-size: 14px; line-height: 160%;\"><span style=\"font-size: 22px; line-height: 35.2px;\">Hi, </span></p>\n<p style=\"font-size: 14px; line-height: 160%;\"><span style=\"font-size: 18px; line-height: 28.8px;\">You're almost ready to get started. Please click on the button below to verify your email address and enjoy exclusive cleaning services with us!&nbsp;</span></p>"
                        }
                    }, {
                        "type": "button",
                        "values": {
                            "containerPadding": "10px",
                            "_meta": {
                                "htmlID": "u_content_button_1",
                                "htmlClassNames": "u_content_button"
                            },
                            "selectable": true,
                            "draggable": true,
                            "duplicatable": true,
                            "deletable": true,
                            "href": {
                                "name": "web",
                                "values": {
                                    "href": "",
                                    "target": "_blank"
                                }
                            },
                            "buttonColors": {
                                "color": "#FFFFFF",
                                "backgroundColor": "#ff6600",
                                "hoverColor": "#FFFFFF",
                                "hoverBackgroundColor": "#3AAEE0"
                            },
                            "size": {
                                "autoWidth": true,
                                "width": "100%"
                            },
                            "textAlign": "center",
                            "lineHeight": "120%",
                            "border": {},
                            "borderRadius": "4px",
                            "padding": "14px 44px 13px",
                            "hideDesktop": false,
                            "hideMobile": false,
                            "text": "<span style=\"font-size: 16px; line-height: 19.2px;\"><strong><span style=\"line-height: 19.2px; font-size: 16px;\">VERIFY YOUR EMAIL</span></strong></span>",
                            "calculatedWidth": 234,
                            "calculatedHeight": 46
                        }
                    }, {
                        "type": "text",
                        "values": {
                            "containerPadding": "33px 55px 60px",
                            "_meta": {
                                "htmlID": "u_content_text_7",
                                "htmlClassNames": "u_content_text"
                            },
                            "selectable": true,
                            "draggable": true,
                            "duplicatable": true,
                            "deletable": true,
                            "color": "#000000",
                            "textAlign": "center",
                            "lineHeight": "160%",
                            "linkStyle": {
                                "inherit": true,
                                "linkColor": "#0000ee",
                                "linkHoverColor": "#0000ee",
                                "linkUnderline": true,
                                "linkHoverUnderline": true
                            },
                            "hideDesktop": false,
                            "hideMobile": false,
                            "text": "<p style=\"line-height: 160%; font-size: 14px;\"><span style=\"font-size: 18px; line-height: 28.8px;\">Thanks,</span></p>\n<p style=\"line-height: 160%; font-size: 14px;\"><span style=\"font-size: 18px; line-height: 28.8px;\">The Company Team</span></p>"
                        }
                    }],
                    "values": {
                        "_meta": {
                            "htmlID": "u_column_4",
                            "htmlClassNames": "u_column"
                        },
                        "border": {},
                        "padding": "0px",
                        "backgroundColor": ""
                    }
                }],
                "values": {
                    "displayCondition": null,
                    "columns": false,
                    "backgroundColor": "",
                    "columnsBackgroundColor": "#ffffff",
                    "backgroundImage": {
                        "url": "",
                        "fullWidth": true,
                        "repeat": false,
                        "center": true,
                        "cover": false
                    },
                    "padding": "0px",
                    "hideDesktop": false,
                    "hideMobile": false,
                    "noStackMobile": false,
                    "_meta": {
                        "htmlID": "u_row_4",
                        "htmlClassNames": "u_row"
                    },
                    "selectable": true,
                    "draggable": true,
                    "duplicatable": true,
                    "deletable": true
                }
            }, {
                "cells": [1],
                "columns": [{
                    "contents": [{
                        "type": "text",
                        "values": {
                            "containerPadding": "41px 55px 18px",
                            "_meta": {
                                "htmlID": "u_content_text_5",
                                "htmlClassNames": "u_content_text"
                            },
                            "selectable": true,
                            "draggable": true,
                            "duplicatable": true,
                            "deletable": true,
                            "color": "#003399",
                            "textAlign": "center",
                            "lineHeight": "160%",
                            "linkStyle": {
                                "inherit": true,
                                "linkColor": "#0000ee",
                                "linkHoverColor": "#0000ee",
                                "linkUnderline": true,
                                "linkHoverUnderline": true
                            },
                            "hideDesktop": false,
                            "hideMobile": false,
                            "text": "<p style=\"font-size: 14px; line-height: 160%;\"><span style=\"font-size: 20px; line-height: 32px;\"><strong>Get in touch</strong></span></p>\n<p style=\"font-size: 14px; line-height: 160%;\"><span style=\"font-size: 16px; line-height: 25.6px; color: #000000;\">+11 111 333 4444</span></p>\n<p style=\"font-size: 14px; line-height: 160%;\"><span style=\"font-size: 16px; line-height: 25.6px; color: #000000;\">Info@YourCompany.com</span></p>"
                        }
                    }, {
                        "type": "social",
                        "values": {
                            "containerPadding": "10px 10px 33px",
                            "_meta": {
                                "htmlID": "u_content_social_1",
                                "htmlClassNames": "u_content_social"
                            },
                            "selectable": true,
                            "draggable": true,
                            "duplicatable": true,
                            "deletable": true,
                            "icons": {
                                "iconType": "circle-black",
                                "icons": [{
                                    "url": "https://facebook.com/",
                                    "name": "Facebook"
                                }, {
                                    "url": "https://linkedin.com/",
                                    "name": "LinkedIn"
                                }, {
                                    "url": "https://instagram.com/",
                                    "name": "Instagram"
                                }, {
                                    "url": "https://youtube.com/",
                                    "name": "YouTube"
                                }, {
                                    "url": "https://email.com/",
                                    "name": "Email"
                                }]
                            },
                            "align": "center",
                            "spacing": 17,
                            "hideDesktop": false,
                            "hideMobile": false
                        }
                    }],
                    "values": {
                        "_meta": {
                            "htmlID": "u_column_5",
                            "htmlClassNames": "u_column"
                        },
                        "border": {},
                        "padding": "0px",
                        "backgroundColor": ""
                    }
                }],
                "values": {
                    "displayCondition": null,
                    "columns": false,
                    "backgroundColor": "",
                    "columnsBackgroundColor": "#e5eaf5",
                    "backgroundImage": {
                        "url": "",
                        "fullWidth": true,
                        "repeat": false,
                        "center": true,
                        "cover": false
                    },
                    "padding": "0px",
                    "hideDesktop": false,
                    "hideMobile": false,
                    "noStackMobile": false,
                    "_meta": {
                        "htmlID": "u_row_5",
                        "htmlClassNames": "u_row"
                    },
                    "selectable": true,
                    "draggable": true,
                    "duplicatable": true,
                    "deletable": true
                }
            }, {
                "cells": [1],
                "columns": [{
                    "contents": [{
                        "type": "text",
                        "values": {
                            "containerPadding": "10px",
                            "_meta": {
                                "htmlID": "u_content_text_8",
                                "htmlClassNames": "u_content_text"
                            },
                            "selectable": true,
                            "draggable": true,
                            "duplicatable": true,
                            "deletable": true,
                            "color": "#fafafa",
                            "textAlign": "center",
                            "lineHeight": "180%",
                            "linkStyle": {
                                "inherit": true,
                                "linkColor": "#0000ee",
                                "linkHoverColor": "#0000ee",
                                "linkUnderline": true,
                                "linkHoverUnderline": true
                            },
                            "hideDesktop": false,
                            "hideMobile": false,
                            "text": "<p style=\"font-size: 14px; line-height: 180%;\"><span style=\"font-size: 16px; line-height: 28.8px;\">Copyrights &copy; Company All Rights Reserved</span></p>"
                        }
                    }],
                    "values": {
                        "_meta": {
                            "htmlID": "u_column_6",
                            "htmlClassNames": "u_column"
                        },
                        "border": {},
                        "padding": "0px",
                        "backgroundColor": ""
                    }
                }],
                "values": {
                    "displayCondition": null,
                    "columns": false,
                    "backgroundColor": "",
                    "columnsBackgroundColor": "#003399",
                    "backgroundImage": {
                        "url": "",
                        "fullWidth": true,
                        "repeat": false,
                        "center": true,
                        "cover": false
                    },
                    "padding": "0px",
                    "hideDesktop": false,
                    "hideMobile": false,
                    "noStackMobile": false,
                    "_meta": {
                        "htmlID": "u_row_6",
                        "htmlClassNames": "u_row"
                    },
                    "selectable": true,
                    "draggable": true,
                    "duplicatable": true,
                    "deletable": true
                }
            }],
            "values": {
                "backgroundColor": "#f9f9f9",
                "backgroundImage": {
                    "url": "",
                    "fullWidth": true,
                    "repeat": false,
                    "center": true,
                    "cover": false
                },
                "contentWidth": "600px",
                "contentAlign": "center",
                "fontFamily": {
                    "label": "Cabin",
                    "value": "'Cabin',sans-serif",
                    "url": "https://fonts.googleapis.com/css?family=Cabin:400,700",
                    "defaultFont": true
                },
                "preheaderText": "",
                "linkStyle": {
                    "body": true,
                    "linkColor": "#0000ee",
                    "linkHoverColor": "#0000ee",
                    "linkUnderline": true,
                    "linkHoverUnderline": true
                },
                "_meta": {
                    "htmlID": "u_body",
                    "htmlClassNames": "u_body"
                }
            }
        },
        "schemaVersion": 5
    }
    
    
   
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