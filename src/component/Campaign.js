import React, {useState, useEffect}from 'react'
import "./campaign.css"
import Formfield from './FormField'
import { Formik, } from 'formik';
import axios from 'axios';
import {Modal} from 'react-bootstrap';
import img1 from "./Images/emailTemp.png"


export default function Campaign() {
      
    const [show, setShow] = useState(false);
    const [selecttem, setSelecttem] = useState(false);
    const [selecttaud, setSelectaud] = useState(false);
    const [startcampaignbtn, setstartcampaignbtn] = useState(true);
    const campaignname= localStorage.getItem("campaign name")
    const imgid= localStorage.getItem("imgid")
    const [group, setGroup] = useState([]);
    const [groupid, setGroupid] = useState([]);
    const [url, setUrl] = useState([]);
    // const imgid, setImgid] = useState('');
    const [showsubject, setShowsubject] = useState(false);
    const Token= localStorage.getItem('Token')
    // alert (campaignname)
    useEffect(() => {
        axios
          .get("https://martreach.herokuapp.com/api/subscriberGroup", {
            headers: {
              Authorization:  `Bearer ${Token}`
                
            },
          })
          .then((response) => {
            setGroup(response.data);
            console.log(response.data);
          })
          .catch((err) => {
            console.log(err);
          });

    //       axios
    //       .get("https://martreach.herokuapp.com/api/emailTemplates", {
    //         headers: {
    //           Authorization:  `Bearer ${Token}`
                
    //         },
    //       })
    //       .then((response) => {
    //         setUrl(response.data);
    //         console.log(response.data);
    //       })
    //       .catch((err) => {
    //         console.log(err);
    //       });
    //   }, []);



    //   useEffect(() => {
        axios
          .get("https://martreach.herokuapp.com/api/emailTemplates", {
            headers: {
              Authorization:  `Bearer ${Token}`
                
            },
          })
          .then((response) => {
            setUrl(response.data);
            // console.log(response.data);
          })
          .catch((err) => {
            console.log(err);
          });
      }, []);
   console.log(url)
    return (
        
        <>
        <div style={{width: '60%', backgroundColor: '#F4F5F7', margin: 'auto', minHeight: '100vh'}} className="campaign">
         <h4><i class="fas fa-envelope-open-text"></i> Campaign</h4>
         <p>Promote a line of products,engage your subscribers by sharing your latest news, or announcing an
         event and Keep your subscribers </p>

        <div className={selecttem ? "displaynone":"selecttem"}>
         <button onClick={()=>(setShow(true),setstartcampaignbtn(false))} type="button" className={startcampaignbtn ? "btn startcampaignbtn btn-lg":"displaynone"}><i class="fas fa-rocket"></i>Start a Campaign!</button>
         </div>
         <div className={selecttem ? "selecttemp":"displaynone"} style={{ textAlign: "center", color: "#8c30f5"}}>
          <h5>Select template for {campaignname} campaign</h5>
          <div className="row roww">
          {url.map((url)=>(<div onClick={()=> (setSelectaud(true))}  className={selecttem ? "tempimage col-md-3":"displaynone"}>
   
            <div onClick={(()=>(localStorage.setItem("imgid", `${url.id}`)))}>
                  <img onClick={(()=>setSelecttem(!selecttem))}src={url.image}/>
            </div>
              </div>))}
          </div>
          </div>
          <div className={selecttaud ? "selectauddd":"displaynone"}>
          <h5>Select target audience </h5>
          <div className="row selectaudd">
              <div className="col-md-8"><h6>Groups</h6></div>
              <div className="col-md-4">
              <button type="button" class="btn sendtoall ">Send to all Subscribers</button>


          
          
          
              </div>
          </div>
          
      {group.map((group)=>(<div className="paddingtop grouplist row">
      <div className="col-md-10" >
      <ul>
      <li><i class="fas fa-users"></i>{group.name}</li>
      </ul>
      </div>

      <div className="col-md-1">
      <i class="fas sendcamp fa-paper-plane"
      onClick={()=>  (setShowsubject(!showsubject), setGroupid(group.id))}
      ></i>
      </div>
      <div className="col-md-1">
     <input value={group.id} type="checkbox"/>
      </div>
      
  </div>))}
      </div>

      <div>
        
      </div>
      
        </div>

        <Modal show={show} onHide={()=>setShow(false)}>
    <Modal.Header closeButton style={{fontSize:'18px', fontWeight:'900'}} >
        Enter the campaign name
    </Modal.Header>
    <Modal.Body>
    <Formik
              initialValues={{
               name:'',
              }}
                    onSubmit=
              {(values, { setSubmitting , resetForm}) => 
                  {
                localStorage.setItem("campaign name",values.name)
                  }
              }>
{({ isSubmitting, values, errors, touched,handleChange,handleSubmit }) =>(
    <form className="subscribe" onSubmit={handleSubmit} >
    <div className="input-field my-4">
    <Formfield
        placeholder="Campaign  Name"
        name='name'
        type="text"
        onChange={handleChange}
        value={values.name}/>
   </div>
    <div className="input-field my-4">
    <Formfield
        type="Submit"
        onClick={()=>  (setShow(!show), setSelecttem(true) )}/>
        
   </div>
  </form>
        
        )}
        
        </Formik>
    </Modal.Body>
    <Modal.Footer>

    </Modal.Footer>

    </Modal>


{/* ///////////////////////////////////////////// */}

<Modal show={showsubject} onHide={()=>setShowsubject(false)}>
    <Modal.Header closeButton style={{fontSize:'18px', fontWeight:'900'}} >
        Enter the campaign name
    </Modal.Header>
    <Modal.Body>
    <Formik
              initialValues={{
               fromName:'',
               fromEmail:'',
               subject:''
              }}
                    onSubmit=
              {(values, { setSubmitting , resetForm}) => 
                  {
                
                    axios({
                        method: 'post',
                        url: 'https://martreach.herokuapp.com/api/campaign',
                        headers: {
                          "Content-Type": "application/json",
                          Authorization: `Bearer ${Token}`,
                        },
                        data:{
                          name: campaignname,
                          fromName: values.fromName,
                          fromEmail: values.fromEmail,
                          subject: values.subject,
                          emailTemplate: imgid,
                          subscriberGroup: groupid

                        }
                      })
                      .then((response) => {
                        alert("SAVED SUCCESSFULLY")
                        
                        
                  
                      })
                      .catch((err) => {
                      alert("NOT SAVED")
                      alert(JSON.stringify(values))
                      });;



                  }
              }>
{({ isSubmitting, values, errors, touched,handleChange,handleSubmit }) =>(
    <form className="subscribe" onSubmit={handleSubmit} >
    <div className="input-field my-4">
    <Formfield
        placeholder="Sender  Name"
        name='fromName'
        type="text"
        onChange={handleChange}
        value={values.fromName}/>
   </div>
    <div className="input-field my-4">
    <Formfield
        placeholder="Sender  email"
        name='fromEmail'
        type="text"
        onChange={handleChange}
        value={values.fromEmail}/>
   </div>
    <div className="input-field my-4">
    <Formfield
        placeholder="Subject of email"
        name='subject'
        type="text"
        onChange={handleChange}
        value={values.subject}/>
   </div>
    <div className="input-field my-4">
    <Formfield
        type="Submit"
        onClick={()=>  (setShowsubject(!showsubject))}/>
        
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
