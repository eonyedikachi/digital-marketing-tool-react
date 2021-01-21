/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useEffect } from "react";
import "./user-management.css";
import axios from "axios";
import stickynote from "./Images/stickynote.png";
import sticky from "./Images/post-it.svg";
import Dp from "./Images/caricature1.svg";
import ReactStickyNotes from "@react-latest-ui/react-sticky-notes";

const firstName = localStorage.getItem("firstName");
const lastName = localStorage.getItem("lastName");
const pics = localStorage.getItem("pic");
const uId = localStorage.getItem("uId");
const userName = `${firstName} ${lastName}`;
 

function AdminRightSidebar() {
const token = localStorage.getItem("Token");
const [Notes, setNotes] = useState([]);
const [Note, setNote] = useState({});
const [modalIsOpen, setModalOpen] = useState(false);



  useEffect(() => {
    axios
      .get(`https://martreach.herokuapp.com/api/stickynote/${uId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setNotes(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const updateNote = (note) => {
    setNote(note);
    setModalOpen(true);
  };

  const deleteNote = (id) => {
    axios
      .delete(`https://martreach.herokuapp.com/api/stickynote/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        alert("Note deleted");
      })
      .catch((err) => {
        alert("An error occurred while deleting note");
      });
  }; 

console.log(pics)

    return (
      <div className="rightbar">
        <hr className="hr" />
        <div>
          <div className="p">
            <img className="sticky" src={stickynote} />
            <img className="sticky" src={sticky} />
          </div>
        </div>
        <img src={pics} className="profilePic" alt="image" />
        <p className="topic">{userName}</p>
        {/* Sticky Note */}
        <div>
          <button className="bttn" >
            Sign Out
          </button>
        </div>
        
        <div
          className="sticky-note p-2 m-auto overflow-auto"
          id="stickyNote"
          style={{ display: "none" }}
          contentEditable="true"
          onkeyup="saveNote()"
        ></div>
      </div>
    );
}
export default AdminRightSidebar;