import React, {useState} from 'react'
// import './Audiencepage.css'
import {Link} from 'react-router-dom';
import '../layout/Header.css';
import {Modal} from 'react-bootstrap';
import Formfield from '../FormField'
import { Formik, } from 'formik';
import axios from 'axios';
import {useDispatch} from 'react-redux';

export default function Viewcontact() {
    const dispatch = useDispatch()
    const [show, setShow] = useState(false);
    return (
        <>
        <div style={{width: '100%', backgroundColor: '#F4F5F7', margin: 'auto', minHeight: '100vh'}}>
          <section>
          <ul className="nav nav-tabs" id="myTab" role="tablist">
              <li className="nav-item" role="presentation">
                <Link className="nav-link active" id="view-contact-tab" data-toggle="tab" to="#viewContact" role="tab"
                  aria-controls="view-contact" aria-selected="false">View Contact</Link>
              </li>
              <li className="nav-item" role="presentation">
                <Link className="nav-link" id="import-tab" data-toggle="tab" to="/dashboard/Audiencepage/Importgroup" role="tab" aria-controls="import"
                  aria-selected="false">Import Contacts</Link>
              </li>
              <li className="nav-item" role="presentation">
                <Link className="nav-link" id="manage-tab" data-toggle="tab" to="/dashboard/Audiencepage/Creategroup" role="tab" aria-controls="manage"
                  aria-selected="false">Groups</Link>
              </li>
            </ul>
          
            <div className="container" id style={{backgroundColor: '#F4F5F7'}}>

                  <div className="Jumbotron">
                    <div className="card p-3">
                      <div className="card-body overflow-auto">
                        <h5 className="card-title">Display View Contact</h5>
                        <div className="row">
                          <div className="col-md-12 text-right">
                           <button onClick={()=> setShow(!show)} className="btn btn-primary  badge-pill" data-toggle="modal" data-target="#add" style={{background: '#6920bd', width: '10rem'}}>Add a Subscriber</button>

                          </div>
                        </div>
                        <br/>

                        <table className="table table-dark table-bordered" style={{backgroundColor: '#fff', color: '#222'}}>

                          <thead>
                            <tr>
                              <th scope="col">ID</th>
                              <th scope="col">Email</th>
                              <th scope="col">FName</th>
                              <th scope="col">LName</th>
                              <th scope="col">Phone No</th>
                              <th scope="col">Country</th>
                              <th scope="col">State</th>
                              <th scope="col">City</th>
                              <th scope="col">BDay</th>
                              <th className="text-right">Edit</th>
                              <th className="text-right">Delete</th>
                            </tr>
                          </thead>
                          <tbody id="contactTable"></tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
          </section>


            
        </div>

        {/* Add subscriber Form */}
        <Modal show={show} onHide={()=>setShow(false)}>
        <Modal.Header closeButton style={{fontSize:'18px', fontWeight:'900'}}>
          Add a subscriber
        </Modal.Header>
        <Modal.Body>
        <Formik
              initialValues={{
                email:'',
                firstName:'',
                lastName:'',
                phoneNo:'',
                country:'',
                state:'',
                city:'',
                Birthday:'',

              }}
                    onSubmit=
              {(values, { setSubmitting , resetForm}) => 
                  {
                    // alert('You have successfully added a New Subscriber');
                    alert(JSON.stringify(values))
                    resetForm();
                    dispatch(axios.post('https://martreach.herokuapp.com/api/audience',values),)  
                    
                    // eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjozLCJmaXJzdE5hbWUiOiJFa2VzbyIsImxhc3ROYW1lIjoiTG9uZ2UiLCJ1c2VybmFtZSI6ImVrZXNvbG9uZ2UiLCJ0ZWwiOiIwODA2MzgzODc0NSIsImVtYWlsIjoiYnVoYXJpQGdtYWlsLmNvbSIsIndlYnNpdGUiOiJ3d3cuZWtlc29sb25nZS5jb20iLCJwaWN0dXJlIjoidXBsb2Fkcy9pbWFnZXMvMTYwNzk0ODkyNjA1OS5qcGciLCJvdHAiOiIiLCJpc0VuYWJsZWQiOiJ0cnVlIiwiZGF0ZUNyZWF0ZWQiOiIyMDIwLTEyLTE1VDEwOjIyOjIxLjAwMFoiLCJyb2xlSWQiOjMsInVzZXJJZCI6MTEsInBlcm1pc3Npb25zIjpbeyJwZXJtaXNzaW9uTmFtZSI6ImFkZF91c2VyIiwiZ3JvdXBOYW1lIjoidXNlcl9tYW5hZ2VtZW50In0seyJwZXJtaXNzaW9uTmFtZSI6ImVkaXRfdXNlciIsImdyb3VwTmFtZSI6InVzZXJfbWFuYWdlbWVudCJ9LHsicGVybWlzc2lvbk5hbWUiOiJ2aWV3X3VzZXIiLCJncm91cE5hbWUiOiJ1c2VyX21hbmFnZW1lbnQifSx7InBlcm1pc3Npb25OYW1lIjoiZGVsZXRlX3VzZXIiLCJncm91cE5hbWUiOiJ1c2VyX21hbmFnZW1lbnQifSx7InBlcm1pc3Npb25OYW1lIjoiYWRkX3JvbGUiLCJncm91cE5hbWUiOiJyb2xlX21hbmFnZW1lbnQifSx7InBlcm1pc3Npb25OYW1lIjoiZWRpdF9yb2xlIiwiZ3JvdXBOYW1lIjoicm9sZV9tYW5hZ2VtZW50In0seyJwZXJtaXNzaW9uTmFtZSI6InZpZXdfcm9sZSIsImdyb3VwTmFtZSI6InJvbGVfbWFuYWdlbWVudCJ9LHsicGVybWlzc2lvbk5hbWUiOiJkZWxldGVfcm9sZSIsImdyb3VwTmFtZSI6InJvbGVfbWFuYWdlbWVudCJ9LHsicGVybWlzc2lvbk5hbWUiOiJhZGRfcGVybWlzc2lvbiIsImdyb3VwTmFtZSI6InBlcm1pc3Npb25fbWFuYWdlbWVudCJ9LHsicGVybWlzc2lvbk5hbWUiOiJlZGl0X3Blcm1pc3Npb24iLCJncm91cE5hbWUiOiJwZXJtaXNzaW9uX21hbmFnZW1lbnQifSx7InBlcm1pc3Npb25OYW1lIjoidmlld19wZXJtaXNzaW9uIiwiZ3JvdXBOYW1lIjoicGVybWlzc2lvbl9tYW5hZ2VtZW50In0seyJwZXJtaXNzaW9uTmFtZSI6ImRlbGV0ZV9wZXJtaXNzaW9uIiwiZ3JvdXBOYW1lIjoicGVybWlzc2lvbl9tYW5hZ2VtZW50In1dfSwiaWF0IjoxNjEwNTQ1MTQ3LCJleHAiOjE2MTA1NDg3NDd9.5tPck6vZTD-5C0hkwdjGg65CBXUkamnQa0-F2B9PuZU


                  }
              }>
{({ isSubmitting, values, errors, touched,handleChange,handleSubmit }) =>(
    <form className="subscribe" onSubmit={handleSubmit} >
    <div className="input-field my-4">
    <Formfield
        placeholder="Enter Email Address"
        name='email'
        type="email"
        onChange={handleChange}
        value={values.email}/>
   </div>
    <div className="input-field my-4">
    <Formfield
        placeholder="Firstname"
        name='firstName'
        type="text"
        onChange={handleChange}
        value={values.firstName}/>
   </div>
    <div className="input-field my-4">
    <Formfield
        placeholder="Lastname"
        name='lastName'
        type="text"
        onChange={handleChange}
        value={values.lastName}/>
   </div>
    <div className="input-field my-4">
    <Formfield
        placeholder="Phone Number"
        name='phoneNo'
        type="text"
        onChange={handleChange}
        value={values.phoneNo}/>
   </div>
    <div className="input-field my-4">
    <Formfield
        placeholder="Country"
        name='country'
        type="text"
        onChange={handleChange}
        value={values.country}/>
   </div>
    <div className="input-field my-4">
    <Formfield
        placeholder="State"
        name='state'
        type="text"
        onChange={handleChange}
        value={values.state}/>
   </div>
    <div className="input-field my-4">
    <Formfield
        placeholder="City"
        name='city'
        type="text"
        onChange={handleChange}
        value={values.city}/>
   </div>
    <div className="input-field my-4">
    <Formfield
        placeholder="Birthday"
        name='Birthday'
        type="text"
        onChange={handleChange}
        value={values.Birthday}/>
   </div>
    <div className="input-field my-4">
    <Formfield
        name='Submit'
        type="Submit"
        onClick={()=> setShow(!show)}
        />
   </div>
  </form>
        
        )}
        {/* //   <input type="email" name="email" id="footerEmail" placeholder="Enter Email Address" required />  */}
        </Formik>
        </Modal.Body>
        <Modal.Footer>

        </Modal.Footer>

            
        </Modal>  

        </>
    )
}
