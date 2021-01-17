import React, { useState, useEffect } from "react";
import "./user-management.css";
import axios from "axios";
import AdminLeftSidebar from "./adminleftsidebar";
import AddUserModal from "./UpdateUserModal";
import { MDBTable, MDBTableBody, MDBTableHead } from "mdbreact";
import UpdateUserModal from "./UpdateUserModal";

function Users() {
  const token = localStorage.getItem("token");
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [modalIsOpen, setModalOpen] = useState(false);

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

  const updateUser = (user) => {
    setUser(user);
    setModalOpen(true);
  };

  const deleteUser = (id) => {
    axios
      .delete(`https://martreach.herokuapp.com/api/users/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        alert("User deleted");
      })
      .catch((err) => {
        alert("An error occurred while deleting user");
      });
  };

  return (
    <div className="wrapper">
      <AdminLeftSidebar />
      <div className="main">
        <h1 className="title"> User Management</h1>
        <AddUserModal />
        <UpdateUserModal
          initialUserDetails={user}
          modalIsOpen={modalIsOpen}
          setModalOpen={setModalOpen}
        />
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
              {users.map((user, index) => (
                <tr key={user.id}>
                  <td>{index + 1}</td>
                  <td>
                    {user.firstName} {user.lastName}
                  </td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.roleName}</td>
                  <td>
                    <button onClick={() => updateUser(user)}>Edit</button>
                  </td>
                  <td>
                    <button onClick={() => deleteUser(user.id)}>Delete</button>
                  </td>

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
