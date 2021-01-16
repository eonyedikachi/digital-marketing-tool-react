import React, {useState, useEffect} from 'react'
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
    const Token = localStorage.getItem("Token");
    const [show, setShow] = useState(false);
    const [audience, setAudience] = useState([]);


    useEffect(() => {
      axios
        .get("https://martreach.herokuapp.com/api/audience", {
          headers: {
            Authorization:
              `Bearer ${Token}`,
          },
        })
        .then((response) => {
          setAudience(response.data);
          console.log(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }, []);


console.log(audience)
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
                
                  <div className="row">
                  <h5 style={{textAlign:"left"}} className="card-title col-md-6">View contact subscribers</h5>
                    <div className="col-md-6 text-right">
                    <button className="btn btn-primary  badge-pill" data-toggle="modal" data-target="#groups" style={{background: '#6920bd', width: '10rem'}}>Add a subscriber</button>
                    <div className='col-md-6'></div>

                    </div>
                  </div>
                  <br/>
                </div>

               <div className="grouplist row">
                <div className="col-md-8" >
                <ul>
                <li><i class="fas fa-users"></i>AMinu</li>
                </ul>
                </div>
                <div className="col-md-4">
               <i className="fas fa-trash-alt groupdelete"></i>
            <i className="fas fa-user-edit groupedit"></i>
            </div>
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
                tel:'',
                country:'',
                state:'',
                city:'',
                birthday:'',

              }}
                    onSubmit=
              {(values, { setSubmitting , resetForm}) => 
                  {
                    // alert('You have successfully added a New Subscriber');
                    alert(JSON.stringify(values))
                    resetForm();
                     
                    
                    axios({
                      method: 'post',
                      url: 'https://martreach.herokuapp.com/api/audience',
                      headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${Token}`,
                      },
                      data:  {
                        firstName: values.firstName,
                        lastName: values.lastName,
                        email: values.email,
                        tel: values.tel,
                        country: values.country,
                        state: values.state,
                        city: values.city,
                        birthday: values.birthday,
                        user_id: 1
                      }
                       
                    })
                    .then((response) => {
                      alert('SUBSCRIBER ADDED')
                      
                
                    })
                    .catch((err) => {
                    alert(" UNSUCCESSFUL")
                    // alert(values.firstName)
                    });


      axios({
        method: 'post',
        url: 'https://martreach.herokuapp.com/api/audience',
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${Token}`,
        }

      });

      
  



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
        name='tel'
        type="text"
        onChange={handleChange}
        value={values.tel}/>
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
        placeholder="birthday"
        name='birthday'
        type="text"
        onChange={handleChange}
        value={values.birthday}/>
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
