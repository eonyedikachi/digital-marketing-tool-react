import React from "react";
import {Link} from 'react-router-dom';
import './Dashboard.css';


export default function Dashboard() {
    return (
        
  <div style={{height:"100vh"}}>
  <div className="d-flex" style={{height: "100%"}}>
    <div className="position-fixed" style={{backgroundColor: "white",height: "100vh", width: "20%"}}>
      <ul className="nav flex-column">
        <li className="nav-item flex ">
          <Link className="nav-link active" to="/dashboard">
            <i className="fas fa-columns"></i>
          </Link>
          <Link to="/dashboard" className="active">Dashboard</Link>
        </li>
        <li className="nav-item flex">
          <Link className="nav-link" to="#">
            <i className="fas fa-home"></i>
            <Link to="/dashboard">Landing page</Link>
          </Link>
        </li>
        <li className="nav-item flex">
          <Link className="nav-link" to="#">
            <i className="fas fa-envelope-open-text"></i>
            <Link to="/dashboard">Email Template</Link>
          </Link>
        </li>
        <li className="nav-item flex">
          <Link className="nav-link" to="#">
            <i className="fas fa-id-card-alt"></i>
            <Link to="/dashboard">Create Audience</Link>
          </Link>
        </li>
        <li className="nav-item flex">
          <Link className="nav-link" to="#">
            <i className="fas fa-check-square"></i>
            <Link to="/dashboard">Subscription Form</Link>
          </Link>
        </li>
        <li className="nav-item flex">
          <Link className="nav-link" to="./post_email.html">
            <i className="fas fa-envelope-open"></i>
            <Link to="/dashboard">Campaign</Link>
          </Link>
        </li>
        <li className="nav-item flex">
          <Link className="nav-link" to="/dashboard">
            <i className="fas fa-question-circle"></i>
            <Link to="/dashboard">Suggestion</Link>
          </Link>
        </li>
        <li className="nav-item flex">
          <Link className="nav-link" to="#">
            <i className="fas fa-sliders-h"></i>
            <Link to="/dashboard">Settings</Link>
          </Link>
        </li>
        <li className="nav-item flex">
          <Link className="nav-link" to="#">
            <h6><Link to="#">Try Mart Reach Pro</Link></h6>
          </Link>
        </li>

      </ul>
    </div>
    <div style={{width: '60%', backgroundColor: '#F4F5F7', margin: 'auto', minHeight: '100vh'}}>

      <div className="row p-4 dashboardrow">
        <div className="col">
          <h3 className="active">Dashboard</h3>
        </div>
        {/* <div className="col" id="date" style={{fontSize: 12, margin: 10}}>
        </div> */}
      </div>
      <div className="row p-4">
        <div className="col card">
          <h6>Total Contact</h6>
          <canvas id="pie-chart" style={{display: 'block', width: 50, height: 40}}>
</canvas>
        </div>
        <div className="col card">
          <h6>Audience Reached</h6>
          <canvas id="pie-chart2" style={{display: 'block', width: 50, height: 40}}>
</canvas>
        </div>
        <div className="col card">
          <h6>Total Design</h6>
          <canvas id="pie-chart3" style={{display: 'block', width: 50, height: 40}}>
</canvas>
        </div>
      </div>
      <div className="row p-4">
        <div className="col card">
          <canvas id="chart" style={{display: 'block', width: 455, height: 205}}>
</canvas>
        </div>
      </div>
    </div>
    <div className="user-profile position-fixed" style={{backgroundColor: '#fff', height: '100vh', width: '20%'}}>

      <div className="container">
        <div style={{display: 'flex', justifyContent: 'flex-end', padding: 10, fontSize: 10}}>
          <Link to="./index.html" onclick="signOut()" style={{border: '1px solid #01081e', borderRadius: 4, color: '#8c30f5', padding: 3}} >
Sign Out</Link>

        </div>
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-evenly', color: '#c4c4c4'}}>
          <img src="images/caricature1.svg" id="profilePic" alt="image" height={100} width={100} style={{borderRadius: '50%'}} />

          <h3 id="usersname111">Malik Mukhtar</h3>

        </div>
        <div className="position-relative" style={{display: 'flex', justifyContent: 'space-evenly', padding: 10, color: '#c4c4c4'}}>

         <Link style={{color: '#8c30f5'}} to="/">
 Messages
            <i style={{fontSize: '1.5rem', position: 'relative'}} className="far fa-comment-alt">
<span className="notify"
                id="notif"></span></i>
          </Link>
        </div>
        <div className="w-100 my-4" style={{height: 30}}>
          <img src="./images/post-it.svg" className="float-right mr-4" style={{width: 30, height: '100%', cursor: 'pointer'}} alt="post-it" />

        </div>
        {/* <!-- Sticky Note --> */}
        <div className="sticky-note p-2 m-auto overflow-auto" id="stickyNote" style={{display: 'none'}} contentEditable="true" onkeyup="saveNote()">
        </div>
      </div>
    </div>
  </div>
</div>
// </div>
    )
}
