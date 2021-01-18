import React, { useState, useEffect, } from "react";
import { Link } from "react-router-dom";
import "./user-management.css";
import axios from "axios";
import AdminLeftSidebar from "./adminleftsidebar";
import { MDBTable, MDBTableBody, MDBTableHead } from "mdbreact";

function Feedback() {
  const token = localStorage.getItem("Token");
const [suggestions, setSuggestions] = useState([]);
// const totalUsers = suggestions.length;
  useEffect(() => {
    axios
      .get("https://martreach.herokuapp.com/api/suggestions", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setSuggestions(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="wrapper">
      <AdminLeftSidebar />
      <div className="main">
      <h1>Feedback of Registered Users</h1>
    <MDBTable hover>
            <MDBTableHead>
              <tr>
                <th>#</th>
                <th>Date</th>
                <th>Category</th>
                <th>Message</th>
              </tr>
            </MDBTableHead>
            <MDBTableBody>
              {suggestions.map((suggestion, index) => (
                <tr key={suggestion.id}>
                  <td>{index + 1}</td>
                  <td>
                    {suggestion.dateCreated}
                  </td>
                  <td>{suggestion.category}</td>
                  <td>{suggestion.message}</td>
                  {/* <td>
                    <button onClick={() => replySuggestion(suggestion)}>Reply</button>
                  </td>
                  <td>
                    <button onClick={() => deleteUser(user.id)}>Delete</button>
                  </td> */}

                  <td>
                    <Link onClick ={(id) => (localStorage.setItem('sId', suggestion.id))}
                      to={`/suggestion/${suggestion.id}`}
                      className="btn btn-secondary btn-sm"
                    >
                      <i className="fa fa-arrow-circle-right"></i> Details
                    </Link>
                  </td>
                </tr>
              ))}
            </MDBTableBody>
        </MDBTable>
      </div>
      </div>
  );
}
export default Feedback;
