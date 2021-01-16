import React, { Component } from "react";
import Modal from "react-modal";
import "./user-management.css";

class AddUserModal extends Component {
  state = {
    modalIsOpen: false,
  };

  openModal = () => {
    this.setState({ modalIsOpen: true });
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

  render() {
    return (
      <div>
        <div>
          <button onClick={this.openModal} className="bttn">
            Add User
          </button>
        </div>
        <Modal isOpen={this.state.modalIsOpen} onRequestClose={this.closeModal}>
          <button onClick={this.closeModal}>close</button>
          <div>I am a modal</div>
        </Modal>
      </div>
    );
  }
}
export default AddUserModal;
