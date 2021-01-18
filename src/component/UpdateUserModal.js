import axios from "axios";
import React, { useEffect, useState } from "react";
import Modal from "react-modal";

const UpdateUserModal = ({ initialUserDetails, modalIsOpen, setModalOpen }) => {
  const updatedInitialDetails = {
    firstName: initialUserDetails?.firstName,
    lastName: initialUserDetails?.lastName,
    email: initialUserDetails?.email,
    tel: initialUserDetails?.tel,
  };

  const token = localStorage.getItem("token");
  const [userDetails, setUserDetails] = useState(updatedInitialDetails || {});

  const onInputChanged = (e, field) => {
    const updatedUserDetails = { ...userDetails };
    updatedUserDetails[field] = e.target.value;
    setUserDetails(updatedUserDetails);
  };

  const updateUser = () => {
    axios
      .put(
        `https://martreach.herokuapp.com/api/users/${initialUserDetails.id}`,
        userDetails,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        console.log(response);
        setModalOpen(false);
      })
      .catch((err) => {
        alert("An error occurred while updating user");
        console.log(err);
      });
  };

  const labelStyle = {
    width: "100px",
  };

  const modalContainerStyle = {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  };

  return (
    <div>
      {
        /using inline style temporarily because I'm too lazy to figure out why classes weren't working/
      }

      <Modal isOpen={modalIsOpen} onRequestClose={() => setModalOpen(false)}>
        <div
          style={modalContainerStyle}
          className="add_user_modal flex flex-col justify-center"
        >
          <div>
            <label style={labelStyle}>First Name: </label>
            <input
              onChange={(e) => onInputChanged(e, "firstName")}
              value={userDetails.firstName}
            />
          </div>
          <div>
            <label style={labelStyle}>Last Name: </label>
            <input
              onChange={(e) => onInputChanged(e, "lastName")}
              value={userDetails.lastName}
            />
          </div>
          <div>
            <label style={labelStyle}>Email: </label>
            <input
              onChange={(e) => onInputChanged(e, "email")}
              value={userDetails.email}
            />
          </div>
          <div>
            <label style={labelStyle}>Phone: </label>
            <input
              onChange={(e) => onInputChanged(e, "tel")}
              value={userDetails.tel}
            />
          </div>
          <div>
            <label style={labelStyle}>Password: </label>
            <input
              type="password"
              onChange={(e) => onInputChanged(e, "password")}
              value={userDetails.password}
            />
          </div>

          <button onClick={updateUser}>Update User</button>
        </div>
      </Modal>
    </div>
  );
};

export default UpdateUserModal;
