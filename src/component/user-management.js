import React, { useState, useEffect } from "react";
import "./user-management.css";
import axios from "axios";
import AdminLeftSidebar from "./adminleftsidebar";
import AddUserModal from "./addusermodal";
import { MDBTable, MDBTableBody, MDBTableHead } from "mdbreact";

function Users() {
  const token = localStorage.getItem("token");
  const [users, setUsers] = useState([]);
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

  console.log(users);

  return (
    <div className="wrapper">
      <AdminLeftSidebar />
      <div className="main">
        <h1 className="title"> User Management</h1>
        <AddUserModal />
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
          <MDBTable hover>
            <MDBTableHead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Username</th>
                <th>Email</th>
                <th>Role</th>
              </tr>
            </MDBTableHead>
            <MDBTableBody>
              <td>1</td>
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
            </MDBTableBody>
          </MDBTable>
        </div>
      </div>
    </div>
  );
}
export default Users;
