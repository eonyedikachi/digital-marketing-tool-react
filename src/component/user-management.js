import React, { useState, useEffect } from "react";
import "./user-management.css";
import { Link } from "react-router-dom";
import axios from "axios";

function Users() {
  
  const token = localStorage.getItem("token");
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get("https://martreach.herokuapp.com/api/users", {
        headers: {
          Authorization:
            `Bearer ${token}`},
      })
      .then((response) => {
        setUsers(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


  console.log(users);
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
            <button className="searchBtn" onclick="search()">
              Search
            </button>
            <button className="searchBtn cancel" onclick="cancelSearch()">
              Cancel
            </button>
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
