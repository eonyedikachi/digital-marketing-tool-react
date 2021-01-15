import React  from "react";
import { Link } from "react-router-dom";

function AdminUserDashboard() {
  return (
    <div className="wrapper">
      <div className="sidebar">
        <Link className="nav-item flex"></Link>
        <Link className="nav-item flex"></Link>
        <Link className="nav-item flex"></Link>
      </div>
      <div className="main">
        <h1 className="active title">Suggestions</h1>

        <div>
          <div
            className="col"
            id="date"
            style={{ fontSize: 12, margin: 10 }}
          ></div>
          <div className="row my-5">
            <div className="col">
              <div className="stats">
                <div className="stat-name">
                  <div className="users">
                    <img
                      src="https://team2-digital-marketing-tool.netlify.app/images/users.svg"
                      alt="users"
                    />
                  </div>
                  <h2 className="ml-2 mt-2" id="registeredUsers">
                    1
                  </h2>
                  <p className="ml-2">Registered Users</p>
                </div>
                <div className="stat-chart">
                  <img
                    src="https://team2-digital-marketing-tool.netlify.app/images/wave.svg"
                    alt="wave"
                  />
                </div>
              </div>
            </div>
            <div className="col">
              <div className="stats">
                <div className="stat-name">
                  <div className="visits">
                    <img
                      src="https://team2-digital-marketing-tool.netlify.app/images/website.svg"
                      alt="visits"
                    />
                  </div>
                  <h2 className="ml-2 mt-2" id="pageVisits">
                    1
                  </h2>
                  <p className="ml-2">Page Visits</p>
                </div>
                <div className="stat-chart">
                  <img
                    src="https://team2-digital-marketing-tool.netlify.app/images/wave2.svg"
                    alt="wave2"
                  />
                </div>
              </div>
            </div>
            <div className="col">
              <div className="stats">
                <div className="stat-name">
                  <div className="disabled">
                    <img
                      src="https://team2-digital-marketing-tool.netlify.app/images/breaking.svg"
                      alt="disabledUsers"
                    />
                  </div>
                  <h2 className="ml-2 mt-2" id="disabledUsers">
                    1
                  </h2>
                  <p className="ml-2">Disabled Users</p>
                </div>
                <div className="stat-chart">
                  <img
                    src="https://team2-digital-marketing-tool.netlify.app/images/wave3.svg"
                    alt="wave3"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sidebar">
        


<div className="user-profile position-fixed" style={{backgroundColor: '#fff', height: '100vh', width: '20%'}}>
  <div className="container">
    <div style={{display: 'flex', justifyContent: 'flex-end', padding: 10, fontSize: 10}}>
      <a href="./index.html" onclick="signOut()" style={{border: '1px solid #01081e', borderRadius: 4, color: '#8c30f5', padding: 3}}>Sign
        Out</a>
    </div>
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-evenly'}}>
      <img src="images/caricature1.svg" id="profilePic" alt="image" height={100} width={100} style={{borderRadius: '50%'}} />
      <h3 id="usersname111">Malik Mukhtar</h3>
    </div>
    <div className="w-100 my-4" style={{height: 30}}>
      <img src="./images/post-it.svg" className="float-right mr-4" style={{width: 30, height: '100%', cursor: 'pointer'}} alt="post-it" onclick="openNote()" />
    </div>
    {/* Sticky Note */}
    <div className="sticky-note p-2 m-auto overflow-auto" id="stickyNote" style={{display: 'none'}} contentEditable="true" onkeyup="saveNote()">
    </div>
  </div>
</div>






      </div>
    </div>
  );
}
export default AdminUserDashboard;
