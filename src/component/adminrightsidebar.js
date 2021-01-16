/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import "./adminsidebar.css";
import stickynote from "./Images/stickynote.png";
import sticky from "./Images/post-it.svg";
import Dp from "./Images/caricature1.svg";

const firstName = localStorage.getItem("firstName");
const lastName = localStorage.getItem("lastName");
const userName = `${firstName} ${lastName}`;
 

 function AdminRightSidebar() {
    return (
      <div className="rightbar">
        <hr className="hr" />
        <div>
          <div className="p">
            <img className="sticky" src={stickynote} />
            <img className="sticky" src={sticky} />
          </div>
        </div>
        <img src={Dp} className="profilePic" alt="image" />{" "}
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