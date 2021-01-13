import React, { useState, useEffect } from "react";
import "./user-management.css";
import { Link } from "react-router-dom";
import axios from "axios";

function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
      axios
        .get("https://martreach.herokuapp.com/api/users", {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjozLCJmaXJzdE5hbWUiOiJFa2VzbyIsImxhc3ROYW1lIjoiTG9uZ2UiLCJ1c2VybmFtZSI6ImVrZXNvbG9uZ2UiLCJ0ZWwiOiIwODA2MzgzODc0NSIsImVtYWlsIjoiYnVoYXJpQGdtYWlsLmNvbSIsIndlYnNpdGUiOiJ3d3cuZWtlc29sb25nZS5jb20iLCJwaWN0dXJlIjoidXBsb2Fkcy9pbWFnZXMvMTYwNzk0ODkyNjA1OS5qcGciLCJvdHAiOiIiLCJpc0VuYWJsZWQiOiJ0cnVlIiwiZGF0ZUNyZWF0ZWQiOiIyMDIwLTEyLTE1VDEwOjIyOjIxLjAwMFoiLCJyb2xlSWQiOjMsInVzZXJJZCI6MTEsInBlcm1pc3Npb25zIjpbeyJwZXJtaXNzaW9uTmFtZSI6ImFkZF91c2VyIiwiZ3JvdXBOYW1lIjoidXNlcl9tYW5hZ2VtZW50In0seyJwZXJtaXNzaW9uTmFtZSI6ImVkaXRfdXNlciIsImdyb3VwTmFtZSI6InVzZXJfbWFuYWdlbWVudCJ9LHsicGVybWlzc2lvbk5hbWUiOiJ2aWV3X3VzZXIiLCJncm91cE5hbWUiOiJ1c2VyX21hbmFnZW1lbnQifSx7InBlcm1pc3Npb25OYW1lIjoiZGVsZXRlX3VzZXIiLCJncm91cE5hbWUiOiJ1c2VyX21hbmFnZW1lbnQifSx7InBlcm1pc3Npb25OYW1lIjoiYWRkX3JvbGUiLCJncm91cE5hbWUiOiJyb2xlX21hbmFnZW1lbnQifSx7InBlcm1pc3Npb25OYW1lIjoiZWRpdF9yb2xlIiwiZ3JvdXBOYW1lIjoicm9sZV9tYW5hZ2VtZW50In0seyJwZXJtaXNzaW9uTmFtZSI6InZpZXdfcm9sZSIsImdyb3VwTmFtZSI6InJvbGVfbWFuYWdlbWVudCJ9LHsicGVybWlzc2lvbk5hbWUiOiJkZWxldGVfcm9sZSIsImdyb3VwTmFtZSI6InJvbGVfbWFuYWdlbWVudCJ9LHsicGVybWlzc2lvbk5hbWUiOiJhZGRfcGVybWlzc2lvbiIsImdyb3VwTmFtZSI6InBlcm1pc3Npb25fbWFuYWdlbWVudCJ9LHsicGVybWlzc2lvbk5hbWUiOiJlZGl0X3Blcm1pc3Npb24iLCJncm91cE5hbWUiOiJwZXJtaXNzaW9uX21hbmFnZW1lbnQifSx7InBlcm1pc3Npb25OYW1lIjoidmlld19wZXJtaXNzaW9uIiwiZ3JvdXBOYW1lIjoicGVybWlzc2lvbl9tYW5hZ2VtZW50In0seyJwZXJtaXNzaW9uTmFtZSI6ImRlbGV0ZV9wZXJtaXNzaW9uIiwiZ3JvdXBOYW1lIjoicGVybWlzc2lvbl9tYW5hZ2VtZW50In1dfSwiaWF0IjoxNjEwNTUzODUyLCJleHAiOjE2MTA1NTc0NTJ9.fRDxIIq1EjWSuX4ZXmSiElJ_p6hi_RhMwH8Wtv7_c74",
          },
        })
        .then((response) => {
          setUsers(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
  }, []);

    console.log(users)
  return (
    <div className="wrapper">
      <div className="sidebar">
        <Link to="">Dashboard</Link>
        <Link to="">User Management</Link>
        <Link to="">Feedback</Link>
        <p>Administrator</p>
      </div>
      <div className="main">
              <h1 className="title"> User Management</h1>
              

              {/* <button className="btn">Add User</button> */}
              

              
                <div>
  <div className="search">
    <input type="text" id="search" placeholder="Search by Username" />
    <button className="searchBtn" onclick="search()">Search</button>
    <button className="searchBtn cancel" onclick="cancelSearch()">Cancel</button>
  </div>
  <div className="result mb-4">
    <p id="searchResult" />
  </div>
</div>

                  
        <div className="row">
          <div className="col-md-6">
            <h2>
              <i className="fa fa-users" /> Users
            </h2>
          </div>
          <div className="col-md-6"></div>
          <table className="table table-striped">
            <thead className="thead-inverse">
              <tr>
                <th>Name</th>
                <th>Username</th>
                <th>Email</th>
                <th>Role</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>
                    {user.firstName} {user.lastName}
                  </td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.roleName}</td>
                  <td>
                    {/* <Link
                      to={`/user/${user.id}`}
                      className="btn btn-secondary btn-sm"
                    >
                      <i className="fa fa-arrow-circle-right"></i> Details
                    </Link> */}
                      </td>
                      
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="sidebar">
        <button>Sign Out</button>
      </div>
    </div>
  );
}
export default Users;


