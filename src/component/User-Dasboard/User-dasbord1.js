import React from 'react';
import { Link } from 'react-router-dom';

export default function Userdasbord1() {
  return (
    <div
      className="position-fixed"
      style={{ backgroundColor: 'white', height: '100vh', width: '20%' }}
    >
      <ul className="nav flex-column">
        <li className="nav-item flex ">
          <Link className="nav-link active" to="/dashboard">
            <i style={{ margin: '0 7px' }} className="fas fa-columns"></i>
            <Link to="/dashboard" className="active">
              Dashboard
            </Link>
          </Link>
        </li>
        <li className="nav-item flex">
          <Link className="nav-link" to="#">
            <i style={{ margin: '0 7px' }} className="fas fa-home"></i>
            <Link to="/Templateeditor">Landing page</Link>
          </Link>
        </li>
        <li className="nav-item flex">
          <Link className="nav-link" to="#">
            <i
              style={{ margin: '0 7px' }}
              className="fas fa-envelope-open-text"
            ></i>
            <Link to="/selecttemp">Email Template</Link>
          </Link>
        </li>
        <li className="nav-item flex">
          <Link className="nav-link" to="#">
            <i style={{ margin: '0 7px' }} className="fas fa-id-card-alt"></i>
            <Link to="/dashboard/Audiencepage">Create Audience</Link>
          </Link>
        </li>
        <li className="nav-item flex">
          <Link className="nav-link" to="#">
            <i style={{ margin: '0 7px' }} className="fas fa-check-square"></i>
            <Link to="/dashboard/Subscriptionpage">Subscription Form</Link>
          </Link>
        </li>
        <li className="nav-item flex">
          <Link className="nav-link" to="./post_email.html">
            <i style={{ margin: '0 7px' }} className="fas fa-envelope-open"></i>
            <Link to="/dashboard">Campaign</Link>
          </Link>
        </li>
        <li className="nav-item flex">
          <Link className="nav-link" to="/dashboard">
            <i
              style={{ margin: '0 10px' }}
              className="fas fa-question-circle"
            ></i>
            <Link to="/dashboard">Suggestion</Link>
          </Link>
        </li>
        <li className="nav-item flex">
          <Link className="nav-link" to="#">
            <i style={{ margin: '0 7px' }} className="fas fa-sliders-h"></i>
            <Link to="/dashboard/Settings">Settings</Link>
          </Link>
        </li>
        <li className="nav-item flex">
          <Link className="nav-link" to="#">
            <h6>
              <Link to="#">Try Mart Reach Pro</Link>
            </h6>
          </Link>
        </li>
      </ul>
    </div>
  );
}
