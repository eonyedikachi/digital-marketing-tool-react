import React, {useState} from 'react'
// import './Audiencepage.css'
import {Link} from 'react-router-dom'
import '../layout/Header.css';
import {Modal} from 'react-bootstrap';
import Formfield from '../FormField'
import { Formik, } from 'formik';
import axios from 'axios';
import {useDispatch } from 'react-redux';

export default function Creategroup() {
    const dispatch = useDispatch()
    const [show, setShow] = useState(false);
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
        <h5 className="card-title">Groups</h5>
        <div className="row">
          <div className="col-md-12 text-right">
           <button onClick={()=> setShow(!show)} className="btn btn-primary  badge-pill" data-toggle="modal" data-target="#groups" style={{background: '#6920bd', width: '10rem'}}>Create Group</button>

          </div>
        </div>
        <br/>
      </div>
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
