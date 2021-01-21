import React, { useEffect, useState }  from "react";
import AdminLeftSidebar from "./adminleftsidebar";
import AdminRightSidebar from "./adminrightsidebar";
import wave from "./Images/wave.svg";
import wave2 from "./Images/wave2.svg";
import wave3 from "./Images/wave3.svg";
import website from "./Images/website.svg";
import axios from "axios";
import lusers from "./Images/users.svg";
import breaking from "./Images/breaking.svg";
import './user-management'

function AdminUserDashboard() {
const token = localStorage.getItem("Token");
const [users, setUsers] = useState([]);
const totalUsers = users.length;

  useEffect(() => {
    axios
      .get("https://martreach.herokuapp.com/api/users", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setUsers(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="wrapper">
      <AdminLeftSidebar />
      <div className="main">
        <h1 className="active title">Dashboard</h1>

        <div class="row">
          <div class="column">
            <div class="card">
              <div style={{ backgroundColor: "#D5D1FB" }} className="picd">
                <img className="pic" src={lusers} alt="users" />
              </div>
              <div className="txt">
                <h3 style={{ color: "#634CE6" }}>{totalUsers}</h3>
                <p>Users</p>
              </div>
              <div className="wave">
                <img className="waved" src={wave} alt="wave3" />
              </div>
            </div>
          </div>

          <div class="column">
            <div class="card">
              <div style={{ backgroundColor: "#b2ecc3" }} className="picd">
                <img className="pic" src={website} alt="users" />
              </div>
              <div className="txt">
                <h3 style={{ color: "#0aa236" }}>12</h3>
                <p>Page Visits</p>
              </div>
              <div className="wave">
                <img className="waved" src={wave2} alt="wave3" />
              </div>
            </div>
          </div>

          <div class="column">
            <div class="card">
              <div style={{ backgroundColor: "#e6caca" }} className="picd">
                <img className="pic" src={breaking} alt="users" />
              </div>
              <div className="txt">
                <h3 style={{ color: "#ae1414" }}>12</h3>
                <p>Disabled Users</p>
              </div>
              <div className="wave">
                <img className="waved" src={wave3} alt="wave3" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <AdminRightSidebar />
    </div>
  );
}
export default AdminUserDashboard;
