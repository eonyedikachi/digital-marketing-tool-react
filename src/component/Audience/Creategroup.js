import React, {useState, useEffect} from 'react'
// import './Audiencepage.css'
import {Link} from 'react-router-dom'
import '../layout/Header.css';
import {Modal} from 'react-bootstrap';
import Formfield from '../FormField'
import { Formik, } from 'formik';
import axios from 'axios';
import {useDispatch } from 'react-redux';

export default function Creategroup() {

  const Token = localStorage.getItem("Token");
    const dispatch = useDispatch()
    const [show, setShow] = useState(false);
    const [showedit, setShowedit] = useState(false);

    const [group, setGroup] = useState([]);
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
    }, []);

   console.log(group)

    return (
        <>
        <div style={{width: '100%', backgroundColor: '#F4F5F7', margin: 'auto', minHeight: '100vh'}}>

          <section>
          <ul className="nav nav-tabs" id="myTab" role="tablist">
              <li className="nav-item" role="presentation">
                <Link className="nav-link " id="view-contact-tab" data-toggle="tab" to="/dashboard/Audiencepage/" role="tab"
                  aria-controls="view-contact" aria-selected="false">View Contact</Link>
              </li>
              <li className="nav-item" role="presentation">
                <Link className="nav-link" id="import-tab" data-toggle="tab" to="/dashboard/Audiencepage/Importgroup" role="tab" aria-controls="import"
                  aria-selected="false">Import Contacts</Link>
              </li>
              <li className="nav-item" role="presentation">
                <Link className="nav-link active" id="manage-tab" data-toggle="tab" to="/dashboard/Audiencepage/Creategroup" role="tab" aria-controls="manage"
                  aria-selected="false">Groups</Link>
              </li>
            </ul>
            <div className="" id="manage" role="tabpanel" aria-labelledby="nav-manage-tab">

<div className="container"  style={{backgroundColor: '#F4F5F7'}}>
  <div className="Jumbotron">
    <div className="card p-3">
      <div className="card-body overflow-auto">
       
        <div className="row">
        <h5 style={{textAlign:"left"}}className="card-title col-md-4">Groups</h5>
          <div className="col-md-8 text-right">
           <button onClick={()=> setShow(!show)} className="btn btn-primary  badge-pill" data-toggle="modal" data-target="#groups" style={{background: '#6920bd', width: '10rem'}}>Create Group</button>

          </div>
        </div>
        <br/>
      </div>

      {group.map((group)=>(<div className="grouplist row">
      <div className="col-md-8" >
      <ul>
      <li><i class="fas fa-users"></i>{group.name}</li>
      </ul>
      </div>
      <div className="col-md-4">
      <button 
      
      onClick={()=> {if(window.confirm('Delete the item?'))(
        axios({
          method: 'delete',
          url: `https://martreach.herokuapp.com/api/subscriberGroup/${group.id}`,
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${Token}`,
          }
        })
       

      )}}
      
      type="button" class="btn btn-danger groupdelete">Delete</button>
      <button type="button" class="btn btn-primary groupedit" 
       
      onClick={()=>(setShowedit(!showedit))}
      >Edit</button>
      </div>
  </div>))}

    </div>
  </div>
</div>
</div>
          </section>
            
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
                    // alert('You have successfully created a group');
                   
                    // resetForm();
                    axios({
                      method: 'post',
                      url: 'https://martreach.herokuapp.com/api/subscriberGroup',
                      headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${Token}`,
                      },
                      data:{
                        name:values.name
                      }
                    })
                    .then((response) => {
                      alert("SAVED SUCCESSFULLY")
                      
                
                    })
                    .catch((err) => {
                    alert("NOT SAVED")
                    alert(JSON.stringify(values))
                    });;
                    // dispatch(axios.post('https://martreach.herokuapp.com/api/subscriberGroup',values),)     
                  }
              }>
{({ isSubmitting, values, errors, touched,handleChange,handleSubmit }) =>(
    <form className="subscribe" onSubmit={handleSubmit} >
    <div className="input-field my-4">
    <Formfield
        placeholder="Group  Name"
        name='name'
        type="text"
        onChange={handleChange}
        value={values.name}/>
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

{/* __________________________________________________________________________________________________ */}

    <Modal show={showedit} onHide={()=>setShowedit(false)}>
    <Modal.Header closeButton style={{fontSize:'18px', fontWeight:'900'}} >
        Enter the new name
    </Modal.Header>
    <Modal.Body>
    <Formik
              initialValues={{
               name:'',
              }}
                    onSubmit=
              {(values, { setSubmitting , resetForm}) => 
                  {
                    // alert('You have successfully created a group');
                   
                    // resetForm();
                    axios({
                      method: 'put',
                      url: `https://martreach.herokuapp.com/api/subscriberGroup/${group.id}`,
                      headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${Token}`,
                      },
                      data:{
                        name:values.name
                      }
                    })
                    .then((response) => {
                      alert("SAVED SUCCESSFULLY")
                      
                
                    })
                    .catch((err) => {
                    alert("NOT SAVED")
                    alert(JSON.stringify(values))
                    });;
                    // dispatch(axios.post('https://martreach.herokuapp.com/api/subscriberGroup',values),)     
                  }
              }>
{({ isSubmitting, values, errors, touched,handleChange,handleSubmit }) =>(
    <form className="subscribe" onSubmit={handleSubmit} >
    <div className="input-field my-4">
    <Formfield
        placeholder="Group  Name"
        name='name'
        type="text"
        onChange={handleChange}
        value={values.name}/>
   </div>
    <div className="input-field my-4">
    <Formfield
        type="Submit"
        onClick={()=> setShowedit(!showedit)}/>
        
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
