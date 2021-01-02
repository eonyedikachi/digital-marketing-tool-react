import { Button, Modal } from "bootstrap";
import React, {useState} from "react";
import styled from "styled-components";
import Signup from "./Signup";

const MButton = styled.Button`
  background: #8c30f5;
  color: #fff;
  align-self: center;
  width: 40%;
`;

function RegisterModal() {
  const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <MButton onClick={handleShow}>
                Sign Up
        </MButton>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Register</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Signup />
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={handleClose}></Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default RegisterModal;