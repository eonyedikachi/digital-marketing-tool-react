//ContactInformation

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../layout/Header.css';
import { Modal } from 'react-bootstrap';
import Formfield from '../FormField';
import { Formik } from 'formik';
import axios from 'axios';
import { useDispatch } from 'react-redux';

export default function ContactInformation() {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  return (
    <>
      <div
        style={{
          width: '100%',
          backgroundColor: '#F4F5F7',
          margin: 'auto',
          minHeight: '100vh',
        }}
      >
        <section>
          <ul className="nav nav-tabs" id="myTab" role="tablist">
            <li className="nav-item" role="presentation">
              <Link
                className="nav-link active"
                id="view-contact-tab"
                data-toggle="tab"
                to="/dashboard/Settings/"
                role="tab"
                aria-controls="view-contact"
                aria-selected="false"
              >
                Contact Information
              </Link>
            </li>
            <li className="nav-item" role="presentation">
              <Link
                className="nav-link"
                id="import-tab"
                data-toggle="tab"
                to="/dashboard/Settings/Security"
                role="tab"
                aria-controls="import"
                aria-selected="false"
              >
                Security
              </Link>
            </li>
            <li className="nav-item" role="presentation">
              <Link
                className="nav-link "
                id="manage-tab"
                data-toggle="tab"
                to="/dashboard/Settings/Domains"
                role="tab"
                aria-controls="manage"
                aria-selected="false"
              >
                Domains
              </Link>
            </li>
            <li className="nav-item" role="presentation">
              <Link
                className="nav-link "
                id="manage-tab"
                data-toggle="tab"
                to="/dashboard/Settings/ManageMyAccount"
                role="tab"
                aria-controls="manage"
                aria-selected="false"
              >
                Manage My Account
              </Link>
            </li>
          </ul>
          <div
            className=""
            id="manage"
            role="tabpanel"
            aria-labelledby="nav-manage-tab"
          >
            <div className="container" style={{ backgroundColor: '#F4F5F7' }}>
              <div className="Jumbotron">
                <div className="card p-3">
                  <div className="card-body overflow-auto">
                    <div class="active tabcontent">
                      <h3 id="PF">Profile</h3>
                      <p>
                        This is the information we have associated with your
                        MartReach profile, which you can use to access multiple
                        MartReach accounts. If you need to reset your username
                        or password, or verify account changes, we'll send the
                        link to your profile email address. All contact
                        information is kept strictly confidential. View our
                        privacy policy
                      </p>
                      <div class="profile-content">
                        <h6>Username: </h6> &nbsp;{' '}
                        <span class="unique user-name"></span>
                      </div>
                      <div class="profile-content">
                        <h6>First Name:</h6>
                        &nbsp; <span class="unique first-name"></span>
                      </div>
                      <div class="profile-content">
                        <h6>Last Name:</h6>
                        &nbsp; <span class="unique last-name"></span>
                      </div>
                      <div class="profile-content">
                        <h6>Email Address:</h6>
                        &nbsp; <span class="unique email-address"></span>
                      </div>
                      <div class="profile-content">
                        <h6>Website:</h6>
                        &nbsp; <span class="unique website"></span>
                      </div>
                      <button
                        class="btn my-3 button"
                        data-toggle="modal"
                        data-target="#editProfile"
                      >
                        Edit Profile Information
                      </button>
                      <hr />

                      <h3 id="BI">Billing Info</h3>
                      <p>
                        This is the information we have associated with your
                        payment method.
                      </p>
                      <div class="profile-content">
                        <h6>Contact name</h6>
                        &nbsp; <span class="unique billing-contact-name"></span>
                      </div>

                      <div class="profile-content">
                        <h6>Company / Organization</h6>
                        &nbsp; <span class="unique billing-company-name"></span>
                      </div>

                      <div class="profile-content">
                        <h6>Address</h6>
                        &nbsp; <span class="unique billing-address"></span>
                      </div>

                      <div class="profile-content">
                        <h6>Phone</h6>
                        &nbsp; <span class="unique billing-phone-number"></span>
                      </div>
                      <div class="profile-content">
                        <h6>Email:</h6>
                        &nbsp;{' '}
                        <span class="unique billing-email-address"></span>
                      </div>
                      <button
                        class="btn my-3 button"
                        data-toggle="modal"
                        data-target="#editBillingInformation"
                      >
                        Edit Billing Information
                      </button>
                      <hr/>

                      <h3>Audiences in this Account</h3>
                      <div class="profile-content">
                        <h6>Audience name</h6>
                        <p>MartReach</p>
                      </div>

                      <div class="profile-content">
                        <h6>Contact name</h6>
                        <p>MartReach</p>
                      </div>
                      <div class="profile-content">
                        <h6>Company / Organization</h6>
                        <p>MartReach and Fellows.</p>
                      </div>

                      <div class="profile-content">
                        <h6>Address</h6>
                        <p>6, MartReach@Lugbe Big house</p>
                      </div>

                      <div class="profile-content">
                        <h6>Phone</h6>
                        <p>08000MartReach</p>
                      </div>

                      <div class="profile-content">
                        <h6>Email</h6>
                        <p>aminubenitachineduekesoglorymalik@gmail.com</p>
                      </div>

                      <div class="profile-content">
                        <h6>Permission Reminder</h6>
                        <p>
                          “You are receiving this email because you opted in via
                          our website.”
                        </p>
                      </div>

                      <button
                        class="btn my-3 button"
                        data-toggle="modal"
                        data-target="#editudienceInformation"
                      >
                        Edit Audience Information
                      </button>
                    </div>

                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header
          closeButton
          style={{ fontSize: '18px', fontWeight: '900' }}
        ></Modal.Header>
        <Modal.Body>
          <Formik
            initialValues={{
              subscriberGroup: '',
            }}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              // alert('You have successfully created a group');
              alert(JSON.stringify(values));
              resetForm();
              dispatch(
                axios.post(
                  'https://martreach.herokuapp.com/api/subscriberGroup',
                  values
                )
              );
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
                    placeholder="Group  Name"
                    name="subscriberGroup"
                    type="text"
                    onChange={handleChange}
                    value={values.subscriberGroup}
                  />
                </div>
                <div className="input-field my-4">
                  <Formfield type="Submit" onClick={() => setShow(!show)} />
                </div>
              </form>
            )}
          </Formik>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
}
